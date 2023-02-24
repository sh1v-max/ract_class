show(100);
var show = (a, b = 200) => {
  console.log(a + " " + b);
};
show(100, 500);

/*******************************************************array copy within*********************** /
const num=[1,2,3,4,5,6,7,8,9,10];
const num1=[1,2,3,4,5,6,7,8,9,10];
const num2=[1,2,3,4,5,6,7,8,9,10];
const num3=[1,9,11,6,27,30,7,6,5,12];

console.log(num.copyWithin(1,3,5));
console.log(num1.copyWithin(1,3));//omitting the paramenter end
console.log(num2.copyWithin(1));//omitting the start parameter
console.log(num3.copyWithin(8,1,2));

/**********************************array prototype*******************/
//in this .find return first element
/**********************array destructing*************************/ var x, y;
var [x = 50, y = 20] = [100];
console.log(x);

/**************array concatinaation********* */
var arr1 = [1, 2, 3];
var arr2 = [4, 4, 5];
// var arr3=arr1+ ","+ arr2;
var arr4 = [...arr1, ...arr2];
// console.log(arr3);
console.log(arr4);
