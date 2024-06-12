import { useState, useEffect } from "react";
import { fetchProducts } from "./../../api/api";

const SortedProduct = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("featured");
  const [filterBy, setFilterBy] = useState("all"); // State to hold the filter value

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchData();
  }, []);

  const handleSortChange = (e) => {
    const { name, value } = e.target;
    if (name === "sort_by") {
      setSortBy(value);
    } else if (name === "filter_by") {
      setFilterBy(value);
    }
  };

  // Filter products based on selected filter criteria
  const filteredProducts =
    filterBy === "all"
      ? [...products]
      : products.filter((product) =>
          filterBy === "men"
            ? product.category === "men's clothing"
            : product.category.includes(filterBy)
        );

  // Sort filtered products based on selected sorting criteria
  const sortedProducts = [...filteredProducts];
  if (sortBy === "low_to_high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "high_to_low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <section className="flex items-center justify-between px-3 py-2 bg-white border-b border-gray-200 shadow-sm">
        <p className="text-sm font-medium">
          Your Products ({sortedProducts.length})
        </p>

        <div className="flex items-center">
          <label htmlFor="filterBy" className="text-sm font-medium mr-2">
            Types Of Product
          </label>
          <select
            name="filter_by"
            id="filterBy"
            className="selectItem text-xs border border-gray-300 rounded px-2 py-1 outline-none"
            onChange={handleSortChange}
            value={filterBy}
          >
            <option value="all">All</option>
            <option value="men">mens clothing</option>
            <option value="women">womens clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">jewelery</option>
          </select>
        </div>

        <div className="flex items-center">
          <label htmlFor="sortBy" className="text-sm font-medium mr-2">
            Sort By:
          </label>
          <select
            name="sort_by"
            id="sortBy"
            className="selectItem text-xs border border-gray-300 rounded px-2 py-1 outline-none"
            onChange={handleSortChange}
            value={sortBy}
          >
            <option value="featured">Featured</option>
            <option value="low_to_high">Price: Low to High</option>
            <option value="high_to_low">Price: High to Low</option>
            <option value="avg_customer_review">Avg. Customer Review</option>
          </select>
        </div>
      </section>
      <section className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border cursor-pointer hover:shadow-xl p-2 transition-all duration-200 border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col"
          >
            <span className="text-xs flex justify-end text-gray-500 px-3 py-2">
              {product.category}
            </span>
            <div className="w-full h-auto flex-grow flex items-center justify-center">
              <img
                className="w-full h-64 object-contain p-3"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg text-blue-900 font-semibold mb-1">
                {product.title}
              </h2>
              <p className="text-gray-800 font-semibold text-xl mb-2">{`$${product.price}`}</p>
              <p className="text-sm text-gray-600 truncate mb-4">
                {product.description}
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 shadow-2xl text-black font-semibold px-4 py-2 text-sm rounded-lg w-full mt-auto">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default SortedProduct;
