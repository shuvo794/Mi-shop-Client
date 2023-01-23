import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { CircularProgress } from "@mui/material";
import Product from "../../Shared/product/product";
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://mi-phone-shop-2axr.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container sx={{ my: 10 }}>
      {products.length ? (
        <Product products={products} sliceNumber={products.length}></Product>
      ) : (
        <CircularProgress sx={{ my: 20 }} />
      )}
    </Container>
  );
};

export default AllProducts;
