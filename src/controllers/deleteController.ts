import knex from '../utils/knexfile';
import { Request, Response } from 'express';
import { getAllTodos } from './getController';

// TODO 항목 삭제
export const deleteTodo = (req: Request, res: Response) => {
	const { id, userid } = req.body;
	knex('todos')
		.delete()
		.where({id, userid})
		.then(() => {
			getAllTodos(req, res);
		})
		.catch(error => {
			res.json({
				success: false,
				error
			});
		});
};