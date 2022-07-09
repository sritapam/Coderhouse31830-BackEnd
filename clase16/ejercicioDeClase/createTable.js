const {knex} = require('./options/mariaDB');
const { knexSqLite } = require('./options/mySqlite3');


const createTable = async (knex) => {
  await knex.schema.createTable('productos', table =>{
    table.increments('id').primary();
    table.string('name');
    table.integer('price');
  
  });
  console.log('Tabla creada')
}

//createTable(knex);
createTable(knexSqLite);