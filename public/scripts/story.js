var link = '/public/images/project/'

var roomIMG =  link + 'room'

var character1dialogue = 
{
    
    "dialogue": "Test1"
    
}
var button = document.querySelector(".start")
var portal = document.querySelector(".startbutton")
var header1 = document.querySelector("h1")
var header2 = document.querySelector("h2")

var characterHTML = document.querySelector(".card-title")
var dialogueHTML = document.querySelector(".card-text")

var storyCount = 0

var dialogues = 
{
    "story":[
        {
            "characterName":"Johnny",
              "decisionCheck": true,
              "dialogueText": "Finally home! what should I do?",
              "decisions": ["Play PS4", "Go to bed"],
              "imageURL": "url('/images/project/room1.png')",
              "source": "0",
              "destination": ["1"]

        },
        {
            "characterName":"Johnny",
              "decisionCheck": true,
              "dialogueText": "What the...",
              "decisions": ["..."],
              "imageURL": "url('/images/project/room2.png')",
              "source": "1",
              "destination": ["2"]
        },
        {
            "characterName":"???",
              "decisionCheck": true,
              "dialogueText": "Hey Johnny right? How's it going?'",
              "decisions": ["Are you a time traveller here to kill me?",
                            "How do you know my name?",
                            "Bro you can't just portal into people's rooms you know"],
              "imageURL": "url('/images/project/room3.png')",
              "source": "2",
              "destination": ["3","4","5"]

        },
        {
            "characterName":"???",
              "decisionCheck": false,
              "dialogueText": "Haha, no I am not a time traveller, I am just an older version of you from a different world. My name is also Johnny. ",
              "decisions": ["What are you doing in my world?",
                            "How are you older?"
                            ],
              "imageURL": false,
              "source": "3",
              "destination": ["6","7"]

        },
        {
            "characterName":"???",
              "decisionCheck": false,
              "dialogueText": "Thanks to my friend Gabriel, he did the research for me as a result of it's advanced prediction algorithm. ",
              "decisions": ["Can it predict stock/crypto prices?",
                            "Just how advanced is the tech in your world compared to ours?",
                            ],
              "imageURL": false,
              "source": "4",
              "destination": ["8","9"]

        },
        {
            "characterName":"???",
              "decisionCheck": false,
              "dialogueText": "I apologize for the interruption, my device can predict the right time to teleport to your location as teleporting <br> in the middle of other people may complicate things in the multiverse.'",
              "decisions": ["It's okay, I understand your problem",
                            "How do you know my name?",
                            ],
              "imageURL": false,
              "source": "5",
              "destination": ["10","11"]

        }

    ]
    
}
// Getter Functions

function getCharacter(index) {
    return dialogues.story[index].characterName
}
function getDialogueText(index) {
    return dialogues.story[index].dialogueText
}
function getImageURL(index) {
    return dialogues.story[index].imageURL
}
function getDecisions(index) {
    return dialogues.story[index].decisions
}
function getSource(index) {
    return dialogues.story[index].source
}
function getDestination(index) {
    return dialogues.story[index].destination
}


  
function changeImage(imgLink) {
    if(!imgLink) {
        
    }
    else {
        document.body.style.backgroundImage = imgLink
    }
}

function showDialogueBox() {
    document.querySelector('.card-transparent').style.display = "block"
}


function startGame() {
    console.log(storyCount)
    header1.style.display = 'none'
    header2.style.display = 'none'
    portal.style.display = 'none'
    //changeImage(dialogues.story[storyCount].imageURL)
    //generateDialogue(dialogues.story[storyCount].characterName, dialogues.story[storyCount].dialogueText)

    // 1. Change image, dialogue text 
    changeImage(getImageURL(storyCount))
    generateDialogue(getCharacter(storyCount), getDialogueText(storyCount))
    showDialogueBox()
    showChoices(storyCount)
    // 2. Find source
    // 3. Find destination
    // 4. For every button click

}




function showChoices(num) {
    s = getSource(num)
    d = getDestination(num)

    if(d.length == 1) {
        document.querySelector('.button-group').innerHTML += 
        '<button onclick="'+ showChoices(num+1) +'" class="btn btn-outline-dark startbutton mt-auto">'+ getDecisions(num) +'</button>';
    }
    else {
        for(i = 0; i < d.length; i++) {
            for(j = 0; j < s.length; j++) {
                if(i == j) {
                    document.querySelector('.button-group').innerHTML += 
                    '<button onclick="'+ showChoices(i) +'" class="btn btn-outline-dark startbutton mt-auto">'+ getDecisions() +'</button>'; 
                }
            }
        }
    }
}



























function generateDialogue(characterName, dialogue) {
    characterHTML.innerHTML = characterName
    dialogueHTML.innerHTML = dialogue
    generateDecisions(dialogues.story[storyCount].decisions)
    showDialogueBox()
}

function storyProgressionCheck(amountAdded) {
    if(dialogues.story[storyCount].decisionCheck) {
        storyCount=storyCount+1
    }
    else {
        storyCount=storyCount+(decisions.length-amountAdded)
    }
}

function generateDecisions(decisions) {
    storyCount=storyCount+1
    document.querySelector('.button-group').innerHTML = ""
    if(decisions.length > 1) {
        for(i = 0; i < decisions.length; i++) {
            document.querySelector('.button-group').innerHTML += 
            '<button onclick="continueStory('+ i +')" class="btn btn-outline-dark startbutton mt-auto">'+ decisions[i] +'</button>';
        }
    }
    else {
        
        document.querySelector('.button-group').innerHTML += 
        '<button onclick="continueStory('+ storyCount +')" class="btn btn-outline-dark startbutton mt-auto">'+ decisions[storyCount] +'</button>';
    }
    
   
}

function continueStory() {
    changeImage(dialogues.story[storyCount+num].imageURL)
    generateDialogue(dialogues.story[storyCount+num].characterName, dialogues.story[storyCount+num].dialogueText)
}