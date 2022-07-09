const {knex} = require('./options/mariaDB');

const getProducts = async (knex) => {
  let rows = await knex.from("productos").select("*")
  for (const row of rows) console.log (`${row[ "id" ]} ${row[ "name" ]} ${row[ "price" ]}`)
}

getProducts(knex);
