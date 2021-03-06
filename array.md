# unshift
> unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
该方法将改变数组的数目。
````javascript
const array1 = [22, 3, 31, 12];
const item = array1.unshift(11);
console.log(item); // 5 新数组的长度
console.log(array1); // [11, 22, 3, 31, 12]
````


# shift
> shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
````javascript
const array1 = [22, 3, 31, 12];
const item = array1.shift();
console.log(item); // 22
console.log(array1); // [3, 31, 12]
````


# pop
> pop() 方法用于删除数组的最后一个元素并返回删除的元素。
````javascript
const array1 = [22, 3, 31, 12, 'arr', 19, 31, 56, 43];
const item = array1.pop();
console.log(item); // 43
console.log(array1); // [22, 3, 31, 12, "arr", 19, 31, 56]
````


# push
> push()方法从数组末尾向数组添加元素，可以添加一个或多个元素。
````javascript
const array1 = [22, 3, 31, 12, 'arr', 19, 31, 56, 43];
array1.push(11, 16, 18);
console.log(array1); // [22, 3, 31, 12, "arr", 19, 31, 56, 43, 11, 16, 18]
````


# splice
> splice() 方法用于添加或删除数组中的元素。
删除元素,并返回删除的元素
````javascript
const array1 = [22, 3, 31, 12];
const item = array1.splice(1, 2);
console.log(item); // [3, 31]
console.log(array1); // [22, 12]
````
向指定索引处添加元素
````javascript
const array1 = [22, 3, 31, 12];
array1.splice(1, 0, 12, 35);
console.log(array1); // [22, 12, 35, 3, 31, 12]
````
替换指定索引位置的元素
````javascript
const array1 = [22, 3, 31, 12];
array1.splice(1, 1, 8);
console.log(array1); // [22, 8, 31, 12]
````


# slice
> slice() 方法可从已有的数组中返回选定的元素。
slice()方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。
slice() 方法不会改变原始数组。
````javascript
const array1 = [22, 3, 31, 12];
const array2 = array1.slice(1, 3);
console.log(array1); // [22, 3, 31, 12]
console.log(array2); // [3, 31]
````


# filter
> filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。该方法不会改变原数组
````javascript
const array1 = [22, 3, 31, 12];
const array2 = array1.filter((v, i, a) => {
  if (v > 13) {
    return v;
  }
});
console.log(array1); // [22, 3, 31, 12]
console.log(array2); // [22, 31]
````


# map
> map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
map() 方法按照原始数组元素顺序依次处理元素。
该方法不会改变原数组
````javascript
const array1 = [22, 3, 31, 12, 'arr', 19, 31, 56, 43];
const array2 = array1.map((v, i, a) => {
  return v + 1;
});
console.log(array1); // [22, 3, 31, 12, "arr", 19, 31, 56, 43]
console.log(array2); // [23, 4, 32, 13, "arr1", 20, 32, 57, 44]
````


# forEach
> forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
````javascript
let sum = 0;
const array1 = [22, 3, 31, 12];
array1.forEach((v, i, a) => {
  sum += v;
});
console.log(sum); // 68
````


# concat
> concat() 方法用于连接两个或多个数组。
该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
````javascript
const array1 = [22, 3, 31, 12];
const array2 = [19, 33, 20];
const newArray = array1.concat(10, array2, 9);
console.log(array1); // [22, 3, 31, 12]
console.log(newArray); // [22, 3, 31, 12, 10, 19, 33, 20, 9]
````
通过上面的例子可以看出：concat传入的参数可以是具体的值，也可以是数组对象。可以是任意多个。


# join
> join() 方法用于把数组中的所有元素转换一个字符串。
元素是通过指定的分隔符进行分隔的。默认使用逗号作为分隔符
````javascript
const array1 = [22, 3, 31, 12, 'arr'];
const str = array1.join('~');
console.log(str); // 22~3~31~12~arr
const str1 = array1.join();
console.log(str1); // 22,3,31,12,arr
````


# sort
> sort() 方法用于对数组的元素进行排序。
排序顺序可以是字母或数字，并按升序或降序。
默认排序顺序为按字母升序。
````javascript
const array1 = [22, 3, 31, 12];
array1.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(array1); // 数字升序 [3, 12, 22, 31]
````


# indexOf
> indexOf() 方法可返回数组中某个指定的元素位置。
该方法将从头到尾地检索数组，看它是否含有对应的元素。开始检索的位置在数组 start 处或数组的开头（没有指定 start 参数时）。如果找到一个 item，则返回 item 的第一次出现的位置。开始位置的索引为 0。
如果在数组中没找到指定元素则返回 -1。
参数有两个，其中第一个是（必填）需要查找的元素值，第二个是（可选）开始查找元素的位置
````javascript
const array1 = [22, 3, 31, 12, 'arr'];
const index = array1.indexOf(31);
console.log(index); // 2
const index1 = array1.indexOf(31, 3);
console.log(index1); // -1
````


