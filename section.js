hello.js

function FindEle(arr, x) {
  for (let i = 0; i < arr.length; i++){
      if (arr[i] == x) {
          return i;
      }
    }
    return -1;
}
// let arr =
let res = FindEle([2, 2, 4, 5, 7, 8, 9, 5, 2, 10], 5)
console.log(res)



function NegitiveNums(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count = count + 1
        }
    }
    return count
}
let res = NegitiveNums([1, 2, 5, 47, 4, 2])
console.log(res)


function FindLarge(arr) {
    let largestNum = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i]
        }
    }
    return largestNum;
}
let res = FindLarge([1, 2, 5, 4, 7, 5, 6, 8, 7, 100, 125, 147])
console.log(res)


function SecondLarge(arr) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i]
        }
        else if (arr[i] > secondLargest) {
            secondLargest=arr[i]
        }

    }
    return secondLargest;
}

let res = [1];
console.log(SecondLarge(res))



function FindSecLarge(arr) {
    if (arr.length < 2) {
        return "Array conatins alteast 2 elements"
    }
    let firstLarge = -Infinity, seccondLarge = -Infinity;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > firstLarge) {
            seccondLarge = firstLarge;
            firstLarge = arr[i];
        }
        else if (arr[i] > seccondLarge) {
            seccondLarge = arr[i];
        }
    }
    return seccondLarge;
}
let arr = [1, 2, 4, 5, 8, 6, -5, 9, 665, 20]
console.log(FindSecLarge(arr))


for (let i = 0; i < 4; i++){
    for (let j = 0; j < i; j++){
        console.log(i,j)
    }
}


for (let i = 0; i < 5; i++){
    for (let j = 0; j <= 5; j++){
        console.log(i,j)
    }
}


for (let i = 0; i < 5; i++){
    let row = "";
    for (let j = 0; j < 5; j++){
        row = row+" " + "*";
    }
    console.log(row)
}


for (let i = 0; i < 4; i++){
    let row = "";
    for (let j = 0; j <i+1; j++){
        row = row + "*";
    }
    console.log(row)
}


for (let i = 0; i < 5; i++){
    let row = '';
    for (let j = 0; j <= i; j++){
        row = row + (i + 1);
    }
    console.log(row)
}


function LargestNum(arr) {
    let Largest=-Infinity
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > Largest) {
            Largest=arr[i]
        }
    }
    return Largest;
}

let arr = [11, 3, 5, 9, 5, 66, 78, -98, -200]
console.log(LargestNum(arr))



function SecLargest(arr) {
    let First = -Infinity;
    let Second = -Infinity;
    for (let i = 0; i <arr.length; i = i + 1){
        if (arr[i] > First) {
            First = arr[i];
            Second = First;
        }
        else if (arr[i]>Second) {
            Second = arr[i];
        }
    }
    return Second;
}
let arr = [11, 3, 5, 9, 5, 66, 78, -98, -200];
console.log(SecLargest(arr));


function SecLarge(arry) {
    let first = -Infinity;
    let second = -Infinity;
    for (let i = 0; i < arry.length; i++){
        if (arry[i] > first) {
            second = first;
            first = arry[i];
        }
        else if (arry[i] > second) {
            second=arry[i]
        }
    }
    return second;
}

let arry=[1,4,21,10,1,47,12,65,120,320,750,751]
console.log(SecLarge(arry))


for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
        console.log("j="+ j, "i="+i)
    }
    console.log("i="+i)
}



let n=4
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j < n; j++){
        row = row+" " + "*";
    }
    console.log(row)
}

let n1 = 4;
for (let i = 0; i < 10; i++){
    let row = "";
    for (let j = 0; j < n1; j++){
        row = row + 'X';
        // console.log('C');

    }
    // console.log(row);
    console.log('A');
}



let n=5
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j <=i; j++){
        row=row+"x"
    }
    console.log(row)
}


for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j <=i; j++){
        row=row+(j+1)
    }
    console.log(row)

}


for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j <=i ; j++){
        row=row+(i+1)
    }
    console.log(row)
}



for (let i = 1; i <= n; i++){
    let row = "";
    for (let j = 1; j < i + 1; j++){
        row=row+(i)
    }
    console.log(row)
}


let n = 7
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j <n-i; j++){
        row=row+(j+1)
    }
    console.log(row)
}



let n = 5;
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j < (n - i); j++){
        row=row+"x"
    }
    console.log(row)
}


for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j < n; j++){
        row = row + 'x';
    }
    console.log(row)
}


