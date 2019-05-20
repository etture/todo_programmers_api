import knex from '../utils/knexfile';
import { Request, Response } from 'express';
import { IAuth } from '../utils/definitions';
import { hashPassword } from '../utils/encrypt';
import bcrypt from 'bcrypt';

export const signUp = (req: Request, res: Response, next: CallableFunction) => {
	const credentials: IAuth = req.body;
	const { nickname, password } = credentials;

	if (nickname === '' || password === '') {
		return res.send({
			success: false,
			errorMessage: '닉네임과 비밀번호를 모두 입력해주세요.',
			target: 'both'
		});
	}

	knex.select('*')
		.from('users')
		.where({ nickname })
		.limit(1)
		.then(result => {
			if (result.length > 0) {
				return res.send({
					success: false,
					errorMessage: '이미 등록된 닉네임입니다.',
					target: 'nickname'
				});
			}

			hashPassword(password, (error: any, hashedPassword: string) => {
				knex.insert({ nickname, password: hashedPassword })
					.into('users')
					.returning('id')
					.then(id => {
						res.json({
							success: true,
							userId: id[0]
						});
					})
					.catch(error => {
						res.json({
							success: false,
							errorMessage: "회원가입 에러가 발생했습니다. 다시 시도해주세요!",
							target: 'both'
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
		return res.send({
			success: false,
			errorMessage: '닉네임과 비밀번호를 모두 입력해주세요.',
			target: 'both'
		});
	}

	knex.select('*')
		.from('users')
		.where({ nickname })
		.limit(1)
		.then(result => {
			if (!result) {
				return res.json({
					success: false,
					errorMessage: '등록되지 않은 닉네임입니다.',
					target: 'nickname'
				});
			}
			const user = JSON.parse(JSON.stringify(result))[0];
			bcrypt.compare(password, user.password, (error, isMatch) => {
				if (error) return res.json({ 
					success: false, 
					errorMessage: '비밀번호를 제대로 입력해주세요.',
					target: 'password'
				});
				if (!isMatch) return res.json({ 
					success: false, 
					errorMessage: '비밀번호가 틀렸습니다.',
					target: 'password'
				});
				return res.json({
					success: true,
					userId: user.id
				});
			});
		})
		.catch(error => {
			res.json({
				success: false,
				errorMessage: "로그인 에러가 발생했습니다. 다시 시도해주세요!",
				target: 'both'
			});
		});
};