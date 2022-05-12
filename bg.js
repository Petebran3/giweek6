//Easy

const average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average([11,25,37,44,52]));

//stop here

//medium

function findMin(arr,low,high) {
        
        if (high < low)
            return arr[0];
         
        if (high == low)
            return arr[low];
         
        // Find mid
        //math.floor() function returns the largest integer less than or equal to a given number.
        let mid =low + Math.floor((high - low)/2);
        if (mid < high && arr[mid+1] < arr[mid])
            return arr[mid+1];
         
        if (mid > low && arr[mid] < arr[mid - 1])
            return arr[mid];

        if (arr[high] > arr[mid])
            return findMin(arr, low, mid-1);
         
        return findMin(arr, mid+1, high);
    }
     
    let arr1=[0, 1, 2, 3, 4, 5, 6, 7];
    let n1 = arr1.length;
    console.log("the minimum element is " + findMin(arr1, 0, n1-1));
    let arr2=[4, 5, 6, 7, 0, 1, 2];
    let n2 = arr1.length;
    console.log("the minimum element is " + findMin(arr1, 0, n2-1));


    //stop here

    //hard

    const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
  const backgroundColor = btn.style.backgroundColor;

  if (backgroundColor === 'red') {
    btn.style.backgroundColor = 'white';

  } else {
    btn.style.backgroundColor = 'red';
  }
});


//stop here

//very hard
function minCoins(coins, t, P)
{
     

    if (P == 0)
        return 0;
     //MAX_VALUE is a static property of Number , you always use it as Number.
    let res = Number.MAX_VALUE;
     
    for(let i = 0; i < t; i++)
    {
        if (coins[i] <= P)
        {
            let sub_res = minCoins(coins, t,
                               P - coins[i]);
             
            if (sub_res != Number.MAX_VALUE &&
                sub_res + 1 < res)
                res = sub_res + 1;
        }
    }
    return res;
}
 
let coins = [9, 6, 5, 1];
let t = coins.length;
let P = 11;

console.log("minimum coins required is " + minCoins(coins, t, P));

//stop here
