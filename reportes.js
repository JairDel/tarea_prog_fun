const fs = require('fs');
class ProductDAO {
  constructor(filename) {
    this.filename = filename;
  }
  
  loadProducts() {
    const data = fs.readFileSync(this.filename, 'utf8');
    return JSON.parse(data);
  }
}
module.exports = ProductDAO;

const dao = new ProductDAO('productos.json');

const products = dao.loadProducts();

const mayor20 = products.filter(product => product.existencia > 20);
console.log('Número de productos con existencia mayor a 20: ' + mayor20.length);
console.log('------------------------------------------------------------------------------------------------------');

const menor15 = products.filter(product => product.existencia < 15);
console.log('Número de productos con existencia menos a 15: ' + menor15.length);
console.log('------------------------------------------------------------------------------------------------------');

const clasi_precio = products.filter(product =>
  product.clasificación === 'Limpieza' && product.precio > 15.50
);
console.log('Productos con la misma clasificación y precio mayor a 15.50:', clasi_precio);
console.log('------------------------------------------------------------------------------------------------------');

const entre_precios = products.filter(product =>
  product.precio > 20.30 && product.precio < 45.00
);
console.log('Productos con precio entre 20.30 y 45.00:', entre_precios);
console.log('------------------------------------------------------------------------------------------------------');

const nunero_productos = products.reduce((acc, product) => {
  const classification = product.clasificación;
  acc[classification] = (acc[classification] || 0) + 1;
  return acc;
}, {});

console.log('Número de productos agrupados por clasificación:', nunero_productos);
console.log('------------------------------------------------------------------------------------------------------');
