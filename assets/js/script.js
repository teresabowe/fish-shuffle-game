
// create global default seaAnimals variable for updating in runGame
const baseImageURL = "assets/images/";
var seaAnimals = [
    `${baseImageURL}fish.png`,
    `${baseImageURL}octopus.png`,
    `${baseImageURL}crab.png`,
    `${baseImageURL}seahorse.png`
];

console.log("Show seaAnimals")
console.log(seaAnimals);

console.log("selectSeaAnimals before clone");  
var selectSeaAnimals = [...seaAnimals];
console.log(selectSeaAnimals);

// start counter to cycle through images in runGame
var counter = 1;
var imageChoiceID = 1000;


// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them


document.addEventListener("DOMContentLoaded", function() {

// use Fisher-Yates algorithm to shuffle sea animals
// https://www.tutorialspoint.com/what-is-fisher-yates-shuffle-in-javascript

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
// https://stackoverflow.com/questions/25291730/change-images-on-click-cycle-through-3-images

function runGame() {
       
    
if(counter == 0){
    console.log("this.id");
    console.log(this.id);
    this.src = "assets/images/fish.png";
    counter++;
    
}
else if(counter == 1){
    console.log("this.id");
    console.log(this.id);
    this.src = "assets/images/octopus.png";
    counter++;
    
}
else if(counter == 2){
    console.log("this.id");
    console.log(this.id);
    this.src = "assets/images/crab.png";
    counter++;
    
}
else if(counter == 3){
    console.log("this.id");
    console.log(this.id);
    this.src = "assets/images/seahorse.png";
    counter = 0;
};

console.log("seaAnimals before splice") ;  
console.log(seaAnimals);

console.log("Fixed non changing selectSeaAnimals before splice") ;  
console.log(selectSeaAnimals);

console.log("counter");
console.log(counter);

//seaAnimals.splice(counter, 1, selectSeaAnimals[this.id]);
//seaAnimals.splice(this.id-1, 1, document.getElementById(this.id).src);

seaAnimals.splice(this.id-1, 1, (document.getElementById(this.id).getAttribute("src")));
console.log("seaAnimals after splice");
console.log(seaAnimals);

console.log("Fixed non changing selectSeaAnimals after splice") ;  
console.log(selectSeaAnimals);


};

function checkAnswer(shuffle) {
    
    console.log("Selection from user")
    console.log(seaAnimals);
    console.log("Selection from shuffle")
    console.log(shuffle);
    
    let correctPick = 0;

    //clone seaAnimals
    console.log("Clone seaAnimals");
    var cloneSeaAnimals = [...seaAnimals];
    console.log(cloneSeaAnimals);

    //tidy up user guess before checking for more than one selection of sea animal
    console.log("Clean seaAnimals down to sea animal name only");
    cloneSeaAnimals = cloneSeaAnimals.map(x=>x.substring(14, x.length));
    cloneSeaAnimals = cloneSeaAnimals.map(x=>x.substring(0, x.length -4));
    console.log("After edit of user guess cloneSeaAnimals");
    console.log(cloneSeaAnimals);

    for (let j = 0; j < 4; j++) {
        if (shuffle[j] === cloneSeaAnimals[j]) {
            document.getElementById(j + 1).style.border = "thick solid #50C878";
            correctPick++;
        } else {
            document.getElementById(j + 1).style.border = "thick solid #FF0000 ";
        };
    }

    //function to find out if there is more than one selection of a sea animal
    //https://bobbyhadz.com/blog/javascript-get-difference-between-two-arrays
    //elements from the first array that are not contained in the second array
    
    function getDifference(a, b) {
        return a.filter(element => {
          return !b.includes(element);
        });
    };

    //function to check if the arrays are the same
    //https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript

    Array.prototype.equals = function (array) {
        for (var i = 0, l=this.length; i < l; i++) {
            if (this[i] != array[i]) { 
                return false;   
            }           
        }       
        return true;
    };
    
    console.log("Look at cloneSeaAnimals before incrementClone")
    console.log(cloneSeaAnimals);      
    
    if ((getDifference(shuffle, cloneSeaAnimals).length) != 0) {
        alert(`Oops!! Choose one of each sea animal i.e. ${getDifference(shuffle, cloneSeaAnimals)}`)
        incrementClone ();   
    }
    else if (shuffle.equals(cloneSeaAnimals)) 
        { alert(`Well Done!!! You chose all of the correct sea animals`);
            
    }  else {
        alert(`Hard luck! try again to see if you can guess correctly!`);
        incrementClone ();   
    };
  
      
console.log("Look at cloneSeaAnimals after incrementClone")
console.log(cloneSeaAnimals);   
console.log("Look at seaAnimals after incrementClone")
console.log(seaAnimals); 

};

function changeImageId(item) {
    item.id = item.id + "x" + imageChoiceID
  }

function incrementClone() {
    imageChoiceID++;
    let clonedElement = document.querySelector(".cloned-area");
    let seaAnimalsElement = document.querySelector(".game-area");
    let clonedImages = seaAnimalsElement.cloneNode(true);
    clonedImages.id = imageChoiceID;
    clonedImages.classList = "answer-area";
    clonedImages.querySelectorAll('img').forEach(changeImageId);
    clonedElement.appendChild(clonedImages);
};

