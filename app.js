// console.log('Hello')

// function FindEle(arr, x) {
//   for (let i = 0; i < arr.length; i++){
//       if (arr[i] == x) {
//           return i;
//       }
//     }
//     return -1;
// }
// // let arr =
// let res = FindEle([2, 2, 4, 5, 7, 8, 9, 5, 2, 10], 5)
// console.log(res)

// function NegitiveNums(arr) {
//     let count = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             count = count + 1
//         }
//     }
//     return count
// }
// let res = NegitiveNums([1, 2, 5, 47, 4, 2])
// console.log(res)

// function FindLarge(arr) {
//     let largestNum = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largestNum) {
//             largestNum = arr[i]
//         }
//     }
//     return largestNum;
// }
// let res = FindLarge([1, 2, 5, 4, 7, 5, 6, 8, 7, 100, 125, 147])
// console.log(res)

// function SecondLarge(arr) {
//     let firstLargest = -Infinity;
//     let secondLargest = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > firstLargest) {
//             secondLargest = firstLargest;
//             firstLargest = arr[i]
//         }
//         else if (arr[i] > secondLargest) {
//             secondLargest=arr[i]
//         }

//     }
//     return secondLargest;
// }

// let res = [1];
// console.log(SecondLarge(res))

// function FindSecLarge(arr) {
//     if (arr.length < 2) {
//         return "Array conatins alteast 2 elements"
//     }
//     let firstLarge = -Infinity, seccondLarge = -Infinity;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > firstLarge) {
//             seccondLarge = firstLarge;
//             firstLarge = arr[i];
//         }
//         else if (arr[i] > seccondLarge) {
//             seccondLarge = arr[i];
//         }
//     }
//     return seccondLarge;
// }
// let arr = [1, 2, 4, 5, 8, 6, -5, 9, 665, 20]
// console.log(FindSecLarge(arr))

// for (let i = 0; i < 4; i++){
//     for (let j = 0; j < i; j++){
//         console.log(i,j)
//     }
// }

// for (let i = 0; i < 5; i++){
//     for (let j = 0; j <= 5; j++){
//         console.log(i,j)
//     }
// }

// for (let i = 0; i < 5; i++){
//     let row = "";
//     for (let j = 0; j < 5; j++){
//         row = row+" " + "*";
//     }
//     console.log(row)
// }

// for (let i = 0; i < 4; i++){
//     let row = "";
//     for (let j = 0; j <i+1; j++){
//         row = row + "*";
//     }
//     console.log(row)
// }

// for (let i = 0; i < 5; i++){
//     let row = '';
//     for (let j = 0; j <= i; j++){
//         row = row + (i + 1);
//     }
//     console.log(row)
// }

