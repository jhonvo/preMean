users = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
        }
    }
]

function userLanguages (arr){
    for (i=0; i < arr.length; i++){
        let lang = "";
        let int = "";
        for (j=0; j<arr[i].languages.length; j++){
            if (j == arr[i].languages.length-1){
                lang += "and " + arr[i].languages[j] + ".";
            }
            else{
                lang += arr[i].languages[j] + ", ";
            }
        }
        // for (let key in arr[i].interests){
        //     for (k=0; i < arr[i].interests[key].length; k++){
        //         int += arr[i].interests[key][k] + ", ";
        //     }
        // }

        console.log( arr[i].fname + " " + arr[i].lname + " knows " + lang);
        // console.log( arr[i].fname + " also likes " + int);
        }        
    }



userLanguages(users);

