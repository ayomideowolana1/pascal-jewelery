var app = angular.module("myApp", []);

app.controller("storeCtrl", function($scope) {
  $scope.products = [
    { name: "chain", cost: "200", url: "../images/trending-image/picture1.png",index:1 },
    { name: "chain", cost: "400", url: "../images/trending-image/picture1.png",index:2 },
    { name: "chain", cost: "350", url: "../images/trending-image/picture1.png",index:3 },
    { name: "chain", cost: "200", url: "../images/trending-image/picture1.png",index:4 },
    { name: "chain", cost: "200", url: "../images/trending-image/picture1.png",index:5 },
    { name: "chain", cost: "200", url: "../images/trending-image/picture1.png",index:6 },
    { name: "chain", cost: "200", url: "../images/trending-image/picture1.png",index:7 },
    { name: "chain", cost: "200", url: "../images/trending-image/picture1.png",index:8 },
    { name: "chain", cost: "200", url: "../images/trending-image/picture1.png",index:9 },
    { name: "chain", cost: "200", url: "../images/trending-image/picture1.png",index:10 },
    { name: "chain", cost: "200", url: "../images/trending-image/picture1.png",index:11},
    { name: "chain", cost: "200", url: "../images/trending-image/picture1.png",index:12 }
  ];
  $scope.cart = [];
  $scope.addToCart = function(id) {
    let item = $scope.products.filter(item => item.index == id);
    $scope.cart = [...$scope.cart,item[0]]
    console.log($scope.cart)
  };
  $scope.removeFromCart = function(id) {
    let filtered = $scope.cart.filter(item => item.index != id);
    $scope.cart = filtered
    console.log($scope.cart)
  };
  $scope.showProducts = function() {
    let productSection = document.getElementById("productSection") 
    let cartSection = document.getElementById("cartSection");
    console.log(cartSection);
    productSection.style.display ="block"
    cartSection.style.display = "none"
  };
  $scope.showCart = function() {
    let productSection = document.getElementById("productSection");
    let cartSection = document.getElementById("cartSection");
    console.log(cartSection);
    productSection.style.display = "none";
    cartSection.style.display = "block";
  };
});
