import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Link, useNavigate } from "react-router-dom";
const Menu = ({ readProduct, data, deletProduct, addoOrders, editProduct }) => {
  useEffect(() => {
    readProduct();
  }, []);

  return (
    <section id="menu">
      <div className="container">
        <div className="menu">
          <h2>MENU</h2>
          <div className="cards">
            {" "}
            {data.map((el, index) => (
              <Card sx={{ width: "260px", height: "265px", padding: "10px" }}>
                <CardMedia
                  sx={{ borderRadius: "10px" }}
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={el.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {el.name}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {el.price}$
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    marginTop: "-20px",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <button
                    className="btn_create"
                    onClick={() => addoOrders(el.id)}
                  >
                    <AddIcon />
                  </button>

                  <Link to={`/edit/${el.id}`}>
                    <button
                      onClick={() => editProduct(index)}
                      className="btn_create"
                    >
                      <EditNoteIcon />
                    </button>
                  </Link>
                  <button
                    className="btn_create"
                    onClick={() => deletProduct(el.id)}
                  >
                    <DeleteIcon />
                  </button>
                </CardActions>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