for (let i = 0; i < n; i++){
    let row = '';
    for (let j = 0; j <= i; j++){
        row = row + 'x';
    }
    console.log(row)
}

for (let i = 0; i < n; i++){
    let row = '';
    for (let j = 0; j < (i + 1); j++){
        row = row + (j + 1);
    }
    console.log(row)
}

console.log('--------------')

for (let i = 0; i < n;i++){
    let row = '';
    for (let j = 0; j <= i; j++){
        row=row+(i+1)
    }
    console.log(row)
}


for (let i = 0; i < n; i++){
    let row = '';
    for (let j = 0; j < n - (i + 1); j++){
        row = row+' ' + '-';
    }
    for (let k = 0; k < i + 1; k++){
        row = row+' ' + 'x';
    }
    console.log(row)
}


for (let i = 0; i < n; i++){
    let row = ''
    for (let j = 0; j <=i ; j++){
        row=row+(i+1)
    }

    console.log(row)
}

let i=2
// for (let i = 0; i < n; i++){
    let row = '';
    let toggle = 1;
for (let j = 0; j <= i; j++){
        if (toggle == 1) {
            toggle=0
        }
        else {
            toggle=1
        }
        row = row + toggle;

    }
    console.log(row)
// }


function DigitsCount(n) {
    let count = 0;
    while (n > 0) {
        n =Math.floor(n/10);
        count++;
    }
    return count;
}
let res= DigitsCount(21441258963);
console.log(res)


console.log(Math.ceil(10.1))


function Polyndrome(n) {
    if(n<0)return false
    let copyN=n
    let rev=0
    while (n > 0) {
        let rem = n % 10;
        rev = (10 * rev) + rem;
        n=Math.floor(n/10)
    }
    // if (rev == copyN) {
    //     return true
    // }
    // else {
    //     return false
    // }
    return (rev===copyN)
}
let res = Polyndrome(14551)
console.log(res)



function RevNum(n) {
    let Ncopy = n;
    // let
    let rev = 0;
    while (n > 0) {
        let last = n % 10;
        rev = (rev * 10) + last;
        n = Math.floor(n / 10);
    }
    return rev;
}

let solustion = RevNum(1254);
console.log(solustion)



function RevInteger(n) {
    let rev = 0;
    let nCopy = n;
    n = Math.abs(n)
    while (n > 0) {
        let last = n % 10;
        rev = (rev * 10) + last;
        n = Math.floor(n / 10);
    }
    return (nCopy < 0 ? -rev : rev)
}
let sol = RevInteger(-125478)
console.log(sol)

var reverse = function (x) {
    let xCopy = x;
    x = Math.abs(x);
    let rev = 0;
    while (x > 0) {
        let rem = x % 10;
        rev = (rev * 10) + rem;
        x = Math.floor(x/10)
    }
    return (xCopy < 0 ? -rev : rev)
};

console.log(reverse(12547))


function MAxNum(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            max=arr[i]
        }
    }
    return max
}

let arr = [12, 25, 2, 45, 74, -25, 65, 20]
console.log(MAxNum(arr))


function SecMax(arr) {
    let first = -Infinity;
    let second = -Infinity;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        }
        else if (arr[i] > second) {
            second = arr[i]
        }
    }
    return second;
}
let arr = [12, 25, 2, 45, 74, -25, 65, 20]
console.log(SecMax(arr))



let RemoveDup=function (nums) {
    let x = 0
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > nums[x]){
            x = x + 1;
            nums[x] = nums[i];
        }
    }
    return x+1;
}

let nums = [0, 0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5]

console.log(RemoveDup(nums))

let removVale = function (nums, val) {
    let val = 3;

}


var merge = function(nums1, m, nums2, n) {
    let numsCopy = nums1.slice(0, m);
    console.log(numsCopy)
    let p1=0;
    let p2=0;
    for(let i=0;i<m+n;i++){
        if(p1<m && nums1[p1]<num2[p2]){
            numsCopy[i]=nums1[p1]
        }
        else{
            nums2[p2]>
        }
    }
};
merge([1, 0, 2, 5, 4, 7],3,[4,5,7,5,2],2)


function SearchElemrnt(arr,x) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == x) {
            return i;
        }
    }
    return -1
}
let arr = [1, 2, 5, 7, 8, 9, 12, 4]
console.log(SearchElemrnt(arr,5))


function Negitive(arr) {
    let count=0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0) {
            count = count + 1
        }
    }
        return count

}

let arr=[1,-8,-3,7,-5,-7,30,-12,-7]
let sol = Negitive(arr)
console.log(sol)


