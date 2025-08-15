const express = require("express");
const app = express();
const port = 3000;
const { products } = require("./data");

app.get("/", (req, res) => {
  res
    .status(200)
    .send("<h1>Home Page</h1><a href = '/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find((product) => {
    return product["id"] === Number(productID);
  });
  if (singleProduct === undefined) {
    return res.status(404).send("Product does not exist");
  }
  res.json(singleProduct);
});

app.get("/api/products/:productID/name/:name", (req, res) => {
  const { productID, name } = req.params;
  const newProducts = products.find((product) => {
    return (
      product["id"] === parseInt(productID) &&
      product["name"] === name
    );
  });
  if(newProducts === undefined){
    return res.status(404).send("Products not found");
  }
  res.json(newProducts);
});

app.get('/api/v1/query',(req,res) => {
  // console.log(req.query);
  const {search,limit} = req.query;
  let sortedProducts = [...products];

  if(search){
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    })
  }
  if(limit){
    sortedProducts = sortedProducts.slice(0,Number(limit));
  }
  if(sortedProducts.length < 1){
    // res.status(200).send("No products matched your search");
    return res.status(200).json({sucess: true, data: []});
  }
  return res.status(200).json(sortedProducts);
  // res.send("Hello World");
})
app.all(/.*/,(req,res) => {
    res.status(404).send("The url does not exist");
})

app.listen(port, function () {
  console.log("Server is listening on the 3000");
});
