function MaxMinAvg (arr){
    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    for (i=1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
        if (arr[i]<min){
            min = arr[i];
        }
        sum += arr[i];
    }
    let avg = sum / arr.length;
    console.log ("The min is = " + min);
    console.log ("The max is = " + max);
    console.log ("The avg is = " + avg);
}

MaxMinAvg([1, -2, 9, 4]);