function FindIndex(arr, x) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == x) {
            return i
        }
    }
    return -1;
}
let arr = [1, 5, 7, 8, 5, 4, 8, 9, 6, 2]
let sol = FindIndex(arr, 0)
console.log(sol)

function Negitive(arr) {
    let count=0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0) {
            count++
        }
    }
    return count
}
let arr = [1, -5, -7, 2, -6, 8, -3, -7]
let sol = Negitive(arr)
console.log(sol)

function FindLargest(arr) {
    let large = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > large) {
            large=arr[i]
        }
        // if (large < arr[i]) {
        //     large=arr[i]
        // }
    }
    return large;
}
let arr = [110, 2, 5, 7, 4, 1, 2, 5, 65, 45, 74, 48];
let sol = FindLargest(arr)
console.log(sol)


function SecLargest(arr) {
    let first = -Infinity;
    let second = -Infinity;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > first) {
            second = first;
            first=arr[i]
        }
        else if (arr[i] > second) {
            second=arr[i]
        }
    }
    return second
}
let arr = [1, 25, 41, 7, 8, 2, -99, 2, 5, 48]
let sol = SecLargest(arr)
console.log(sol)


for (let i = 0; i < 3; i++){
    for (let j = i; j > 0; j--){
        console.log(i,j)
    }
}


for (let i = 5; i > 0; i--){
    for (let j = 0; j < i; j++){
        console.log(i,j)
    }
}
console.log(125)


// for (let i = 0; i < 10; i++){
    let row = '';
    for (let j = 0; j < 4; j++){
        row = row + ' *';
        // console.log(row)
    }
    console.log(row)
// }



for (let i = 0; i < 5; i++){
    let row = '';
    for (let j = 0; j < i + 1; j++){
        // row = row + (j + 1)
    console.log(j+1)

    }
}


for (let i = 1; i <= 5; i++){
    let row = '';
    for (let j = 1; j <= i; j++){
        row=row+'*'
    }
    console.log(row)
}

for (let i = 1; i <= 5; i++){
    let row = '';
    for (let j = 1; j <= i; j++){
        row = row + (j+1);
    }
    console.log(row)
}


for (let i = 0; i < 4; i++){
    let row = '';
    for (let j = 0; j < 4-i; j++){
        row=row+(j+1)
    }
    console.log(row)
}

let arr = [10,2,0,1,1,1,10]
let sum = 0;
for (let i = 0; i < arr.length; i++){
    sum=sum+arr[i]
}
console.log(sum);


let n=5

for (let i = 0; i <n; i++){
    let row = '';
    for (let j = 0; j < n - i; j++){
        row=row+(j+1)
    }
    console.log(row)
}


for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n - i; j++) {
        row = row + ('*')
    }
    console.log(row)
}


let n=10
for (let i = 0; i < n; i++){
    let row = ''
    for (let j = 0; j < n - (i + 1); j++){
        row=row+' '
    }
    for (let k = 0; k < (i + 1); k++){
        row=row+'*'
    }
    console.log(row)
}

let toggle = '';

for (let i = 0; i < n; i++){
    let row = '';
    for (let j = 0; j <= i; j++){
        row = row + toggle;
        if (toggle == 0) {
            toggle=1
        }
        else {
            toggle=0
        }
    }
    console.log(row)
}


function CountDigits(n) {
    if (n == 0) return 1;
    let count = 0;
    n=Math.abs(n)
    while (n > 0) {
        n = Math.floor(n / 10);
        count++
    }
    return count
}
let n = -125470;
let res = CountDigits(n)
console.log(res)


function Polyndrom(n) {
    let nCopy=n
    let rev = 0;
    while (n > 0) {
        let rem = n % 10;
        rev = (10 * rev) + rem;
        n=Math.floor(n/10)
    }
    if (rev===nCopy) {
        return true
    }
    else {
        return false
    }
}
Polyndrom(125)
let res=Polyndrom(102)

console.log(res)

console.log('Hello')



function Count(n) {
    // let nCopy = n;
    if (n == 0) return 1;
    n=Math.abs(n)
    let Digits = 0;
    while (n > 0) {
        n = Math.floor(n / 10)
        Digits++
    }
    return Digits;
}
let res = Count(1025470)
console.log(res)


function Reverse(n) {
    let rev = 0;
    n=Math.abs(n)
    while (n > 0) {
        let rem = Math.floor(n % 10)
        rev = (rev * 10) + rem
        n=Math.floor(n/10)
    }
    return rev
}
let res = Reverse(-1250)
console.log(res)