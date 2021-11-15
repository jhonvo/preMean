function BubbleSort (arr){
    for (x=0; x < arr.length; x++){
        let change = 0;
        for (i=0; i < arr.length-(1+x); i++){
            console.log("1 run");
            if (arr[i] > arr[i+1]){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                change += 1;
            }
            
        }
        if (change == 0){
            return arr;
        }
    }
    // console.log(arr);
}

console.log(BubbleSort([1,2,3,4,5,7,6]));


