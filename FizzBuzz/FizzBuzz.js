function FizzBuzz (num){
    for (i=1; i < num+1; i++){
        if (i % 15 == 0){
            console.log ("FizzBuzz");
        }
        else if (i % 3 == 0){
            console.log ("Fizz");
        }
        else if (i % 5 == 0){
            console.log ("Fizz");
        }
        else {
            console.log (i);
        }
    }
}

FizzBuzz(15);