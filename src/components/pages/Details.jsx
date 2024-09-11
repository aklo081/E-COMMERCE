import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EcomContext from '../../context/EcomContext';
import ProductImages from '../ProductImages';

function Details() {
  const { product, addToCart } = useContext(EcomContext);
  const { id } = useParams();
  const [productItems, setProductItems] = useState(null);
  const [selectedImages, setSelectedImages] = useState('');

  useEffect(() => {
    const foundProduct = product.find((item) => item._id === id);
    setProductItems(foundProduct);
    if (foundProduct?.images?.length) {
      setSelectedImages(foundProduct.images[0].img);
    }
  }, [id, product]);

  if (!productItems) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container max-w-4xl mx-auto my-12">
      <h1 className="text-4xl my-9 uppercase font-bold text-center">
        {productItems?.name} Details
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Gallery */}
        <div className="w-full md:w-1/2">
          <img src={selectedImages} alt={productItems?.name} className="w-full h-auto rounded-lg shadow-lg" />
          <ProductImages images={productItems?.images} setSelectedImages={setSelectedImages} />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Accessory Details</h2>

          <div className="space-y-4">
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span className="font-semibold text-gray-700">Price:</span>
              <span className="text-gray-900">#{productItems?.price}</span>
            </div>

            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span className="font-semibold text-gray-700">Material:</span>
              <span className="text-gray-900">{productItems?.material}</span>
            </div>

            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span className="font-semibold text-gray-700">Color:</span>
              <span className="text-gray-900">{productItems?.color}</span>
            </div>

            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span className="font-semibold text-gray-700">Size:</span>
              <span className="text-gray-900">{productItems?.size}</span>
            </div>

            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span className="font-semibold text-gray-700">Brand:</span>
              <span className="text-gray-900">{productItems?.brand}</span>
            </div>

            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span className="font-semibold text-gray-700">Model:</span>
              <span className="text-gray-900">{productItems?.model}</span>
            </div>

            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span className="font-semibold text-gray-700">SKU:</span>
              <span className="text-gray-900">{productItems?.sku}</span>
            </div>

            <div className="pt-4">
              <span className="font-semibold text-gray-700">Description:</span>
              <p className="text-gray-900">{productItems?.description}</p>
            </div>
          </div>

          <button
            className="mt-8 w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition"
            onClick={() => addToCart(productItems._id, 1, productItems)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
