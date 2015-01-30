

var num = 0;
var count = 0;
var score = 0;
var prior_questions = [];

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
        "icon": "life-ring",
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
            4: "Nathan's Big Adventure, Ya Hosers!",
            5: "The Newf's Exceptional Escapade"
        },
        "answer": 1
    },
    8: {
        "icon": "beer",
        "question": "In the movie <strong>Frequently Asked Questions About Time Travel (2009)</strong>, a giant version of what appears outside the pub in the future?",
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
        "icon": "car",
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
        "icon": "calendar",
        "question": "In Stephen King's novel <strong>11/22/63</strong>, what event does the main character go back in time to try to prevent?",
        "options": {
            1: "U.S. involvement in Vietnam",
            2: "The release of the Beatles first album",
            3: "The assasination of J.F.K.",
            4: "The Cuban Missle Crisis",
            5: "The Apollo moon landing"
        },
        "answer": 3
    },
    11: {
        "icon": "music",
        "question": "In the television show <strong>Life on Mars (UK 2006 &ndash; 2007)</strong>, what modern song does the main character hear that makes him think his 1970s reality might all be in his head?",
        "options": {
            1: "Boulevard Of Broken Dreams by Green Day",
            2: "Hey Ya! by OutKast",
            3: "Crazy by Gnarls Barkley",
            4: "Toxic by Brittney Spears",
            5: "Clocks by Coldplay"
        },
        "answer": 4
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
    num = 0;
    count = 0;
    score = 0;
    prior_questions = [];
    console.log("game reset!");
}
function findQuestion(){
    pickQuestion();
    while (wasAsked()) {
        pickQuestion();
    }
}
function pickQuestion(){
    var limit = Object.size(quiz_questions);
    num = Math.floor((Math.random() * limit) + 1)
}
function wasAsked(){
    var result = false;
    for (var i=0;i<=prior_questions.length;i++){
        if (num == prior_questions[i]) {
            result = true;
        }
    }
    return result;
}
function loadQuestion() {
    prior_questions.push(num);    
    $('#icon').html("<i class=\"fa fa-"+quiz_questions[num]["icon"]+"\"></i>");
    $('#text').html(quiz_questions[num]["question"]);
    $('#option-1').html(quiz_questions[num]["options"][1]);
    $('#option-2').html(quiz_questions[num]["options"][2]);
    $('#option-3').html(quiz_questions[num]["options"][3]);
    $('#option-4').html(quiz_questions[num]["options"][4]);
    $('#option-5').html(quiz_questions[num]["options"][5]);
    count++;
    $('#progress').text(count+"/10");
}
function correct() {

    // gather actual user input and set var

    var user_answer = 3;
    if (user_answer == quiz_questions[num]["answer"]) {
        return true;
    } else {
        return false;
    }
}



$(document).ready(function(){
    
    $("#start-btn").click(function(){       
        var head = $("<span>The Time Travel Quiz</span>");
        $("h1").find("span").remove();
        $("h1").append(head);
        $("#start").fadeOut(600);        
        newGame();
        findQuestion();
        loadQuestion();
        $("#quiz").fadeIn(800);
    });

    $("#answer-btn").click(function(){       

        // check if selection is blank

        if (correct()) {
            $('#quiz').fadeOut(400);
            $('#correct').fadeIn(800);
            score++;
        } else {
            $('#wrong').fadeIn(800);
            $('#quiz').fadeOut(800);
        }
    });

    $(".next-btn").click(function(){       
        $('#correct').fadeOut(800);
        $('#wrong').fadeOut(800);
        findQuestion();
        loadQuestion(num);
        $('form input').prop('checked', false);
        $('#quiz').fadeIn(800);
    });



});



