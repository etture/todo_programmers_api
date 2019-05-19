import knex from '../utils/knexfile';

// DB에서 모든 TODO 항목들을 반환
export const getAllTodos = (callback: CallableFunction) => {
	knex.select('*')
	.from('todos')
	.then((todos) => {
		callback(todos);
	})
	.catch((error) => {
		callback(error);
	});
};

// 완료된 TODO 항목들을 반환
export const getCompletedTodos = (callback: CallableFunction) => {
	knex.select('*')
	.from('todos')
	.where({completed: true})
	.then((todos) => {
		callback(todos);
	})
	.catch((error) => {
		callback(error);
	});
};

// 완료 안된 TODO 항목들을 반환
export const getUncompletedTodos = (callback: CallableFunction) => {
	knex.select('*')
	.from('todos')
	.where({completed: false})
	.then((todos) => {
		callback(todos);
	})
	.catch((error) => {
		callback(error);
	});
};