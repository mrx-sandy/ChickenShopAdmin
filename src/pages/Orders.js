import React from 'react';

const Orders = () => {
  const orders = [
    { id: 1, customer: 'John', status: 'Pending' },
    { id: 2, customer: 'Doe', status: 'Completed' },
  ];

  return (
    <div className="container mt-3">
      <h1>Order List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.status}</td>
              <td>
                <button className="btn btn-success btn-sm">Complete</button>
                <button className="btn btn-danger btn-sm">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
