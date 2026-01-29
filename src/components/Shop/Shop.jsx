import { TiStarFullOutline } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import ReactPaginate from "react-paginate";

const Shop = () => {
  const [loader, setLoader] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterBy, setFilterBy] = useState("");
  const [sortBy, setSortBy] = useState("");

  /* =====================
     FETCH PRODUCTS
  ====================== */
  useEffect(() => {
    setLoader(true);

    const url = filterBy
      ? `https://dummyjson.com/products/category/${filterBy}`
      : `https://dummyjson.com/products?sortBy=${sortBy}&order=asc`;

    axios.get(url).then((res) => {
      setProducts(res.data.products);
      setItemOffset(0);
      setLoader(false);
    });
  }, [filterBy, sortBy]);

  /* =====================
     FETCH CATEGORIES (SAFE)
  ====================== */
  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories").then((res) => {
      // handle string[] and object[] both
      if (typeof res.data[0] === "object") {
        setCategories(res.data);
      } else {
        setCategories(
          res.data.map((cat) => ({
            slug: cat,
            name: cat,
          })),
        );
      }
    });
  }, []);

  /* =====================
     PAGINATION
  ====================== */
  const itemsPerPage = 8;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <section className="pt-[50px]">
      <div className="container border-b border-gray-300">
        {/* HEADER */}
        <div className="flex justify-between items-center pb-8">
          <h1 className="text-[36px] font-semibold">
            Explore Category :
            <span className="text-[#db4444] capitalize">
              {filterBy ? ` ${filterBy}` : ""}
            </span>
          </h1>

          <select
            onChange={(e) => setSortBy(e.target.value)}
            className="border-2 border-[#df4444] p-2 text-[#df4444]"
          >
            <option value="">Sort By</option>
            <option value="title">Sort Name</option>
            <option value="price">Sort Price</option>
          </select>
        </div>

        <div className="flex gap-6">
          {/* CATEGORY */}
          <div className="w-1/5">
            <h2 className="text-[#df4444] text-[30px] mb-4 font-medium">Category</h2>

            <div className="bg-gray-100 p-4 rounded shadow mb-10">
              {categories.map((cat) => (
                <p
                  key={cat.slug}
                  onClick={() => setFilterBy(cat.slug)}
                  className={`cursor-pointer capitalize mb-2 hover:text-[#df4444]
                    ${filterBy === cat.slug ? "text-[#df4444] font-semibold" : ""}`}
                >
                  {cat.name}
                </p>
              ))} 
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="w-4/5">
            {loader ? (
              <p className="text-center text-xl py-20">Loading...</p>
            ) : (
              <div className="grid grid-cols-4 gap-8 mb-10 mt-15">
                {currentItems.map((product) => (
                  <div key={product.id}>
                    <div className="bg-[#F5F5F5] p-6 rounded">
                      <Link to={`/details/${product.id}`}>
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="mx-auto"
                        />
                      </Link>
                    </div>

                    <h3 className="mt-3 font-medium">
                      <Link to={`/details/${product.id}`}>{product.title}</Link>
                    </h3>

                    <p className="text-[#DB4444] font-semibold py-1">
                      ${product.price}
                    </p>

                    <div className="flex items-center gap-1">
                      <TiStarFullOutline className="text-[#FFAD33]" />
                      <TiStarFullOutline className="text-[#FFAD33]" />
                      <TiStarFullOutline className="text-[#FFAD33]" />
                      <FaStar className="text-gray-400" />
                      <FaStar className="text-gray-400" />
                      <span className="text-sm ml-2 text-gray-500">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* PAGINATION */}
            <ReactPaginate
              breakLabel="..."
              nextLabel="Next >"
              previousLabel="< Prev"
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName="flex justify-center gap-2 mb-10"
              pageClassName="px-3 py-1 border rounded cursor-pointer"
              activeClassName="bg-[#df4444] text-white"
              previousClassName="px-3 py-1 bg-[#df4444] text-white cursor-pointer"
              nextClassName="px-3 py-1 bg-[#df4444] text-white cursor-pointer"
              disabledClassName="opacity-50 cursor-not-allowed"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