// function LargestNum(arr) {
//     let Largest=-Infinity
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > Largest) {
//             Largest=arr[i]
//         }
//     }
//     return Largest;
// }

// let arr = [11, 3, 5, 9, 5, 66, 78, -98, -200]
// console.log(LargestNum(arr))

// function SecLargest(arr) {
//     let First = -Infinity;
//     let Second = -Infinity;
//     for (let i = 0; i <arr.length; i = i + 1){
//         if (arr[i] > First) {
//             First = arr[i];
//             Second = First;
//         }
//         else if (arr[i]>Second) {
//             Second = arr[i];
//         }
//     }
//     return Second;
// }
// let arr = [11, 3, 5, 9, 5, 66, 78, -98, -200];
// console.log(SecLargest(arr));

// function SecLarge(arry) {
//     let first = -Infinity;
//     let second = -Infinity;
//     for (let i = 0; i < arry.length; i++){
//         if (arry[i] > first) {
//             second = first;
//             first = arry[i];
//         }
//         else if (arry[i] > second) {
//             second=arry[i]
//         }
//     }
//     return second;
// }

// let arry=[1,4,21,10,1,47,12,65,120,320,750,751]
// console.log(SecLarge(arry))


// let n1 = 4;
// let row = "A";
// for (let j = 0; j < n1; j++) {
//   row = row + "X";
//   console.log(row);
// }


// let n1 = 4;
// for (let i = 0; i < n1; i++){
//     let row = "A";
//     for (let j = 0; j < n1; j++){
//         row = row + 'X';
//         // console.log(row);
//     }
//     console.log(row);
// }



// let n=5
// for (let i = 0; i < n; i++){
//     let row = '';
//     let toggle = 1;
//     for (let j = 0; j <= i; j++){
//         row = row + toggle;
//         if (toggle == 1) {
//             toggle=0
//         }
//         else {
//             toggle=1
//         }
//     }
//     console.log(row)
// }


// function Polyndrome(n) {
//     if(n<0)return false
//     let copyN=n
//     let rev=0
//     while (n > 0) {
//         let rem = n % 10;
//         rev = (10 * rev) + rem;
//         n=Math.floor(n/10)
//     }
//     // if (rev == copyN) {
//     //     return true
//     // }
//     // else {
//     //     return false
//     // }
//     return (rev===copyN)
// }
// let res = Polyndrome(14551)
// console.log(res)



// function SearchEle(arr, x) {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] == x) {
//             return i;
//         }
//     }
//     return -1
// }
// let arr = [1, 2, 5, 4, 7, 8, 5, 2, 1, 4, 5]
// let res1 = SearchEle(arr, 5)
// console.log(res1)




// function NegitiveNum(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < 0) {
//             count++
//         }      
//     }
//     return count;
// }

// let arr = [1, 2, -5, 4, -7, -8, 5, 2, 1, 4, -5]
// let res = NegitiveNum(arr)
// console.log(res)


// function LargestNUm(arr) {
//     let large = arr[0];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > large) {
//             large=arr[i]
//         }
//     }
//     return large;
// }

// let arr = [10, 2, -5, 4, -7, 8, 5, 2, 1, 4, -5]
// let res = LargestNUm(arr)
// console.log(res)


// function MinNUm(arr) {
//     let min = Infinity;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < min) {
//             min=arr[i]
//         }
//     }
//     return min;
// }
// let arr = [10, 2, -5, 4, -7, -118, 5, 2, 1, 4, -5]
// let res = MinNUm(arr)
// console.log(res)


function SecLargest(arr) {
    let first = -Infinity;
    let Sec = -Infinity;
    if(arr.length<2){
        return 'null'
    }
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > first) {
            Sec = first;
            first = arr[i];
        }
        else if (arr[i] > Sec && arr[i] !== first) {
            Sec = arr[i];
        }
    }
    return Sec;
}
let arr = [10, 2, -5, 4, 7, -118, 5, 2, 1, 4, -5]
let res = SecLargest(arr)
console.log(res)








// let arr = [0, 1, 2, 3, 4, 5, 6, 7];

// function InterstionSort(a) {
//     let n = a.length;
//     for (let i = 1; i < n; i++){
//         let currEle = a[i];
//         let prevEle = i - 1;
//         while (a[prevEle] > currEle && prevEle>=0) {
//             a[prevEle + 1] = a[prevEle];
//             prevEle--;
//         }
//         a[prevEle + 1] = currEle;
//     }
//     return arr;
// }
// console.log(InterstionSort(arr))


let n = [1,5,4,7,8,5,2,0];
function SumOfNumbers(n) {
    if (n ==0) return n;
    return n*SumOfNumbers(n-1)
}
console.log(SumOfNumbers(n))// let arr = [0, 1, 2, 3, 4, 5, 6, 7];

// function InterstionSort(a) {
//     let n = a.length;
//     for (let i = 1; i < n; i++){
//         let currEle = a[i];
//         let prevEle = i - 1;
//         while (a[prevEle] > currEle && prevEle>=0) {
//             a[prevEle + 1] = a[prevEle];
//             prevEle--;
//         }
//         a[prevEle + 1] = currEle;
//     }
//     return arr;
// }
// console.log(InterstionSort(arr))


let n = [1,5,4,7,8,5,2,0];
function SumOfNumbers(n) {
    if (n ==0) return n;
    return n*SumOfNumbers(n-1)
}
console.log(SumOfNumbers(n))// let arr = [0, 1, 2, 3, 4, 5, 6, 7];

// function InterstionSort(a) {
//     let n = a.length;
//     for (let i = 1; i < n; i++){
//         let currEle = a[i];
//         let prevEle = i - 1;
//         while (a[prevEle] > currEle && prevEle>=0) {
//             a[prevEle + 1] = a[prevEle];
//             prevEle--;
//         }
//         a[prevEle + 1] = currEle;
//     }
//     return arr;
// }
// console.log(InterstionSort(arr))


// let n = [1,5,4,7,8,5,2,0];
// function SumOfNumbers(n) {
//     if (n ==0) return n;
//     return n*SumOfNumbers(n-1)
// }
// console.log(SumOfNumbers(n))





let sum = [1,4,7, 2, 5, 4, 9, 8];
function SelectionSort(sum) {
    let n = sum.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (sum[j] < sum[min]) {
                min = j;
            }
        }
        let temp = sum[i];
        sum[i] = sum[min];
        sum[min] = temp;
    }
    return sum;
}
console.log(SelectionSort(sum))