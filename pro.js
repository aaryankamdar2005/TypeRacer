const text = [
    "In the heart of the ancient forest, the whispering leaves danced in the twilight breeze. A curious fox with fur as red as autumn leaves trotted along the winding path, its keen eyes catching the glint of a hidden treasure buried beneath an old oak tree. Meanwhile, above the canopy, the sky turned a deep shade of indigo, studded with stars that seemed to hum a celestial melody. Somewhere in the distance, the hoot of an owl echoed, a reminder of the night's timeless watch over the secrets of the woods. As the moon rose higher, casting silver shadows, the forest came alive with the symphony of nocturnal creatures, each playing their part in the timeless dance of nature.",
    "Nestled deep within this enchanted forest, a quaint village lay hidden from the prying eyes of the outside world. The villagers, simple folk with an unbreakable bond to the land, went about their nightly routines with a sense of serene purpose. Lanterns glowed softly in the windows of stone cottages, casting warm pools of light onto cobblestone streets. Old Mr. Whittle, the village blacksmith, could be seen through his workshop window, his burly frame silhouetted against the forge's fiery glow. He hammered away at a horseshoe, the rhythmic clang of metal on metal blending harmoniously with the forest's natural sounds.",
    "At the village's heart stood a grand, ancient tree known as the Elder Oak. Its gnarled branches stretched out like protective arms, and its roots dug deep into the earth, anchoring the village in both time and place. The villagers believed the Elder Oak possessed magical properties, a living link to their ancestors and the mystical energies of the forest. Every year, on the eve of the summer solstice, the villagers gathered around the tree to celebrate the Festival of Light. They danced and sang, their faces aglow with joy as they honored the spirit of the forest and the enduring cycle of life.",
    "On this particular night, a young girl named Elara stood at the base of the Elder Oak, her eyes wide with wonder. She had always felt a special connection to the tree, sensing its ancient wisdom and the secrets it held. As she placed her hand on the rough bark, she felt a gentle pulse, as if the tree's heartbeat resonated with her own. Suddenly, a soft glow emanated from the tree, and a tiny, ethereal figure appeared before her. It was a forest sprite, a guardian of the woodland realm, with shimmering wings and eyes that sparkled like dew-kissed leaves.",
    "Elara, the sprite spoke in a voice as soft as a summer breeze, you have been chosen for a great journey. The forest is in danger, and it needs your help. A shadow is spreading from the Darkwood, threatening to consume all life. You must find the Heartstone, a powerful artifact that can restore balance and protect our world. Elara's heart raced with a mix of excitement and fear. She knew this was her destiny, a call to adventure that she could not ignore. With a determined nod, she agreed to embark on the quest, ready to face whatever challenges lay ahead.",
    "As dawn broke, Elara set out on her journey, guided by the forest sprite and the wisdom of the Elder Oak. She ventured deeper into the woods, encountering magical creatures and overcoming trials that tested her courage and resolve. Along the way, she discovered the strength within herself and the true meaning of bravery. With each step, the bond between her and the forest grew stronger, and she realized that she was not just a protector of the land, but an integral part of its story. The journey was long and arduous, but Elara's determination never wavered. She knew that the fate of the forest, and the village she loved, depended on her success."
];
let button1 = document.querySelector(".btn1");
let randomText = document.querySelector(".generate");
let textA = document.querySelector(".textArea");
let input_word = document.querySelector(".textArea");
let yourSpeed = document.querySelector(".speed");
let button2 = document.querySelector(".btn2");
let yourAccuracy = document.querySelector(".accuracy");
let no_of_words = 0;
let counter = 0;
let words = [];
let input;
let letter;
let timeCounter = 0;
let timer;
let minutes=0;
let i=0;
let incorrectCounter=0;

const checker = () => {
    input = textA.value.trim();
    console.log(input);
}

const checker2 = () => {
    if (input === words[counter]) {
     
       
    } else {
        incorrectCounter++;

     
        
    }
  
}




const startTyping = () => {

    let randomNumber = Math.floor(Math.random() * text.length);
    console.log(randomNumber);
    randomText.innerText = text[randomNumber];
    no_of_words = text[randomNumber].split(" ").length;
    words = text[randomNumber].split(" ");
    console.log(words)
    counter = 0;  
};

const startTyping2 =() =>{ 

}
button1.addEventListener("click", () => {
    timer = setInterval(() => {
        console.log("inside");
        timeCounter += 1000; // Increment by 1000 milliseconds (1 second)
       minutes = (timeCounter / 60000); // Convert milliseconds to minutes
     
    }, 1000);
    console.log("Testing");
    startTyping();
});

textA.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); 
        checker();
        checker2();
     

        textA.value = "";  // Clear the input field
        counter++;
        i=0;
        if (counter >= words.length) {
            console.log("End of text");
        }
    }
});
textA.addEventListener("input", function(event) {

  
    const currentWord=words[counter];
    console.log(currentWord);
    let n=currentWord.length;
    
    
   
    const value = event.target.value;


    if (value.length > 0) {
        letter=value[value.length - 1]; // Log the last typed character
      }
      console.log(letter);
      

 
        if (letter === currentWord.slice(i, i + 1)) {
            console.log(i);
            console.log(currentWord.slice(i, i + 1));
            input_word.style.color = 'black';
            console.log("correct letter");
            i++;
        } else {
            console.log(i);
            console.log(currentWord.slice(i, i + 1));
            input_word.style.color = 'red';
            console.log("incorrect letter");
            i++;

        }
       
    

  


});


button2.addEventListener("click", () => {
    console.log(minutes);


    yourSpeed.innerText = `Typing Speed: ${Math.floor(counter/minutes)} WPM`;
yourAccuracy.innerText = `Accuracy=${100-incorrectCounter}`;
randomText.innerText ='Generate Text';
});
