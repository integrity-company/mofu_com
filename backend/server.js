const express = require("express");
const app = express();

// 以下mongoDB接続
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://admin:romantic17@cluster0.8hbkz.mongodb.net/?retryWrites=true&w=majority";

const sampleData = {
  title: "花誕生123",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat dolore nihil minus, officia distinctio doloremque delectus quam mollitia. A, debitis.",
  url: "../../../../../public/sample_image/sample7.jpeg",
  price: 70000,
  lastUpdate: 5,
};

let db;
MongoClient.connect(uri, function (dbConnectErr, client) {
  if (dbConnectErr) return console.log(dbConnectErr);

  db = client.db("mofu_com");

  // 디비에 데이터 저장
  // db.collection("products").insertOne(
  //   sampleData,
  //   function (insertErr, insertRes) {
  //     if (insertRes) {
  //       console.log("저장완료");
  //     } else {
  //       console.log("저장불가");
  //     }
  //   }
  // );

  const PORT = 8080;
  const HOST = "0.0.0.0";

  app.get("/api", (req, res) => {
    db.collection("products")
      .find()
      .toArray(function (findErr, findRes) {
        res.header("Content-Type", "application/json; charset=utf-8");
        res.send(findRes);
      });
  });

  app.listen(PORT, HOST);
  // client.close();
});

console.log("server is running!");
