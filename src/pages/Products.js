import React from 'react';

const Products = () => {
  const products = [
    { id: 1, name: 'Chicken', price: 200, category: 'Meat' },
    { id: 2, name: 'Eggs', price: 100, category: 'Dairy' },
  ];

  return (
    <div className="container mt-3">
      <h1>Product List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>
                <button className="btn btn-warning btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
