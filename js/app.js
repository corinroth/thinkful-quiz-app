
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

var count = 0;
var score = 0;
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

    var stuff = quiz_questions[6]["question"];
    // console.log("testing...2. - "+stuff);
    $('#question > #count').text("QUESTION "+count);
    $('#question > #text').text(stuff);


});

function newGame(){
    count = 0;
    score = 0;
    var prior_questions = [];
    console.log("Game Reset - score is "+score+"/"+count);
}
function newQuestion(){
    prior_questions.push(2);
    prior_questions.push(4);
    var num = pick();
    while (asked(num)) {
        num = pick();
    }
    // prior_questions.push(num);
}
function pick(){
    var limit = Object.size(quiz_questions);
    return Math.floor((Math.random() * limit) + 1)
}
function asked(num){
    var result = false;
    for (var i=0;i<=prior_questions.length;i++){
        if (num == prior_questions[i]) {
            result = true;
        }
    }
    return result;
}