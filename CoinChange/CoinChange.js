function Coinchange(num){
    let change = {}
    let dollar = Math.trunc(num/100);
    if (dollar > 0){
        change.dollars = dollar;
    }
    let quarter = Math.trunc((num % 100)/25);
    if (quarter > 0){
        change.quarters = quarter;
    }
    let dime = Math.trunc((num % 25)/10);
    if (dime > 0){
        change.dimes = dime;
    }
    let pennie = ((num-(quarter*25)) % 10);
    if (pennie > 0){
        change.pennies = pennie;
    }
    console.log(change);
}

function ChangeObject (obj){
    let total = 0;
    for( let key in obj ){
        if (key == "dollars"){
            total += (obj[key]*100);
        }
        if (key == "quarters"){
            total += (obj[key]*25);
        }
        if (key == "dimes"){
            total += (obj[key]*10);
        }
        if (key == "pennies"){
            total += (obj[key]*1);
        }
    }
    Coinchange(total);
}

Coinchange(78);
ChangeObject({dollars: 10, dimes: 75, pennies: 5})