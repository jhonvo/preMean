function binarySearch (arr, num){
    let start = 0;
    let end = arr.length-1;
    binaryCheck(arr, num, start, end);
}

function binaryCheckNO(arr,num,index){
    console.log(arr+num+index);
    // let currentindex = index;
    // console.log("This is the index used..." + index);
    if (arr[index] == num){
        console.log("The number was found in index " + index) ;
    } 
    if (index == 0 || index > arr.length){
        console.log("-1");
    }
    else {
        if (arr[index] < num){
            console.log(arr[index]);
            let newindex = index + Math.trunc(index/2)
            binaryCheck(arr, num, newindex);
            // console.log(index/2);
        }
        
        if (arr[index] > num){
            console.log(arr[index]);
            let newindex = index - Math.trunc(index/2)
            binaryCheck(arr, num, newindex);
            // console.log(index/2);
        }
    }
}

function binaryCheck(arr, num,start,end){
    let mid =  Math.trunc((start+end)/2);
    if (arr[mid] == num){
        console.log("The number was found in index " + index) ;
    } 
    if (mid == 0 || mid > arr.length){
        console.log("-1");
    }
    else {
        if (arr[mid] < num){
            let newstart = mid+1;
            binaryCheck(arr, num, newstart, end);
        }
        
        if (arr[mid] > num){
            let newend = mid-1;
            binaryCheck(arr, num, start, newend);
        }

    }
}





// binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 34);
binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 3);
