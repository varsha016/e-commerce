

import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
// import { URL } from "../redux/api";
export default function ProductCard({ product }) {
  return <>
    {/* <h1>{JSON.stringify(product)}</h1> */}

    {/* {
      product.stock === 0 ? <>

        <img src={`${product.image[0]}`}
          alt={`${product.image[0]}`} />
        <h1 style={{ color: "green" }}>Out Off Stock</h1>
      </>
        : <>
          <Link to={`/product-detail/${product._id}`} className="nav-link">
            <Card sx={{ maxWidth: 345, background: "gray" }} >
              <CardMedia
                component="img"
                height="200"
                image={`${product.image[0]}`}
                alt={`${product.image[0]}`}
              />
              <CardContent>
                <Typography variant="h6" color="green">
                  {product.name}
                </Typography>

                <Typography variant="h6" color="green">
                  {product.category}
                </Typography>

                <Typography variant="h6" color="green">
                  ₹{product.price}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {product.desc}
                </Typography>
                <Typography variant="h6" color="green">
                  {product.stock}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </>
    } */}
    <Link to={`/product-detail/${product._id}`} className="nav-link">
      <Card sx={{ maxWidth: 345, background: "gray" }} >
        <CardMedia
          component="img"
          height="200"
          image={`${product.image[0]}`}
          alt={`${product.image[0]}`}
        />
        <CardContent>
          <Typography variant="h6" color="green">
            {product.name}
          </Typography>

          <Typography variant="h6" color="green">
            {product.category}
          </Typography>

          <Typography variant="h6" color="green">
            ₹{product.price}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {product.desc}
          </Typography>
          <Typography variant="h6" color="green">
            {product.stock}
          </Typography>
        </CardContent>
      </Card>
    </Link>


  </>
}
