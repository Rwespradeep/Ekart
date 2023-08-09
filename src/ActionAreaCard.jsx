import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Productstate } from "./ProductsContext";

export default function ActionAreaCard({ prodData }) {
  const { handleAddingCart, cartitems, setCartItems, handleDeletingCart } =
    Productstate();

  const addtoCart = () => {
    handleAddingCart(prodData._id);
  };
  const removeFromCart = () => {
    handleDeletingCart(prodData._id);
  };
  return (
    <Card sx={{ maxWidth: 350 }} className="card-parent">
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={prodData.mainImage.url}
        />
        <CardContent>
          <div className="card-content-wrapper">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="card-name"
            >
              {prodData.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              height="100"
              className="card-description"
            >
              {prodData.description}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={addtoCart}>
          Add
        </Button>
        <Button size="small" color="warning" onClick={removeFromCart}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
