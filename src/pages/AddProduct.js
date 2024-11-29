import React, { useState } from "react";
import "./AddProduct.css";

const AddProduct = () => {
  const [productDetails, setProductDetails] = useState({
    productName: "",
    actualPrice: "",
    discountPrice: "",
    sellingPrice: "",
    image: null,
  });

  const handleFileChange = (e) => {
    setProductDetails({ ...productDetails, image: e.target.files[0] });
  };

  const handleInputChange = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Product uploaded successfully!");
    console.log(productDetails);
    // Add product submission logic here
  };

  return (
    <div className="add-product">
      {[1, 2].map((_, index) => (
        <div key={index} className="product-card">
          <div className="image-upload">
            <label htmlFor={`imageUpload${index}`} className="upload-label">
              <div className="image-placeholder">
                <span>Add pic of product</span>
              </div>
            </label>
            <input
              id={`imageUpload${index}`}
              type="file"
              className="file-input"
              onChange={handleFileChange}
            />
          </div>
          <div className="product-details">
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              value={productDetails.productName}
              onChange={handleInputChange}
              className="input-field"
            />
            <input
              type="text"
              name="actualPrice"
              placeholder="Actual Price"
              value={productDetails.actualPrice}
              onChange={handleInputChange}
              className="input-field"
            />
            <input
              type="text"
              name="discountPrice"
              placeholder="Discount Price (Optional)"
              value={productDetails.discountPrice}
              onChange={handleInputChange}
              className="input-field"
            />
            <input
              type="text"
              name="sellingPrice"
              placeholder="Selling Price"
              value={productDetails.sellingPrice}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <button onClick={handleSubmit} className="upload-button">
            Upload to menu
          </button>
        </div>
      ))}
    </div>
  );
};

export default AddProduct;
