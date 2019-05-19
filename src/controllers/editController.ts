import knex from '../utils/knexfile';
import { Request, Response } from 'express';
import { getAllTodos } from './getTodos';
import { ITodoList, ITodoItem } from '../utils/definitions';

// TODO 항목 제목/내용 수정
export const editTodoContent = (req: Request, res: Response) => {};

// TODO 항목 우선순위 변경
export const editTodoPriority = (req: Request, res: Response) => {};

// TODO 항목 마감기한 변경
export const editTodoDeadline = (req: Request, res: Response) => {};

// TODO 항목 완료처리
export const editTodoCompleted = (req: Request, res: Response) => {};