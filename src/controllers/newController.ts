import knex from '../utils/knexfile';
import { Request, Response } from 'express';
import { getAllTodos } from './getController';
import { ITodoList, ITodoItem } from '../utils/definitions';

// 새로운 TODO 작성 (선택에 따라 마감기한/우선순위 설정)
export const createNewTodo = (req: Request, res: Response) => {
	const newTodo: ITodoItem = req.body;
	knex.insert(newTodo)
		.into('todos')
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