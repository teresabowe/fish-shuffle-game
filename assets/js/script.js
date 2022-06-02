var seaAnimals = ["https://8000-teresabowe-fishshuffleg-f4uffbtqz7m.ws-eu46.gitpod.io/assets/images/fish.png","https://8000-teresabowe-fishshuffleg-f4uffbtqz7m.ws-eu46.gitpod.io/assets/images/octopus.png","https://8000-teresabowe-fishshuffleg-f4uffbtqz7m.ws-eu46.gitpod.io/assets/images/crab.png","https://8000-teresabowe-fishshuffleg-f4uffbtqz7m.ws-eu46.gitpod.io/assets/images/seahorse.png"];
var counter = 1;


// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them


document.addEventListener("DOMContentLoaded", function() {
    
    var shuffle = ['crab','octopus','seahorse','fish'];
    var i = shuffle.length, k , temp;      // k is to generate random index and temp is to swap the values
    while(--i > 0){
       k = Math.floor(Math.random() * (i+1));
       temp = shuffle[k];
       shuffle[k] = shuffle[i];
       shuffle[i] = temp;
    }

    document.getElementById('1').onclick = runGame;
    document.getElementById('2').onclick = runGame;
    document.getElementById('3').onclick = runGame;
    document.getElementById('4').onclick = runGame;     
    
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", function() {
        checkAnswer(shuffle);
    });   
    
});
           



/** create array for trys and populate */
function runGame () {
    
        {
        if(counter == 0){
            document.getElementById(this.id).src = "assets/images/fish.png";
            counter++;
            
        }
        else if(counter == 1){
            document.getElementById(this.id).src = "assets/images/octopus.png";
            counter++;
            
        }
        else if(counter == 2){
            document.getElementById(this.id).src = "assets/images/crab.png";
            counter++;
            
        }
        else if(counter == 3){
            document.getElementById(this.id).src = "assets/images/seahorse.png";
            counter = 0;
            
        }

    seaAnimals.splice((this.id-1), 1, document.getElementById(this.id).src);
    console.log("seaAnimals after splice")
    console.log(seaAnimals);
    
    };
};

function checkAnswer(shuffle) {
    console.log("Selection from user")
    console.log(seaAnimals);
    console.log("Selection from shuffle")
    console.log(shuffle);
    console.log("Selection for testing - User Guess")
    arrayForTestUserGuess = ['crab','octopus','octopus','fish'];
    console.log(arrayForTestUserGuess);
    console.log("Selection for testing - Shuffle")
    arrayForTestShuffle = ['fish','crab','seahorse','octopus'];
    console.log(arrayForTestShuffle);

    //tidy up user guess before checking for more than one selection of sea animal

    //seaAnimals = seaAnimals.map(x => x.replace(/teresabowe-fishshuffleg-f4uffbtqz7m.ws-eu46.gitpod.io/g,""));
    seaAnimals = seaAnimals.map(x=>x.substring(81, x.length));
    console.log("After 1st edit of user guess seaAnimals");
    console.log(seaAnimals);
    seaAnimals = seaAnimals.map(x=>x.substring(0, x.length -4));
    console.log("After 2nd edit of user guess seaAnimals");
    console.log(seaAnimals);

    //find out if there is more than one selection of a sea animal

    function getDifference(a, b) {
        return a.filter(element => {
          return !b.includes(element);
        });
      }
    console.log("getDifference Function");
    console.log(getDifference(shuffle, seaAnimals));

    console.log("End of get difference check this test");
    console.log("")
    console.log("")

      // divider

    Array.prototype.equals = function (array) {
        for (var i = 0, l=this.length; i < l; i++) {
            if (this[i] != array[i]) { 
                return false;   
            }           
        }       
        return true;
    };
    console.log("shuffle versus arrayForTestUserGuess");
    console.log(shuffle.equals(arrayForTestUserGuess));
    console.log("shuffle versus shuffle");
    console.log(shuffle.equals(shuffle));
    console.log("shuffle versus arrayForTestShuffle")
    console.log(shuffle.equals(arrayForTestShuffle));

    console.log("End of this test");

    

    function checkArrayEquality(_array1, _array2) 
    {
        return _array1.length === _array2.length && 
        _array1.every( function(_array1_i ,i) 
        { 
        return _array1_i === _array2[i] 
        } )  
    }
    //usage
    let array1 = [1,2,"Hello",7] 
    let array2 = ["Hello",7,2,1] 
    let array3 = [1,2,"Hello",7] 
    console.log(checkArrayEquality(array1, array2));
    console.log(checkArrayEquality(array1, array3));
    
    function checkArrayElements(_array1, _array2) 
    {
        return _array1[0]===_array2[0]; 
    }
    console.log("Check array element 1")
    console.log(checkArrayElements(array1, array3));

    console.log("try compare using iterate");

    if (array1.length !== array2.length) return console.log("false");
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                console.log("yes match", array1[i], array2[j]);
                continue;
            }
            console.log("no match", array1[i], array2[j]);
        }
    }
/** https://bobbyhadz.com/blog/javascript-check-if-array-contains-substring-match */

    const array = ['hello', 'world'];
    const substring = 'hell';

    const matches = array.filter(element => {
    if (element.indexOf(substring) !== -1) {
        return true;
    }
    });

    console.log(matches); // 👉️ [ 'hello' ]

    if (matches.length > 0) {
    // array contains substring match
}


};


