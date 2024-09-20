const words = [
    // "Hello",
    // "Programming",
    // "Code",
    // "Javascript",
    // "Town",
    // "Country",
    // "Testing",
    // "Youtube",
    // "Linkedin",
    // "Twitter",
    // "Github",
    // "Leetcode",
    // "Internet",
    // "Python",
    // "Scala",
    // "Destructuring",
    // "Paradigm",
    // "Styling",
    // "Cascade",
    // "Documentation",
    // "Coding",
    // "Funny",
    // "Working",
    // "Dependencies",
    // "Task",
    // "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
    ];


    const lvls = {
        "Easy":5,
        "Normal":3,
        "Hard":2,
    }

    let defaultLevel = "Normal";
    let defaultLevelSec = lvls[defaultLevel];

    let startButton = document.querySelector(".start");
    let lvlNameSpan = document.querySelector(".message .lvl");
    let secondsSpan = document.querySelector(".message .seconds");
    let theWord = document.querySelector(".the-word");
    let upcomingWords = document.querySelector(".upcoming-words");
    let input = document.querySelector(".input");
    let timeLeftSpan = document.querySelector(".time span");
    let scoreGot = document.querySelector(".score .got");
    let scoreTotal = document.querySelector(".score .total");
    let finishMessage = document.querySelector(".finish");


    lvlNameSpan.innerHTML=defaultLevel;
    secondsSpan.innerHTML=defaultLevelSec;
    timeLeftSpan.innerHTML=defaultLevelSec;
    scoreTotal.innerHTML=words.length;
    

    //disable paste 
    input.onpaste= function(){
        return false ;
    }

    startButton.onclick =function(){
        this.remove();
        input.focus();
        generate();
    }

    function generate() {
        let ranWord = words[Math.floor(Math.random() * words.length)];
        
        let wordIndex=words.indexOf(ranWord);
        // console.log(ranWord)
        theWord.innerHTML=ranWord;

        words.splice(wordIndex,1);

        upcomingWords.innerHTML="";

        for(let i =0 ; i<words.length;i++) {
            let div =document.createElement("div");
            let txt = document.createTextNode(words[i]);
            div.appendChild(txt);
            upcomingWords.appendChild(div);
        }
        startPlay()
    }
    function startPlay () {
        timeLeftSpan.innerHTML=defaultLevelSec;
        let start = setInterval(()=> {
            timeLeftSpan.innerHTML--;
            if(timeLeftSpan.innerHTML==0) {
                clearInterval(start)
                if(theWord.innerHTML.toLowerCase()===input.value.toLowerCase()){
                    input.value="";
                    scoreGot.innerHTML++;
                    if(words.length>0){
                        generate();
                    }else{
                        let span = document.createElement("span")
                        span.className='good';
                        let spanTetx=document.createTextNode("Great Work")
                        span.appendChild(spanTetx);
                        finishMessage.appendChild(span)
                        upcomingWords.remove();
                    }
                }else{
                    let span = document.createElement("span")
                    span.className='bad';
                    let spanTetx=document.createTextNode("Game Over")
                    span.appendChild(spanTetx);
                    finishMessage.appendChild(span)
                }
            }
        },1000)
    }