// expressフレームワーク
const express = require("express");
const app = express();

// ルート設定
app.get("/", (req, res) => res.send("Hello World"));

// api-cafeの設定
app.get("/api/v1/cafeInfo", (req, res) => {
  const cafeInfo = [
    { shop_brand: "ドトール", menu: "ドリップコーヒー" },
    { shop_brand: "スターバックスコーヒー", menu: "石窯フィローネ" },
    { shop_brand: "上島珈琲", menu: "ミルク紅茶" },
    { shop_brand: "エクセルシオール", menu: "カマンベールサンド" }
  ];
  res.json(cafeInfo);
});

// イベント待機
app.listen(3000, () => console.log("Listening on port 3000"));
