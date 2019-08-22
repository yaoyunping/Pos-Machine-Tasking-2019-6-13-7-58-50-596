const {counProducts,fetchProduct,generateReceiptItems,countTotalPrice,assemble,generateReceipt} = require('../main');
//countProducts方法测试
// it ('should count codes', () => {
//     //given
//     const codes=['0003', '0003', '0001', '0005'];

//     //when
//     const countedCodes=counProducts(codes);
//     console.log(countedCodes);

//     //then
//     expect(countedCodes[0].count).toBe(2);
// });
//ountProducts第二种方法测试
// it ('should count one codes', () => {
//     //given
//     const codes=['0003', '0003', '0001', '0005'];

//     //when
//     const times=countOneProduct('0003',codes);
//     console.log(times);

//     //then
//     expect(times).toBe(2);
// });
// it ('should count  codes', () => {
//     //given
//     const codes=['0003', '0003', '0001', '0005'];

//     //when
//     const result=counProducts(codes);
//     //console.log(countedCodes);

//     //then
//     expect(result[0].count).toBe(2);
// });
//fetchProduct方法测试
// it ('should fetch product', () => {
//     //given
//     const database=[
//      {"id": "0001", "name" : "Coca Cola", "price": 3},
//      {"id": "0002", "name" : "Diet Coke", "price": 4},
// ]

//     //when
//     const product=fetchProduct('0001',database);
//     //console.log(countedCodes);

//     //then
//     expect(product.name).toBe('Coca Cola');
// });
//generateReceiptsItems方法测试
it ('结果验证', () => {
    //集成
    var codes=generateReceiptItems(['0003', '0003', '0001', '0005']);
    console.log("generateReceiptItems:",codes);
    //输出
    // [
    //     { name:"Pepsi-Cola",price:5,count:2},
    //     { name:"Coca Cola",price:3,count:1}
    // ]
});
//计算商品总价格测试
it ('结果验证', () => {
    //集成
    var countTotalPriceInput=[ 
    { name: 'Pepsi-Cola', price: 5, count: 2 },
    { name: 'Coca Cola', price: 3, count: 1 },
    { name: 'Dr Pepper', price: 7, count: 1 } 
];
var totalPrice=countTotalPrice(countTotalPriceInput)
    console.log(totalPrice);
    //输出20
});
//结果打印测试
it ('结果验证', () => {
    //集成
    var assemInput=[ 
    { name: 'Pepsi-Cola', price: 5, count: 2 },
    { name: 'Coca Cola', price: 3, count: 1 },
    { name: 'Dr Pepper', price: 7, count: 1 } 
];
    var receipt=assemble(assemInput,20)
    console.log(receipt);
    //输出
});

it ('结果验证', () => {
    //集成
    var input=['0001', '0003', '0005', '0003'];
    var receipt=generateReceipt(input);
    console.log(receipt);
    //输出
});
