// 아래 함수들에 대한 구현과 함께 호출 시그니처(call signatures) 를 작성해주세요.

// last(arr): 이 함수는 배열의 마지막 요소를 반환해야 합니다.
type Last = <T>(arr: T[]) => T;

const last: Last = (arr) => arr[arr.length - 1];

const lastItem = last([1, 2, 3, 4, 5]);

console.log(lastItem);

//  ---------------
// prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다.
type Prepend2 = <T>(arr: T[], i: T) => T[];

const prepend: Prepend2 = (arr, i) => [i, ...arr];

const prependArr = prepend([1, 2, 3], 4);

console.log(prependArr);

//  ---------------

// mix(arr,arr) : 두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.
type Mix = <T>(arr: T[], arr2: T[]) => T[];

const mix: Mix = (arr, arr2) => [...arr, ...arr2];

const mixedArr = mix([1, 2, 3], [4, 5, 6]);

console.log(mixedArr);

//  ---------------
// count(arr) : 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.
type Count = <T>(arr: T[]) => number;

const count: Count = (arr) => arr.length;

const arrLength = count([1, 2, 3, 4]);

console.log(arrLength);

//  ---------------
// findIndex(arr, item) : 첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 첫번째 매개변수 arr배열의 몇번째 index로 존재하는지 체크한후 존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.
type FindIndex = <T>(arr: T[], i: T) => number | null;

const findIndex: FindIndex = (arr, i) => {
  if (arr.indexOf(i) === -1) return null;
  return arr.indexOf(i);
};

const test1 = findIndex([1, 2, 3, 4], 4);
const test2 = findIndex([1, 2, 3, 4], 5);
const test3 = findIndex(["1", "2", "3", "4"], "4");
const test4 = findIndex(["1", "2", "3", "4"], "5");
const test5 = findIndex([1, "2", 3, "4"], "5");
const test6 = findIndex([1, "2", 3, "4"], 3);

console.log("test1", test1);
console.log("test2", test2);
console.log("test3", test3);
console.log("test4", test4);
console.log("test5", test5);
console.log("test6", test6);

//  ---------------
// slice(arr, startIndex, endIndex): 첫번째 매개변수로 배열 arr을 받고, 두번째 매개변수로 숫자 startIndex, 세번째 매개변수 숫자 endIndex를 받습니다. 첫번째 매개변수 arr을 두번째 매개변수로 받은 startIndex부터 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다. 이때 세번째 매개변수는 필수 매개변수가 아닙니다.

type Slice = <T>(arr: T[], startIdx: number, endIdx?: number) => T[];

const slice: Slice = (arr, startIdx, endIdx) => {
  if (!endIdx) {
    return arr.slice(startIdx, arr.length);
  } else {
    return arr.slice(startIdx, endIdx);
  }
};

const testArr = [1, 2, 3, 4, 5, 6, 7, 8];
const testArr2 = ["a", "b", "c", "d", "e", "f"];

const sliceTest1 = slice(testArr, 2, 5);
const sliceTest2 = slice(testArr, 2);
const sliceTest3 = slice(testArr2, 3, 5);
const sliceTest4 = slice(testArr2, 3);

console.log("sliceTest1:", sliceTest1);
console.log("sliceTest2:", sliceTest2);
console.log("sliceTest3:", sliceTest3);
console.log("sliceTest4:", sliceTest4);