# find()与findIndex()(es6新增)
> find()与findIndex()方法均接受两个参数：一个回调函数，一个可选值用于指定回调函数内部的this。该回调函数可接受三个参数：数组的某个元素，该元素对应的索引位置，以及该数组本身。该回调函数应当在给定的元素满足你定义的条件时返回true，而find()和findIndex()方法均会在回调函数第一次返回true时停止查找。
二者唯一的区别是：find()方法返回匹配的值，而findIndex()返回匹配位置的索引。
````javascript
let arr = [1, 2, 3, 'arr', 5, 1, 9];
console.log(arr.find((value, keys, arr) => {
    return value > 2;
})); // 3 返回匹配的值
console.log(arr.findIndex((value, keys, arr) => {
    return value > 2;
})); // 2 返回匹配位置的索引
````


# includes(es7新增)
> includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。
参数有两个，其中第一个是（必填）需要查找的元素值，第二个是（可选）开始查找元素的位置
````javascript
const array1 = [22, 3, 31, 12, 'arr'];
const includes = array1.includes(31);
console.log(includes); // true
const includes1 = array1.includes(31, 3); // 从索引3开始查找31是否存在
console.log(includes1); // false
````
需要注意的是：includes使用===运算符来进行值比较，仅有一个例外：NaN被认为与自身相等。
````javascript
let values = [1, NaN, 2];
console.log(values.indexOf(NaN));//-1
console.log(values.includes(NaN));//true
````


# every
> every()方法用于判断数组中每一项是否都满足条件，只有所有项都满足条件，才会返回true。
````javascript
const array1 = [22, 3, 31, 12];
const isRight1 = array1.every((v, i, a) => {
  return v > 1;
});
const isRight2 = array1.every((v, i, a) => {
  return v > 10;
});
console.log(isRight1); // true
console.log(isRight2); // false
````


# some
> some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
some() 方法会依次执行数组的每个元素：
如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
如果没有满足条件的元素，则返回false。
````javascript
const array1 = [22, 3, 31, 12];
const someTrue1 = array1.some((v, i, a) => {
  return v == 11;
});
const someTrue2 = array1.some((v, i, a) => {
  return v == 31;
});
console.log(someTrue1); // false
console.log(someTrue2); // true
````



# lastIndexOf
> lastIndexOf() 方法可返回一个指定的元素在数组中最后出现的位置，在一个数组中的指定位置从后向前搜索。
如果要检索的元素没有出现，则该方法返回 -1。
该方法将从尾到头地检索数组中指定元素 item。开始检索的位置在数组的 start 处或数组的结尾（没有指定 start 参数时）。如果找到一个 item，则返回 item 从尾向前检索第一个次出现在数组的位置。数组的索引开始位置是从 0 开始的。
如果在数组中没找到指定元素则返回 -1。
````javascript
const array1 = [22, 3, 31, 12, 'arr', 19, 31, 56, 43];
const index1 = array1.lastIndexOf(31);
console.log(index1); // 6
const index2 = array1.lastIndexOf(31, 5);
console.log(index2); // 2
const index3 = array1.lastIndexOf(35);
console.log(index3); // -1
````


# fill(es6新增)
> fill()方法能使用特定值填充数组中的一个或多个元素。当只是用一个参数时，该方法会用该参数的值填充整个数组。
````javascript
let arr = [1, 2, 3, 'cc', 5];
arr.fill(1);
console.log(arr);//[1,1,1,1,1];
````
如果不想改变数组中的所有元素，而只是想改变其中一部分，那么可以使用可选的起始位置参数与结束位置参数（不包括结束位置的那个元素）
````javascript
let arr = [1, 2, 3, 'arr', 5];
arr.fill(1, 2);
console.log(arr);//[1,2,1,1,1]
arr.fill(0, 1, 3);
console.log(arr);//[1,0,0,1,1];
````


# reduce
> reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
````javascript
const array1 = [22, 3, 31, 12];
const sum = array1.reduce((total, number) => {
  return total + number;
});
console.log(sum); // 68
````


# reduceRight
> reduceRight() 方法的功能和 reduce() 功能是一样的，不同的是 reduceRight() 从数组的末尾向前将数组中的数组项做累加。
````javascript
const array1 = [22, 3, 31, 12];
const sum = array1.reduceRight((total, number) => {
  return total + number;
});
console.log(sum); // 68
````


# reverse
> reverse() 方法用于颠倒数组中元素的顺序。
````javascript
const array1 = [22, 3, 31, 12];
array1.reverse();
console.log(array1); // [12, 31, 3, 22]
````


# toLocaleString和toString
> 将数组转换为字符串
````javascript
const array1 = [22, 3, 31, 12];
const str = array1.toLocaleString();
const str1 = array1.toString();
console.log(str); // 22,3,31,12
console.log(str1); // 22,3,31,12
````


# copyWithin(es6新增)
> copyWithin() 方法用于从数组的指定位置拷贝元素到数组的另一个指定位置中。
该方法会改变现有数组
````javascript
//将数组的前两个元素复制到数组的最后两个位置
let arr = [1, 2, 3, 'arr', 5];
arr.copyWithin(3, 0);
console.log(arr);//[1,2,3,1,2]
````
> 默认情况下，copyWithin()方法总是会一直复制到数组末尾，不过你还可以提供一个可选参数来限制到底有多少元素会被覆盖。这第三个参数指定了复制停止的位置（不包含该位置本身）。
````javascript
let arr = [1, 2, 3, 'arr', 5, 9, 17];
//从索引3的位置开始粘贴
//从索引0的位置开始复制
//遇到索引3时停止复制
arr.copyWithin(3, 0, 3);
console.log(arr);//[1,2,3,1,2,3,17]
````