const {knex} = require('./options/mariaDB');

const updateProducts = async (knex)=>{
  try {
    await knex('productos').where({id :1}).update({name: "Lavarropas"})
  } catch (error) {
    console.log(error)
  }
  console.log('producto modificado')
}

updateProducts(knex);