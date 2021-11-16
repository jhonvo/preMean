function binarySearch (arr, num){
    let orgindex = Math.trunc((arr.length-1)/2)
    console.log(arr.length);
    console.log(orgindex);
    binaryCheck(arr, num, orgindex);
}

function binaryCheck (arr,num,index){
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

// binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 34);
binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 3);
