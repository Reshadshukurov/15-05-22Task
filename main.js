//forEach

// class MyCollection {
//     constructor() {
//        this.elements = arguments;
//     }
//     forEachC = function (callback) {
//         let result =[];
//         for (let i = 0; i < this.elements.length; i++) {
//             result.push(callback(this.elements[i]))         
//         }
//         return result;
//     }
// }
// let Mycollection = new MyCollection(3,4,2,5,true,"Rasim");
// let res= Mycollection.forEachC(x => {
//    return x + 5; 
// }); 
// console.log(res);


//map
// class MyCollection {
//      constructor() {
//         this.elements = arguments;
//      }
//      mapC = function (callback) {
//          let result =[];
//          for (let i = 0; i < this.elements.length; i++) {
//              result.push(callback(this.elements[i]))
             
//          }
//          return result;
//      }
// }


// let Myc = new MyCollection(1,2,3,4,5,true,"Mamed");
// let collection = new  MyCollection(1,2,3,4,5,true,"Mamed");  

// let res= Myc.mapC(x => {
//     return x + 2; 
// }); 
 
// let res2=collection.mapC(x=> {
//     return x + 2;
// });

// console.log(res);
// console.log(res2);



  //filter
// class MyCollection {
//     constructor() {
//        this.elements = arguments;
//     }
//     filterC = function (callback) {
//         let result =[];
//         for (let i = 0; i < this.elements.length; i++) {
//             if (callback(this.elements[i])) {
                
//                 result.push(this.elements[i]);
//             }
            
//         }
//         return result;
//     }
// }


// let Myc = new MyCollection(1,2,3,4,5,false,"Isa");
// let collection = new  MyCollection(1,2,3,4,5,false,"Isa");  

// let res = Myc.filterC(x => {
//    return x > 2 ; 
// }); 

// // let res2 = collection.filter(x=> {
// //    return x > 2;
// // });

// console.log(res);
// // console.log(res2);


//every
// class MyCollection {
//     constructor() {
//        this.elements = arguments;
//     }
//     everyC = function (callback) {
//         let result =[];
//         for (let i = 0; i < this.elements.length; i++) {
//             if (callback(this.elements[i])) {
                
//                 result.push(true); 
//             }
            
//         }
//         return result;
//     }
// }

// let Myc = new MyCollection(1,2,3,4,5,false,"Isa");
// let res = Myc.everyC(x => {
//    return x > 2 ; 
// }); 

// console.log(res);


//some
// class MyCollection {
//     constructor() {
//        this.elements = arguments;
//     }
//     someC = function (callback) {
//         let result =[];
//         for (let i = 0; i < this.elements.length; i++) {
//             if (callback(this.elements[i])) {
                
//             }
//         }
//         result.push(true);
//         return result;
//     }
// }

// let Myc = new MyCollection(1,2,3,4,5,false,"Isa");
// let res = Myc.someC(x => {
//    return x > 2 ; 
// }); 

// console.log(res);
