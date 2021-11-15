// function BracesValidNO(string){
//     let p = [];
//     let sb = [];
//     let cb = [];
//     for (i = 0; i < string.length; i++){

//         if (string[i] == "["){

//             sb.push("[");
            
//         }
//         if (string[i] == "]"){

//             if (sb.length == 0){
//                 return false;
//             }
//             else {
//                 sb.pop("[");
//             }
//         }
//         if (string[i] == "("){

//             p.push("(");
            
//         }
//         if (string[i] == ")"){

//             if (p.length == 0){
//                 return false;
//             }
//             else {
//                 p.pop(")");
//             }
//         }
//         if (string[i] == "{"){

//             cb.push("{");
            
//         }
//         if (string[i] == "}"){

//             if (cb.length == 0){
//                 return false;
//             }
//             else {
//                 cb.pop("{");
//             }
//         }
//     }
//     if (p.length != 0 || sb.length != 0 || cb.length != 0){
//         return false;
//     } else {
//         return true;
//     }
// }

function BracesValid(string){
    let b = [];
    for (i = 0; i < string.length; i++){
        if (string[i] == "[" || string[i] == "(" || string[i] == "{"){

            b.unshift(string[i]);
            
        }
        if (string[i] == "]"){

            if (b[0] == "["){
                b.shift();
            }
            else {
                return false;
            }
        }
        if (string[i] == ")"){

            if (b[0] == "("){
                b.shift();
            }
            else {
                return false;
            }
        }
        if (string[i] == "}"){

            if (b[0] == "{"){
                b.shift();
            }
            else {
                return false;
            }
        }
    }
    if (b.length != 0){
        return false;
    } else {
        return true;
    }

}

console.log(BracesValid("{{()}}[]"));
