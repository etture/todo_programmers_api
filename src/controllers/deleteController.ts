import knex from '../utils/knexfile';
import { Request, Response } from 'express';
import { getAllTodos } from './getController';
import { ITodoList, ITodoItem } from '../utils/definitions';

// TODO 항목 삭제
export const deleteTodo = (req: Request, res: Response) => {
	const { id } = req.body;
	knex('todos')
		.delete()
		.where('id', id)
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