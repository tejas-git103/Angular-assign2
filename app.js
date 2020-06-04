angular.module("ShoppingListCheckOff",[])
.controller("ToBuyController",ToBuyController)
.controller("AlreadyBoughtController",AlreadyBoughtController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);

ToBuyController.$project = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService ) {
  var buy = this;
  buy.flag1 = 0;
  buy.list = ShoppingListCheckOffService.get_list();
  //console.log(buy.list);
  buy.remove = function (index) {
    ShoppingListCheckOffService.removenadd(index);
    if(buy.list.length == 0)
    {
        buy.flag1 =1;
    }
  }

}

AlreadyBoughtController.$project = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
//  bought.flag2 = ShoppingListCheckOffService.flag2;
//  console.log(bought.flag2);
  bought.list = ShoppingListCheckOffService.get_list2();
  bought.set_flag2 = function () {
    bought.flag2=1;
  }

}


function ShoppingListCheckOffService() {
  var service = this; // using this we can expose this to outside
  var list=[{
    Name:"Bananas",
    Quantity:3
  },
  {
    Name:"Apples",
    Quantity:5
  },
  {
    Name:"Milk Cartons",
    Quantity:2
  },
  {
    Name:"Beers",
    Quantity:4
  },
  {
    Name:"Pack of Biscuits",
    Quantity:3
  }];
  var list2=[]; //internal to the service
  service.get_list = function () { // external as we wanna use it in other controllers
    return list;
  }
  service.removenadd = function (index) {
    var item = list[index];
    list.splice(index,1);
    //console.log(item);
    list2.push(item);

    console.log(list2);

  }
  service.get_list2 = function () {
    return list2;
  }

}
