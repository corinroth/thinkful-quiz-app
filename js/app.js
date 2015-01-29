
var count = 0;
var score = 0;
var prior_questions = [];

function QuizQuestion(question_text,question_icon,possible_answers,correct_answer){
    
    this.question_text = question_text;
    this.question_icon = question_icon;
    this.possible_answers = possible_answers;
    this.correct_answer = correct_answer;

    this.question_prompt = function(num) {
        $('#question_heading').text("QUESTION #"+num);
        $('#question_text').text(this.question_text);
        $('#question_icon').text(this.question_icon);
        $('#possible_answers').text(this.question_text);
    }
    
    this.verify_answer = function(user_answer){
        if (user_answer == this.correct_answer) {
            return true;
        } else {
            return false;
        }
    }

}

var quiz_questions = {
    1: {
        "icon": "book",
        "question": "In the movie <strong>Army of Darkness (1992)</strong>, the main character travels through time with several objects, which of the below items is NOT one of these items?",
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
        "icon": "clock-o",
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
        "icon": "clock-o",
        "question": "Which of the following time travel movies is animated?",
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
        "icon": "clock-o",
        "question": "In the movie <strong>Back to the Future (1985)</strong>, how many gigawatts of electricity does it take to travel in time?",
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
        "icon": "male",
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
        "icon": "ship",
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
        "icon": "clock-o",
        "question": "The Canadian movie <strong>A Switch in Time (1989)</strong> was re-titled to capitalize on the success of <strong>Bill &amp; Ted's Excellent Adventure (1989)</strong>. What was the movie's new title?",
        "options": {
            1: "Norman's Awesome Experience",
            2: "Jim &amp; Billy's Great Journey",
            3: "Bob's Outstanding Journey in Time",
            4: "Nathan's Big Adventure, You Hosers!",
            5: "Newf's Exceptional Escapade"
        },
        "answer": 1
    },
    8: {
        "icon": "clock-o",
        "question": "In the movie <strong>Frequently Asked Questions About Time Travel (2009)</strong>, a giant version of what appears in the future?",
        "options": {
            1: "gerbel",
            2: "ferret",
            3: "ant",
            4: "caterpiller",
            5: "cockroach"
        },
        "answer": 3
    },
    9: {
        "icon": "clock-o",
        "question": "In the movie <strong>Back to the Future (1985)</strong>, what was did the DeLorean's license plate read?",
        "options": {
            1: "HGWELLS",
            2: "MCFLY1",
            3: "DRBROWN",
            4: "OUTATIME",
            5: "88MPH"
        },
        "answer": 4
    },
    10: {
        "icon": "clock-o",
        "question": "In Stephen King's novel <strong>11/22/63</strong>, what event does the main character go back in time to try to prevent?",
        "options": {
            1: "U.S. involvement in Vietnam",
            2: "The release of the Beatles first album",
            3: "The assasination of J.F.K.",
            4: "The Cuban Missle Crisis",
            5: "The Apollo moon landing"
        },
        "answer": 3
    }
};





Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function newGame(){
    count = 0;
    score = 0;
    var prior_questions = [];
    console.log("Game Reset - score is "+score+"/"+count);
}

function findQuestion(){
    var num = pickQuestion();
    while (wasAsked(num)) {
        num = pickQuestion();
    }
    return num;
}

function pickQuestion(){
    var limit = Object.size(quiz_questions);
    return Math.floor((Math.random() * limit) + 1)
}

function wasAsked(num){
    var result = false;
    for (var i=0;i<=prior_questions.length;i++){
        if (num == prior_questions[i]) {
            result = true;
        }
    }
    return result;
}

function loadQuestion(num) {
    prior_questions.push(num);    
    $('#icon').html("<i class=\"fa fa-"+quiz_questions[num]["icon"]+"\"></i>");
    $('#text').html(quiz_questions[num]["question"]);
    $('#option-1').html(quiz_questions[num]["options"][1]);
    $('#option-2').html(quiz_questions[num]["options"][2]);
    $('#option-3').html(quiz_questions[num]["options"][3]);
    $('#option-4').html(quiz_questions[num]["options"][4]);
    $('#option-5').html(quiz_questions[num]["options"][5]);
}

// document ready ...

$(document).ready(function(){
    
    $("#start-btn").click(function(){       
        var head = $("<span>The Time Travel Quiz</span>");
        $("h1").find("span").remove();
        $("h1").append(head);
        $("#start").fadeOut(600);        
        newGame();
        var num = findQuestion();
        loadQuestion(num);
        $("#quiz").fadeIn(800);
    });

    $("#answer-btn").click(function(){       
        var num = findQuestion();
        loadQuestion(num);
    });





});



