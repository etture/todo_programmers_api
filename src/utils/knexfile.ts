import knex from 'knex';

const connection = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	dateStrings: true
};

const knexConn = knex({
	client: 'mysql',
	connection
});

// Check DB connection
knexConn.raw("SELECT 'test connection';").then(() => {
    console.log('DB connected!');
    console.log(connection);
}).catch((err) => {
    throw err;
});

export default knexConn;