const array1 = [1,2,3];
const array2 = [4,5,6];

//Exercise 1
//Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
const arrayConcat = array1.concat(array2);
console.log('Exercise 1: ' + arrayConcat);

//Exercise 2
//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
const arrayReversed = array1.reverse();
console.log('Exercise 2: ' + arrayReversed);

//Exercise 3
//Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
const arrayAddEAlement = [1,2,3];
const arrayAll = arrayAddEAlement.push(4,5,6);

console.log('Exercise 3 - Push elements to array: ' + arrayAddEAlement);
console.log('Exercise 3 - Total length after push: ' + arrayAll);

//Exercise 4
//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
array1.unshift(4,5,6);
console.log('Exercise 4: ' + array1);

//Exercise 5
//Дан массив ['js', 'css', ‘html']. Выведите на экран первый элемент и удалите его.
const arrayDelete = ['js','css','html'];
const shifted = arrayDelete.shift();
console.log('Exercise 5: ' + shifted);

//Exercise 6
//Дан массив ['js', 'css', ‘html']. Выведите на экран последний элемент и удалите его.
const popped = arrayDelete.pop();
console.log('Exercise 6: ' + popped);

//Exercise 7
//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
const numberArr = [1,2,3,4,5];
const newSliceBegin = numberArr.slice(0,3);
console.log('Exercise 7: ' + newSliceBegin);

//Exercise 8
//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
const newSliceEnd = numberArr.slice(3);
console.log('Exercise 8: ' + newSliceEnd);

//Exercise 9
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
numberArr.splice(1,2);
console.log('Exercise 9: ' + numberArr);

//Exercise 10
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
const arr10 = [1, 2, 3, 4, 5];
const newSpliceArr = arr10.splice(1,3);
console.log('Exercise 10: ' + newSpliceArr);

//Exercise 11
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив 
// [1, 2, 3, 'a', 'b', 'c', 4, 5].
const arr11 = [1, 2, 3, 4, 5];
arr11.splice(3, 0, 'a', 'b', 'c');
console.log('Exercise 11 : ' + arr11);

//Exercise 12
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив
// [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const arr12 = [1, 2, 3, 4, 5];
arr12.splice(1,0,'a', 'b');
arr12.splice(6,0,'c');
arr12.splice(8,0, 'e');
console.log('Exercise 12: ' + arr12);

//Exercise 13
//Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

const arr13 = [3, 4, 1, 2, 7];
arr13.sort();
console.log('Exercise 13: ' + arr13);

//Exercise 14
//Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

const massobj = {
  js:'test', 
  jq: 'hello', 
  css: 'world'};
const result = Object.keys(massobj);
console.log('Exercise 14: ' + result);