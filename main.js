const database=[
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
]
//获取条形码的数量
function counProducts(codes) {
    let map=new Map();
    for (let index = 0; index < codes.length; index++) {
        var code = codes[index];
        if(!map.has(code)){
            var item={
                code:code,
                count:1
            }
            map.set(code,item);
        }else{
            var item=map.get(code);
            item.count++;
            map.set(code,item);
        }     
    }
    let countedCode=[];
    map.forEach(function(item){
      countedCode.push(item);
    });
    return countedCode;
}

// function countOneProduct(code,codes){
//     let times=0;
//     for(var i=0;i<codes.length
//         ;i++){
//         if(codes[i]==code){
//             times++;
//         }
//     }
//     return times;
// }
// function counProducts(codes){
//     var arr=[];
//     for(var i=0;i<codes.length;i++){
//         if(arr.indexOf(codes[i])==-1){
//             arr.push(codes[i]);
//         }
//     }
//     let result=[];
//     for(var i=0;i<arr.length;i++){
//         var countTimesForProduct=countOneProduct(arr[i],codes);
//         result.push({
//             code:arr[i],
//             count:countTimesForProduct
//         })
//     }
//     return result;
// }
//获取每一种条形码的名字和价格
function fetchProduct(code){
    for(var i=0;i<database.length;i++){
        if(database[i].id===code){
            return {
                price:database[i].price,
                name:database[i].name
            }
        }
    }

}
//获取条形码的名字，价格，数量
function generateReceiptItems(codes){
    let receiptsArray=[];
    const countedCode=counProducts(codes);
    for(let i=0;i<countedCode.length;i++){
       let itemProduct= fetchProduct(countedCode[i].code);
       receiptsArray.push({
           name:itemProduct.name,
           price:itemProduct.price,
           count:countedCode[i].count});
    }
    return receiptsArray; 
}
//统计各个商品总价格
function countTotalPrice(receiptsArray){
    let totalPrice=0;
    for(var i=0;i<receiptsArray.length;i++){
        totalPrice+=receiptsArray[i].price*receiptsArray[i].count;
    
    }
    return totalPrice;
}

function assemble(receiptsArray,totalPrice){
    var output="----------------\n";
    receiptsArray.forEach(function(item){
    output+=item.name;
    output+="\t";
    output+=item.price;  
    output+="\t";
    output+=item.count;
    output+="\n";
    });
   output+="----------------\n";
   output+="Price:"+totalPrice;
}
//
function generateReceipt(codes){
    let receiptsArray=generateReceiptItems(codes);
    let totalPrice=countTotalPrice(receiptsArray);
    let receipt=assemble(receiptsArray,totalPrice);
    return receipt;
}
module.exports = {
    counProducts,
    fetchProduct,
    generateReceiptItems,
    countTotalPrice,
    assemble,
    generateReceipt
};