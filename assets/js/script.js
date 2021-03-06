
// create global default seaAnimals array for updating in toggleImages
const baseImageURL = "assets/images/";
var seaAnimals = [
    `${baseImageURL}fish.png`,
    `${baseImageURL}octopus.png`,
    `${baseImageURL}crab.png`,
    `${baseImageURL}seahorse.png`
];

console.log("Show seaAnimals")
console.log(seaAnimals);

// start counter to cycle through images in runGame
//var counter = 1;
// identify image choices for cloned trys
var imageChoiceId = 1000;

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them


document.addEventListener("DOMContentLoaded", function() {

// use Fisher-Yates algorithm to shuffle sea animals
// https://www.tutorialspoint.com/what-is-fisher-yates-shuffle-in-javascript

    /**var shuffle = ['crab','octopus','seahorse','fish'];
    var i = shuffle.length, k , temp;      // k is to generate random index and temp is to swap the values
    while(--i > 0){
       k = Math.floor(Math.random() * (i+1));
       temp = shuffle[k];
       shuffle[k] = shuffle[i];
       shuffle[i] = temp;
    }*/

    // Idea is to iterate through the array backwards.  As we encounter each array we exchange 
    // its position with another element in the array.
    // The exchange location is determined by a random number.
    //https://www.youtube.com/watch?v=myL4xmtAVtw

    arrayForShuffle = ['crab','octopus','seahorse','fish']; //array to be shuffled
    let shuffle = arrayShuffle(arrayForShuffle);

    document.getElementById('1').onclick = toggleImages;
    document.getElementById('2').onclick = toggleImages;
    document.getElementById('3').onclick = toggleImages;
    document.getElementById('4').onclick = toggleImages;     
    
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", function() {
        checkAnswer(shuffle);
    });   
    
});

function  arrayShuffle(arrayToShuffle) { //pass an array into this function. 
    let newPos, temp; //newPos position of number in array, temp is used for temp assignment for i to allow for swap

    for (let i = arrayToShuffle.length - 1; i > 0; i--) { //get length of array -1, run the loop until the number is greater than zero, decrement i (going down throughthe array)
        newPos = Math.floor(Math.random() * (i + 1)); //returns number between 0 and 1 so multiply by i + 1 i.e. the number you are moving.  Then use Math.florr to remove te decimal place.
        temp = arrayToShuffle[i]; // allows for swap
        arrayToShuffle[i] = arrayToShuffle[newPos]; //allows for swap
        arrayToShuffle[newPos] = temp; // allows for swap
    }
    return arrayToShuffle;
}

/** create array for trys and populate */
// https://stackoverflow.com/questions/25291730/change-images-on-click-cycle-through-3-images



function toggleImages() {
           
    if(this.src.includes(`${baseImageURL}fish.png`)) {
        this.src = `${baseImageURL}octopus.png`;
    } else if(this.src.includes(`${baseImageURL}octopus.png`)) {
        this.src =`${baseImageURL}crab.png`;
    } else if(this.src.includes(`${baseImageURL}crab.png`)) {
        this.src = `${baseImageURL}seahorse.png`;
    } else if(this.src.includes(`${baseImageURL}seahorse.png`)) {
        this.src = `${baseImageURL}fish.png`;
    };

console.log("seaAnimals before splice") ;  
console.log(seaAnimals);

seaAnimals.splice(this.id-1, 1, (document.getElementById(this.id).getAttribute("src")));

console.log("seaAnimals after splice");
console.log(seaAnimals);



};

function checkAnswer(shuffle) {
    
    console.log("Selection from user")
    console.log(seaAnimals);
    console.log("Selection from shuffle")
    console.log(shuffle);

    //clone seaAnimals (user choice) to prepare for cleaning and comparisons with shuffle (computer choice)
    console.log("Clone seaAnimals");
    var cloneSeaAnimals = [...seaAnimals];
    console.log(cloneSeaAnimals);

    //tidy up user choice cloneSeaAnimals
    console.log("Clean seaAnimals down to sea animal name only");
    cloneSeaAnimals = cloneSeaAnimals.map(x=>x.substring(14, x.length));
    cloneSeaAnimals = cloneSeaAnimals.map(x=>x.substring(0, x.length -4));
    console.log("After edit of user guess cloneSeaAnimals");
    console.log(cloneSeaAnimals);

    // Compares each element of the arrays
    for (let j = 0; j < 4; j++) {
        if (shuffle[j] === cloneSeaAnimals[j]) {
            document.getElementById(j + 1).style.border = "thick solid #50C878";
        } else {
            document.getElementById(j + 1).style.border = "thick solid #FF0000 ";
        };
    };

    // Find elements from the first array that are not contained in the second array
    // https://bobbyhadz.com/blog/javascript-get-difference-between-two-arrays
    function getDifference(a, b) {
        return a.filter(element => {
          return !b.includes(element);
        });
    };

    // Check if the arrays are the same
    // https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
    Array.prototype.equals = function (array) {
        for (var i = 0, l=this.length; i < l; i++) {
            if (this[i] != array[i]) { 
                return false;   
            };           
        };      
        return true;
    };
    
    console.log("Look at cloneSeaAnimals before incrementClone")
    console.log(cloneSeaAnimals);      
    
    if ((getDifference(shuffle, cloneSeaAnimals).length) != 0) {
        alert(`Oops!! Choose one of each sea animal i.e. ${getDifference(shuffle, cloneSeaAnimals)}`); 
        incrementClone();        
    }  else if (shuffle.equals(cloneSeaAnimals)) 
        { alert(`Well Done!!! You chose all of the correct sea animals.  Click "Start" to start a new game.`);  
        document.getElementById("submit").disabled = true;
        document.getElementById('1').onclick = null;
        document.getElementById('2').onclick = null;
        document.getElementById('3').onclick = null;
        document.getElementById('4').onclick = null; 
    }  else {
        alert(`Hard luck! try again to see if you can guess correctly!`);
        incrementClone();
    };
  
      
console.log("Look at cloneSeaAnimals after incrementClone")
console.log(cloneSeaAnimals);   
console.log("Look at seaAnimals after incrementClone")
console.log(seaAnimals); 

console.log("Get id of first clone")
const clone = document.querySelector(".cloned-area-center");
console.log(clone.firstElementChild.id);
};

// Add image choice id to user choice to identify and keep the clone unique
function changeImageId(item) {
    item.id = item.id + "x" + imageChoiceId
    };

// Create and increment clones
function incrementClone() {
    imageChoiceId++;
    if (imageChoiceId >= 1026) {
        alert(`You have tried to guess the sequence more than 25 times without any luck!  Start a new game by clicking on the start button.`);
        throw `Aborting game!`;
    } else {
    let clonedElement = document.querySelector(".cloned-area-center");
    let seaAnimalsElement = document.querySelector(".try-area-center");
    let clonedImages = seaAnimalsElement.cloneNode(true);
    clonedImages.id = imageChoiceId;
    clonedImages.classList = "answer-area";
    clonedImages.querySelectorAll('img').forEach(changeImageId);
    clonedElement.appendChild(clonedImages);
    };
};
