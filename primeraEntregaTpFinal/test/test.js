const axios = require('axios')
const assert = require('assert')

const app = require('../src/server.js')
const ContenedorArchivo = require('../contenedores/ContenedorArchivo.js')

const url = 'http://localhost:8080'

describe('eCommerce', () => {

  before((done) => {
    this.productos = new ContenedorArchivo('dbProductos.json')
    this.carritos = new ContenedorArchivo('dbCarritos.json')
    this.server = app.listen(8080, done)
  })

  afterEach(async () => {
    await this.productos.borrarAll()
    await this.carritos.borrarAll()
  })

  after(done => {
    this.server.close(done)
  })

  describe('API productos', () => {

    it('obtener todos los productos', async () => {
      const { data: productos } = await axios.get(`${url}/api/productos`)
      assert.deepStrictEqual(productos, [])
    })

    it('obtener producto por id', async () => {
      const producto = { p: 1 }
      const id = await this.productos.guardar(producto)
      producto.id = id

      const { data: recibido } = await axios.get(`${url}/api/productos/${id}`)
      assert.deepStrictEqual(recibido, producto)
    })

    it('crear producto', async () => {
      const producto = { p: 1 }
      const { data } = await axios.post(`${url}/api/productos`, producto)
      assert.strictEqual(data.id, 1)
      const actuales = await this.productos.listarAll()
      const esperados = [{ ...producto, id: data.id }]
      assert.deepStrictEqual(actuales, esperados)
    })

    it('actualizar producto', async () => {
      const producto = { p: 1 }
      const id = await this.productos.guardar(producto)
      producto.id = id
      await axios.put(`${url}/api/productos/${id}`, { id, p: 99 })
      const guardado = await this.productos.listar(id)
      assert.deepStrictEqual(guardado, { id, p: 99 })
    })

    it('eliminar producto', async () => {
      const producto = { p: 1 }
      const id = await this.productos.guardar(producto)
      producto.id = id
      await axios.delete(`${url}/api/productos/${id}`)
      const guardados = await this.productos.listarAll()
      assert.strictEqual(guardados.length, 0)
    })
  })

  describe('API carritos', () => {

    it('crear carrito', async () => {
      const { data } = await axios.post(`${url}/api/carritos`)
      assert.strictEqual(data.id, 1)
      const carritos = await this.carritos.listarAll()
      assert.strictEqual(carritos.length, 1)
      assert.strictEqual(carritos[0].id, 1)
    })

    it('eliminar carrito', async () => {
      const carrito = { productos: [{ p: 1 }] }
      const id = await this.carritos.guardar(carrito)

      await axios.delete(`${url}/api/carritos/${id}`)
      const carritos = await this.carritos.listarAll()
      assert.strictEqual(carritos.length, 0)
    })

    it('obtener productos del carrito', async () => {
      const producto = { p: 1 }
      const carrito = { productos: [producto] }
      const id = await this.carritos.guardar(carrito)
      carrito.id = id

      const { data: productos } = await axios.get(`${url}/api/carritos/${id}/productos`)
      assert.deepStrictEqual(productos, [producto])
    })

    it('agregar un producto al carrito', async () => {
      const carrito = { productos: [] }
      const idCarrito = await this.carritos.guardar(carrito)
      carrito.id = idCarrito

      const producto = { p: 1 }
      const idProd = await this.productos.guardar(producto)
      producto.id = idProd

      await axios.post(`${url}/api/carritos/${idCarrito}/productos`, { id: idProd })

      const carritoGuardado = await this.carritos.listar(idCarrito)
      assert.deepStrictEqual(carritoGuardado.productos, [producto])
    })

    it('elimina un producto del carrito', async () => {
      const producto1 = { id: 1, p: 1 }
      const producto2 = { id: 2, p: 2 }
      const carrito = { productos: [producto1, producto2] }
      const idCarrito = await this.carritos.guardar(carrito)

      await axios.delete(`${url}/api/carritos/${idCarrito}/productos/${producto1.id}`)
      const carritoGuardado = await this.carritos.listar(idCarrito)
      assert.deepStrictEqual(carritoGuardado.productos, [producto2])
    })
  })
})