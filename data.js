//You’re tasked with creating a website that can translate between english and morse code.
//As an extension it should be able to translate both ways.



// 5. convert English to morse -> get letter and find corresponding morse

// 1. Stores  the alphabet and morse code, creates two arrays, one with letters and one with morse
var charCodes=new Array(36); charCodes["a"]=". _";
charCodes["b"]="_ . . .";
charCodes["c"]="_ . _ .";
charCodes["d"]="_ . .";
charCodes["e"]=".";
charCodes["f"]=". . _ .";
charCodes["g"]="_ _ .";
charCodes["h"]=". . . .";
charCodes["i"]=". .";
charCodes["j"]=". _ _ _";
charCodes["k"]="_ . _";
charCodes["l"]=". _ . .";
charCodes["m"]="_ _";
charCodes["n"]="_ .";
charCodes["o"]="_ _ _";
charCodes["p"]=". _ _ .";
charCodes["q"]="_ _ . _";
charCodes["r"]=". _ .";
charCodes["s"]=". . .";
charCodes["t"]="_";
charCodes["u"]=". . _";
charCodes["v"]=". . . _";
charCodes["w"]=". _ _";
charCodes["x"]="_ . . _";
charCodes["y"]="_ . _ _";
charCodes["z"]="_ _ . .";
charCodes["1"]=". _ _ _ _";
charCodes["2"]=". . _ _ _";
charCodes["3"]=". . . _ _";
charCodes["4"]=". . . . _";
charCodes["5"]=". . . . .";
charCodes["6"]="_ . . . .";
charCodes["7"]="_ _ . . .";
charCodes["8"]="_ _ _ . .";
charCodes["9"]="_ _ _ _ .";
charCodes["0"]="_ _ _ _ _";
var temp=''

const submitButton = document.getElementsByClassName("button")[0];

// 3. Listener on the encode button, which on click  -> runs the function -> converts English to morse by listening to the  morsecode box and converts to lower case. Then creates new morse in box
function encode() {
document.morsecode.chars.value=document.morsecode.chars.value.toLowerCase();
document.morsecode.codebox.value="";
temp=''
var chars=document.morsecode.chars.value.split("");
// 5. For loop that converts English to morse -> gets any letter 'a' and find corresponding morse
for (a=0; a<chars.length; a++) {
if (chars[a]!=" ") {
    // 7. Display the converted result
if (window.charCodes[chars[a]]) {
document.morsecode.codebox.value+=charCodes[chars[a]]+"    ";
temp+=chars[a]+"="+charCodes[chars[a]]+"\n";
}
//Else lists none for special character's i.e ?!'
else
temp+=chars[a]+"=(None)\n";
}
else temp+="\n";
} 
//Gives a breakdown of the code in explanation box \n provides linebreaks:
document.morsecode.codebox.value+="\n\n\nEXPLANATION:\n\n"+temp
} 

// Play Inspector Morse quote on click 
const audioOptions  = [ "Inspector-Morse-1.mp3" , "Inspector-Morse-2.mp3" , "Inspector-Morse-3.mp3" , "Inspector-Morse-4.mp3" , "Inspector-Morse-5.mp3" , "Inspector-Morse-6.mp3" , "Inspector-Morse-7.mp3" , "Inspector-Morse-8.mp3" , "Inspector-Morse-9.mp3" , "Inspector-Morse-10.mp3" , "Inspector-Morse-11.mp3" , "Inspector-Morse-12.mp3" , "Inspector-Morse-13.mp3" , "Inspector-Morse-14.mp3" , "Inspector-Morse-15.mp3"];

submitButton.addEventListener("click", () => {
   encode();
    const soundUrl = audioOptions[Math.floor(Math.random()*15)];
    new Audio(soundUrl).play();
  }) 

  
