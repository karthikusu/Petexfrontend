import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./Items.css";

function Items() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});

  useEffect(() => {
    fetch('http://localhost:1112/api/food')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleEdit = (product) => {
    setEditProduct(product);
    setEditedProduct({ ...product });
  };

  const handleUpdate = () => {
    try {
      fetch(`http://localhost:1112/api/food/${editProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedProduct),
      })
        .then((response) => response.json())
        .then((updatedProduct) => {
          setProducts((prevProducts) =>
            prevProducts.map((prevProduct) =>
              prevProduct.id === updatedProduct.id ? updatedProduct : prevProduct
            )
          );
          setEditProduct(null);
        })
        .catch((error) => console.error('Error updating product:', error));
    } catch (error) {
      console.error('Error in updating:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleDelete = (productId, productName) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${productName}?`);
    if (confirmDelete) {
      try {
        fetch(`http://localhost:1112/api/food/${productId}`, {
          method: 'DELETE',
        })
          .then((response) => {
            if (response.ok) {
              setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
            } else {
              console.error('Error deleting product:', response.statusText);
            }
          });
      } catch (error) {
        console.error('Error in deleting:', error);
      }
    }
  };

  return (
    <div className="body">
      <style>
        {`
        .body {
          font-family: 'Arial', sans-serif;
          background-color: #f4f4f4;
          padding: 20px;
        }

        .containerfood {
          margin: 0 auto;
        }

        .button {
          background-color: #007bff;
          color: #fff;
          padding: 8px 16px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          margin-left: 90%;
        }

        .title {
          color: #007bff;
        }

        .complete-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        .complete-table th, .complete-table td {
          padding: 12px;
          text-align: left;
          border: 1px solid #ddd;
        }

        .complete-table th {
          background-color: #007bff;
          color: #fff;
        }

        .complete-table tbody tr:hover {
          background-color: #e0e0e0;
        }

        .text-center {
          text-align: center;
        }

        .product-image {
          max-width: 100px;
          max-height: 100px;
          margin-top: 10px;
        }
        `}
      </style>
      <div className="containerfood">
        <div className="table-responsive">
          <Link to="/items"><button className="btn btn-primary1">Food</button></Link>
          <Link to="/toysvendor"><button className="btn btn-primary2">Toys</button></Link>
          <Link to="/cloths"><button className="btn btn-primary3">Clothing</button></Link>
        </div>
        <div className="table-responsive">
          <Link to="/vendoritemsform"><button className="button">+ Add New Items</button></Link>
          <h2 className='title'>Food Items List</h2>
          <table className="complete-table">
            <thead>
              <tr className="table border border-dark">
                <th>Product Name</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Status</th>
                <th>Image</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(products) && products.map((product) => (
                <tr key={product.id}>
                  <td>
                    {editProduct === product ? (
                      <input
                        type="text"
                        name="productName"
                        value={editedProduct.productName}
                        onChange={handleInputChange}
                      />
                    ) : (
                      product.productName
                    )}
                  </td>
                  <td>
                    {editProduct === product ? (
                      <input
                        type="number"
                        name="stock"
                        value={editedProduct.stock}
                        onChange={handleInputChange}
                      />
                    ) : (
                      product.stock
                    )}
                  </td>
                  <td>
                    {editProduct === product ? (
                      <input
                        type="number"
                        name="price"
                        value={editedProduct.price}
                        onChange={handleInputChange}
                      />
                    ) : (
                      product.price
                    )}
                  </td>
                  <td>
                    {editProduct === product ? (
                      <select
                        name="inStock"
                        value={editedProduct.inStock}
                        onChange={handleInputChange}
                      >
                        <option value={true}>In Stock</option>
                        <option value={false}>Out of Stock</option>
                      </select>
                    ) : (
                      product.inStock ? "In Stock" : "Out of Stock"
                    )}
                  </td>
                  <td>
                    {product.image && (
                      <img
                        src={`data:image/jpeg;base64,${product.image}`}
                        alt="Product"
                        className="product-image"
                      />
                    )}
                  </td>
                  <td className="text-center">
                    {editProduct === product ? (
                      <>
                        <button className="btn btn-primary" onClick={handleUpdate}>
                          Update
                        </button>
                        <button className="btn btn-primary" onClick={() => setEditProduct(null)}>
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="btn btn-primary" onClick={() => handleEdit(product)}>
                          Edit
                        </button>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleDelete(product.id, product.productName)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Items;
