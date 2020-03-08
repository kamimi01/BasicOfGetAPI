console.log("Hello World");

(function() {
  "use strict";

  // 双方向データバインディング
  var vm = new Vue({
    el: "#app",
    data: {
      payload: {
        user_id: "",
        user_name: "",
        category_list: [],
        category_name: "",
        product_list: [],
        product_name: "",
        product_price: 0,
        product_img: ""
      }
    },
    mounted: function() {
      // データの初期化
      this.initPage();
    },
    methods: {
      initPage: function() {
        this.payload.category_name = "どうぞ";
        // APIからデータを取得して、商品情報を表示させたい
      }
    }
  });
})();
