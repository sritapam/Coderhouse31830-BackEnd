const { options } = require("./options/mysql.js")
const knex = require("knex")(options)
//Actualiza el precio a 5000 en los autos cuyo precio sea 1000
knex.from("cars").where("price", "1000").update({ price: 5000 })
    .then(() => {
        console.log("Car updated")
    }).catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy()
    })


/*
const { knexMysql } = require('./options/mariaDB');
const { knexSqLite } = require('./options/sqlLite3');

const updateProducts = (knex) => {
    knex('productos').where({id:1}).update({name: 'Lavarropa'})
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
}

updateProducts(knexMysql);
updateProducts(knexSqLite);
*/
