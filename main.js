var menu = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];
var order = ['0001', '0003', '0005', '0003'];
function makeReceipts(order) {
    var ReceiptString = "Receipts\n------------------------------------------------------------\n";
    var order1 = countSameElements(order);
    //console.log("order1:"+order1[1].count);
    if(order1){
        ReceiptString += countAndprintOrder(order1);
    }else{
        ReceiptString = "[ERROR]:";
    }
    return ReceiptString;
}
function countSameElements(collection) {
    var array=[];
    const map = collection.reduce((m, x) => m.set(x, (m.get(x) || 0) + 1), new Map())
    for (var [key,value] of map) {  
      var object1 ={
        key:key,
        count: value
  }
  array.push(object1);
  }
   return array;
  }
 
makeReceipts(order);
  
function countAndprintOrder(order){
    var sum = 0;
    var ReceiptString1 = "";
    for(let i = 0; i < order.length; i++){
        var simpleOrder = order[i];
        for(let j = 0; j < menu.length; j++){
            var simplemenu = menu[j];
            if(simpleOrder.key==simplemenu.id){
                sum +=countOrder(simpleOrder,simplemenu.price);
                ReceiptString1 += printOrder(simpleOrder,simplemenu.name);
            }
            continue;
        }
    }
    ReceiptString1 += "------------------------------------------------------------\n";
    ReceiptString1 += "Price: " + sum;
    // console.log("ReceiptString1:"+ReceiptString1);
    // console.log("sum:"+sum);
    return ReceiptString1;
}
function countOrder(order,price){
    var OrderPay = 0;
    OrderPay = order.count * price;
    return OrderPay;
}
//var ordert = [{key: "0001", count: 1},{key: "0003", count: 2},{key: "0005", count: 1}];
function printOrder(order1,name){
    var ReceiptString2 = "";
    ReceiptString2 = name+"\t" + order1.key + "\t" + order1.count + "\n";
        console.log(ReceiptString2);
    return ReceiptString2;
}
//printOrder(ordert[1],menu[4].name)
