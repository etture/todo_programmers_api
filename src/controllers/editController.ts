import knex from '../utils/knexfile';
import { Request, Response } from 'express';
import { getAllTodos } from './getController';
import { ITodoList, ITodoItem } from '../utils/definitions';

// TODO 항목 제목/내용/우선순위/마감기한 변경
export const editTodoContent = (req: Request, res: Response) => {
	const editedTodo: ITodoItem = req.body;

	knex('todos')
		.update(editedTodo)
		.where({id: editedTodo.id, userid: editedTodo.userid})
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

// TODO 항목 완료처리
export const editTodoCompleted = (req: Request, res: Response) => {
	const editedTodo: ITodoItem = req.body;

	knex('todos')
		.update({completed: editedTodo.completed})
		.where({id: editedTodo.id,  userid: editedTodo.userid})
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