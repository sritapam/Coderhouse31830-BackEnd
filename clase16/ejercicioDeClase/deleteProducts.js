const {knex} = require('./options/mariaDB');

const deleteProducts = async (knex)=>{
  try {
    await knex('productos').del()
  } catch (error) {
    console.log(error)
  }
  console.log('producto eliminado')
}

deleteProducts(knex);