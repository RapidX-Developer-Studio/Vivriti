import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10); // 10 cards per page
  const [selectedCategory, setSelectedCategory] = useState("all"); // Default category

  // Fetching data
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        }
      });
  }, []);

  const [expandedIds, setExpandedIds] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleExpand = (productId) => {
    if (expandedIds.includes(productId)) {
      setExpandedIds(expandedIds.filter((id) => id !== productId));
    } else {
      setExpandedIds([...expandedIds, productId]);
    }
  };

  const toggleLike = (productId) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter((id) => id !== productId));
    } else {
      setLikedProducts([...likedProducts, productId]);
    }
  };

  const isLiked = (productId) => {
    return likedProducts.includes(productId);
  };

  // Read more on description
  const renderDescription = (description, id) => {
    if (description.length <= 40 || expandedIds.includes(id)) {
      return description;
    }
    return (
      <>
        {`${description.substring(0, 40)}... `}
        <span
          style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
          onClick={() => toggleExpand(id)}
        >
          Read More
        </span>
      </>
    );
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Card section
  const renderCards = () => {
    return currentProducts.map((product) => (
      <Card
        key={product.id}
        style={{
          flex: "1 1 16%",
          margin: "10px",
          height: "100%",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px"
          }}
        >
          <div
            style={{
              backgroundColor: "grey",
              width: "32px",
              height: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px"
            }}
          >
            {isLiked(product.id) ? (
              <FavoriteIcon
                style={{ color: "red" }}
                onClick={() => toggleLike(product.id)}
              />
            ) : (
              <FavoriteBorderIcon
                onClick={() => toggleLike(product.id)}
              />
            )}
          </div>
        </div>
        <img
          src={product.images[0]}
          alt={product.title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover"
          }}
        />
        <CardContent>
          <Typography variant="h6" component="div" noWrap>
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {renderDescription(product.description, product.id)}
          </Typography>
          <Typography variant="subtitle1" color="primary">
            Price: ${product.price}
          </Typography>
          <Rating
            name={`rating-${product.id}`}
            value={4}
            precision={0.5}
            emptyIcon={
              <FavoriteBorderIcon style={{ color: "gold" }} />
            }
            icon={<FavoriteIcon style={{ color: "gold" }} />}
          />
        </CardContent>
      </Card>
    ));
  };

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div>
      <div
        style={{
          width: "20%",
          marginBottom: "30px",
          marginTop: "15px",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <Select
            value={selectedCategory}
            onChange={handleCategoryChange}
            displayEmpty
            inputProps={{ "aria-label": "Select Category" }}
            style={{ width: "100%" }}
          >
            <MenuItem value="all">All</MenuItem>
            {categories.map((category) => (
              <MenuItem value={category} key={category}>{category}</MenuItem>
            ))}
          </Select>
        </div>
      </div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "80px"
        }}
      >
        {renderCards()}
      </Box>
      <Stack
        spacing={2}
        sx={{
          justifyContent: "flex-end",
          marginTop: "10px"
        }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Stack>
    </div>
  );
};

export default ProductCards;
