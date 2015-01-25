
var quiz_questions = {
    1: {
        "question": "In Army of Darkness, the main character travels through time with several objects, which of the below items is NOT one of these items?",
        "options": {
            1: "A twelve-gauge double-barreled Remington",
            2: "A chemistry text book",
            3: "An S-Mart price gun",
            4: "An issue of Fangoria magazine",
            5: "An Oldmobile Delta 88"
        },
        "answer": 3
    },
    2: {
        "question": "Which of the below movies includes time travel as an element of the story?",
        "options": {
            1: "Once Upon a Time in America (1984)",
            2: "Nick of Time (1995)",
            3: "Same Time, Next Year (1978)",
            4: "Out of Time (1988)",
            5: "Wheel of Time (2003)"
        },
        "answer": 4
    },
    3: {
        "question": "Which of the below movies is animated?",
        "options": {
            1: "Galaxis (1995)",
            2: "The Girl Who Lept Through Time (2006)",
            3: "A Connecticut Yankee in King Arthur's Court (1949)",
            4: "New Adventures of a Yankee in King Arthur's Court (1988)",
            5: "G.I. Samurai (1979)"
        },
        "answer": 2
    },
    4: {
        "question": "How many gigawatts of electricity does it take for time travel in the Back to The Future movies?",
        "options": {
            1: "9.21",
            2: "1.81",
            3: "10.31",
            4: "1.21",
            5: "2.21"
        },
        "answer": 4
    },
    5: {
        "question": "Which of the following movies involves time travel without using a man-made device?",
        "options": {
            1: "About Time (2013)",
            2: "The Time Machine (1960)",
            3: "Source Code (2011)",
            4: "The Terminator (1984)",
            5: "Looper (2012)"
        },
        "answer": 1
    },
    6: {
        "question": "Which time travel movie involves a scene on the Titantic?",
        "options": {
            1: "Time After Time (1979)",
            2: "Time Bandits (1981)",
            3: "Time Travelers (1976)",
            4: "Star Trek IV: The Voyage Home (1986)",
            5: "Slipstream (2005)"
        },
        "answer": 2
    },
    7: {
        "question": "A Canadian 1989 time travel movie (originally titled, A Switch in Time) was re-titled to capitalize on the success of Bill &amp; Ted's Excellent Adventure. What was the movie's new title?",
        "options": {
            1: "Norman's Awesome Experience",
            2: "Jim &amp; Billy's Great Journey",
            3: "Bob's Outstanding Journey in Time",
            4: "Nathan's Big Adventure, You Hosers!",
            5: "Newf's Exceptional Escapade"
        },
        "answer": 1
    }
};

var count;
var score;
var prior_questions = [];

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

$(document).ready(function(){
    
    newGame();
    newQuestion();

    var stuff = quiz_questions[2]["question"];
    // console.log("testing...2. - "+stuff);
    $('#question').text(stuff);


});

function newGame(){
    count = 0;
    score = 0;
    console.log("Game Reset - score is "+score+"/"+count);
}

function newQuestion(){
    // var limit = quiz_questions.length;
    var limit = Object.size(quiz_questions);
    guess = Math.floor((Math.random() * limit) + 1);
    console.log("Grabbed #"+guess);


    prior_questions.push(guess);
    console.log("number of prev asked questions is " + prior_questions.length);


    for (var i=0; i>history.length; i++){
        console.log("Checking history length"+length.history);
        if (guess == history[i]) {
            console.log(i+": match found");
        } else {
            console.log(i+": no match found");
        }
    }

  
}
