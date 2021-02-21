// import axios from "axios";

// export default axios.create({
//   baseURL: "http://localhost:8080/api",
//   headers: {
//     "Content-type": "application/json"
//   }
// });


const express = require('express')
const app = express()

app.get('/', function (req,res) {
  res.send("hello")
})

app.listen(3000,function() {
  console.log("example app listening port 3000")
})