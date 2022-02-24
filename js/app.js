var app = angular.module("myApp", []);

app.controller("storeCtrl", function($scope) {
  $scope.products = [
    { name: "chain", cost: "200", url: "" },
    { name: "chain", cost: "200", url: "" },
    { name: "chain", cost: "200", url: "" },
    { name: "chain", cost: "200", url: "" },
    { name: "chain", cost: "200", url: "" },
    { name: "chain", cost: "200", url: "" },
    { name: "chain", cost: "200", url: "" },
    { name: "chain", cost: "200", url: "" },
    { name: "chain", cost: "200", url: "" },
    { name: "chain", cost: "200", url: "" },
    { name: "chain", cost: "200", url: "" },
    { name: "chain", cost: "200", url: "" }
  ];
  $scope.cart = [];
  $scope.addToCart = function(id) {
    $scope.cart.push(id);
    console.log($scope.cart);
  };
  $scope.test = "testeddd";

  $scope.products = [
    {
      name: "chain",
      cost: "200",
      url: "/images/trending-image/picture 1.png",
      index: 1
    },
    {
      name: "chain",
      cost: "200",
      url: "/images/product-3.png",
      index: 2
    },
    {
      name: "chain",
      cost: "200",
      url: "/images/product-4.png",
      index: 3
    },
    {
      name: "chain",
      cost: "200",
      url: "/images/product-5.png",
      index: 4
    },
    {
      name: "chain",
      cost: "200",
      url: "/images/product-6.png",
      index: 5
    },
    {
      name: "chain",
      cost: "200",
      url: "/images/product-7.png",
      index: 6
    },
  ];

  $scope.cart = [];
  $scope.addToCart = function(id) {
    let item = $scope.products.filter(item => item.index == id);
    $scope.cart = [...$scope.cart, item[0]];
    console.log($scope.cart);
  };
  $scope.removeFromCart = function(id) {
    let filtered = $scope.cart.filter(item => item.index != id);
    $scope.cart = filtered;
    console.log($scope.cart);
  };
  $scope.showProducts = function() {
    let productSection = document.getElementById("productSection");
    let cartSection = document.getElementById("cartSection");
    console.log(cartSection);
    productSection.style.display = "block";
    cartSection.style.display = "none";
  };
  $scope.showCart = function() {
    let productSection = document.getElementById("productSection");
    let cartSection = document.getElementById("cartSection");
    console.log(cartSection);
    productSection.style.display = "none";
    cartSection.style.display = "block";
  };
});
