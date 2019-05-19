import knex from '../utils/knexfile';
import { Request, Response } from 'express';
import { getAllTodos } from './getTodos';
import { ITodoList, ITodoItem } from '../utils/definitions';

// MySQL 시간: time.toISOString()
// 새로운 TODO 항목 생성
export const createNewTodo = (req: Request, res: Response) => {
	const newTodoReq: ITodoItem = req.body;
	knex.insert(newTodoReq)
		.into('todos')
		.then(() => {
			getAllTodos((todoList: ITodoList) => {
				res.json({
					success: true,
					todoList
				});
			})
		})
		.catch(error => {
			res.json({
				success: false,
				error
			});
		});
};