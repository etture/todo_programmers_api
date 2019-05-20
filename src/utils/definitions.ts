/**
 * 서버에서 사용되는 객체들의 정의
 * TypeScript Interface 형태로 정의 후 export
 */

// TODO 항목들 목록
export interface ITodoList {
	todos: Array<ITodoItem>
};

// TODO 항목
export interface ITodoItem {
	id: number,
	userid: number,
	title: string,
	content: string,
	createdAt: string,
	completed: boolean,
	priority?: number,
	deadline?: string
};

export interface IPreDBTodoItem {
	userid: number,
	title: string,
	content: string,
	priority?: number,
	deadline?: string
};

export interface IAuth {
	nickname: string,
	password: string
};