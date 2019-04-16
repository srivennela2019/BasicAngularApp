const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/authenticate", (req, res) => {
  if (req.body.username == "admin" && req.body.password == "admin") {
    var jtoken = jwt.sign(
      {
        username: req.body.username,
        org: "marlabs"
      },
      "vennela-secret",
      { expiresIn: "1h" }
    );
    res.send({
      islogin: true,
      token: jtoken
    });
  } else {
    res.status(400).send({
      islogin: false,
      err: "invalid details"
    });
  }
});
app.use((req, res, next) => {
  var token = req.headers.authtoken || req.body.authtoken || req.params.authtoken
  jwt.verify(token,'vennela-secret',(err,decoded)=>{
    if(err){
       res.status(400).send({
          err:"invalid details",
          islogin:false
       });
    }else{
       req.decoded = decoded;
       next();
    }
  })
});
app.get("/getproducts", (req, res) => {
  res.send([
    {
      ProductName: "Tape",
      ReleaseDate: "20-09-1092",
      Price: "100",
      Rating: "3.8",
      Url:
        "https://cdn11.bigcommerce.com/s-10c6f/images/stencil/500x659/products/79/5432/5STape-V201-1__56246.1479229531.jpg?c=2&imbypass=on"
    },
    {
      ProductName: "Scissors",
      ReleaseDate: "20-09-1092",
      Price: "100",
      Rating: "2.8",
      Url: "https://www.ikea.com/PIAimages/0112301_PE263788_S5.JPG"
    },
    {
      ProductName: "Rope",
      ReleaseDate: "20-09-1092",
      Price: "100",
      Rating: "1.8",
      Url:
        "https://images-na.ssl-images-amazon.com/images/I/A1afxQgEpcL._SX425_.jpg"
    },
    {
      ProductName: "Firewood",
      ReleaseDate: "20-09-1092",
      Price: "100",
      Rating: "1.8",
      Url:
        "https://opimedia.azureedge.net/-/media/images/men/editorial/articles/magazine-articles/1976/09-01/start-a-home-business-selling-firewood/firewood.jpg"
    },
    {
      ProductName: "Smile",
      ReleaseDate: "20-09-1092",
      Price: "100",
      Rating: "4.8",
      Url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/220px-SNice.svg.png"
    }
  ]);
});
app.listen(3000, () => {
  console.log("server running");
});
