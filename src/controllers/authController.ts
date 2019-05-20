import knex from '../utils/knexfile';
import { Request, Response } from 'express';
import { IAuth } from '../utils/definitions';
import { hashPassword } from '../utils/encrypt';
import bcrypt from 'bcrypt';

export const signUp = (req: Request, res: Response, next: CallableFunction) => {
	const credentials: IAuth = req.body;
	const { nickname, password } = credentials;

	if (nickname === '' || password === '') {
		return res.status(422).send({ errorMessage: 'Must provide both email and password' });
	}

	knex.select('*')
		.from('users')
		.where({ nickname })
		.limit(1)
		.then(result => {
			if (result.length > 0) {
				return res.status(422).send({ errorMessage: 'Nickname is in use' });
			}

			hashPassword(password, (error: any, hashedPassword: string) => {
				knex.insert({ nickname, password: hashedPassword })
					.into('users')
					.returning('id')
					.then(id => {
						res.json({
							userId: id[0]
						});
					})
					.catch(error => {
						res.status(400).json({
							success: false,
							errorMessage: "회원가입 에러가 발생했습니다. 다시 시도해주세요!",
							error
						});
					});
			});
		})
		.catch(error => {
			next(error);
		});
};

export const signIn = (req: Request, res: Response, next: CallableFunction) => {
	const credentials: IAuth = req.body;
	const { nickname, password } = credentials;

	if (nickname === '' || password === '') {
		return res.status(422).send({ errorMessage: 'Must provide both email and password' });
	}

	knex.select('*')
		.from('users')
		.where({ nickname })
		.limit(1)
		.then(result => {
			if (!result) {
				return res.json({
					success: false,
					message: 'No such nickname'
				});
			}
			const user = JSON.parse(JSON.stringify(result))[0];
			bcrypt.compare(password, user.password, (error, isMatch) => {
				if (error) return res.json({success: false, message: 'compare error'});
				if (!isMatch) return res.json({success: false, message: 'wrong password'});
				return res.json({
					success: true,
					userId: user.id
				});
			});
		})
		.catch(error => {
			res.status(400).json({
				success: false,
				errorMessage: "로그인 에러가 발생했습니다. 다시 시도해주세요!",
				error
			});
		});
};