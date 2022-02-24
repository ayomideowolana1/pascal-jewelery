var app = angular.module("myApp", []);

app.controller("storeCtrl", function($scope) {
  $scope.products = [
    { name: "chain", cost: "200", url: "" , },
    { name: "chain", cost: "200", url: "" , },
    { name: "chain", cost: "200", url: "" , },
    { name: "chain", cost: "200", url: "" , },
    { name: "chain", cost: "200", url: "" , },
    { name: "chain", cost: "200", url: "" , },
    { name: "chain", cost: "200", url: "" , },
    { name: "chain", cost: "200", url: "" , },
    { name: "chain", cost: "200", url: "" , },
    { name: "chain", cost: "200", url: "" , },
    { name: "chain", cost: "200", url: "" , },
    { name: "chain", cost: "200", url: "" , }
  ];
  $scope.cart = [];
  $scope.addToCart = function(id) {
      $scope.cart.push(id)
      console.log($scope.cart)
  };
  $scope.test = "testeddd";
});
