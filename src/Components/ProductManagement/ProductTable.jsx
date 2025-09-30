import React from "react";

const ProductTable = ({ product }) => {
  console.log(product);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.map((p, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{p.name}</td>
            <td>{p.price}</td>
            <td>{p.quantity}</td>
            <td></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
