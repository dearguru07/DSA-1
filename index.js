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