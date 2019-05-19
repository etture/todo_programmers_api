import { Request, Response } from 'express';
import knex from '../utils/knexfile';
import {ITodoList} from '../utils/definitions';

// DB에서 모든 TODO 항목들을 반환
export const getAllTodos = (req: Request, res: Response) => {
	knex.select('*')
		.from('todos')
		.then((todoList: ITodoList) => {
			res.json({
				success: true,
				todoList
			});
		})
		.catch((error) => {
			res.json({
				success: false,
				error
			});
		});
};

// 완료된 TODO 항목들을 반환
export const getCompletedTodos = (req: Request, res: Response) => {
	knex.select('*')
		.from('todos')
		.where({ completed: true })
		.then((todoList: ITodoList) => {
			res.json({
				success: true,
				todoList
			});
		})
		.catch((error) => {
			res.json({
				success: false,
				error
			});
		});
};

// 완료 안된 TODO 항목들을 반환
export const getUncompletedTodos = (req: Request, res: Response) => {
	knex.select('*')
		.from('todos')
		.where({ completed: false })
		.then((todoList: ITodoList) => {
			res.json({
				success: true,
				todoList
			});
		})
		.catch((error) => {
			res.json({
				success: false,
				error
			});
		});
};