const questions = [
    {
        question: "Capital Of New York?  <br> <br>Hint: The first civilian european settlement in New York State settled by fur trading Dutch colonists",
        optionA: "New York City",
        optionB: "Buffalo",
        optionC: "Rochester",
        optionD: "Albany",
        correctOption: "optionD",
        
    },

    {
        question: "Capital Of Colorado ? <br><br> Hint: Also known as the Mile High City ",
        optionA: "Boulder",
        optionB: "Denver",
        optionC: "Colorado Springs",
        optionD: "Aspen",
        correctOption: "optionB"
    },

    {
        question: "Capital of Arizona ? <br><br> Hint: is the largest U.S. city which also serves as a state capital",
        optionA: "Tucson",
        optionB: "Sedona",
        optionC: "Grand Canyon Village",
        optionD: " Phoenix",
        correctOption: "optionD"
    },

    {
        question: "Capital of Texas ? <br><br> Hint:Telsa is moving it's headquaters here",
        optionA: "Houston",
        optionB: "Dallas",
        optionC: "Austin",
        optionD: "Fort Worth",
        correctOption: "optionC"
    },

    {
        question: "Capital of Pennsylvania ? <br><br> Hint: It hosts North Americas biggest auto show featuring new and classic cars",
        optionA: "Philadelphia",
        optionB: "Allentown",
        optionC: "Pittsburgh",
        optionD: "Harrisburg",
        correctOption: "optionD"
    },

    {
        question: "Capital of Wisconsin? <br><br> Hint: Named the greenest city in Wisconsin",
        optionA: "Madison",
        optionB: "Milwaukee",
        optionC: "Wisconsin Dells",
        optionD: "Waukesha",
        correctOption: "optionA"
    },

    {
        question: "Capital of Iowa ? <br> <br>Hint: Popular name Hartford of the West  ",
        optionA: "Ames",
        optionB: "Iowa City",
        optionC: "Des Moines",
        optionD: "Cedar Rapids",
        correctOption: "optionC"
    },

    {
        question: "Capital of Massachusetts ? <br><br> Hint:Known for famous baked beans",
        optionA: "Boston",
        optionB: "Cambridge",
        optionC: "Amherst",
        optionD: "Salem",
        correctOption: "optionA"
    },

    {
        question: "Capital of Maryland ? <br> <br>Hint: The Treaty of Paris, ending the Revolutionary War, was signed here",
        optionA: "Chestertown",
        optionB: "Baltimore",
        optionC: "Ocean City",
        optionD: "Annapolis",
        correctOption: "optionD"
    },

    {
        question: "Capital of Virginia ? <br> <br> Hint:St. John's Church is located here ",
        optionA: "Charlottesville",
        optionB: "Virginia Beach",
        optionC: "Suffolk",
        optionD: " Richmond",
        correctOption: "optionD"
    },

    {
        question: "Capital of Tennessee ? <br><br> Hint: Known as the Music City",
        optionA: "Memphis",
        optionB: "Knoxville",
        optionC: "Nashville",
        optionD: "Clarksville",
        correctOption: "optionC"
    },

    {
        question: "Capital of New Jersey ? <br> <br>Hint: It was the location of the first reading of the Declaration of Independence",
        optionA: "Trenton",
        optionB: "Newark",
        optionC: "Jersey City",
        optionD: "Atlantic City",
        correctOption: "optionA"
    },


    {
        question: "Capital of Utah ?<br><br> Hint: World first KFC is here ",
        optionA: "Cedar City",
        optionB: " Salt Lake City",
        optionC: "West Valley City",
        optionD: "Park City",
        correctOption: "optionB"
    },

    {
        question: "Captal of Nevada ? ",
        optionA: "Reno",
        optionB: "Las Vegas",
        optionC: "Henderson",
        optionD: "Carson City",
        correctOption: "optionD"
    },

    {
        question: "Capital of New Mexico? <br><br> Hint: Also known as The City Different",
        optionA: " Santa Fe",
        optionB: "Las Cruces",
        optionC: "Albuquerque",
        optionD: "Taos",
        correctOption: "optionA"
    },

    {
        question: "Capital of Washington?",
        optionA: "Tacoma",
        optionB: "Seattle",
        optionC: "Olympia",
        optionD: "Vancouver",
        correctOption: "optionC"
    },

    {
        question: "Capital of Michigan?",
        optionA: "Lansing",
        optionB: "Detroit",
        optionC: "Grand Rapids",
        optionD: "Ann Arbor",
        correctOption: "optionA"
    },


    {
        question: " Capital of Louisiana ? ",
        optionA: "Lake Charles",
        optionB: "New Orleans",
        optionC: "Baton Rouge",
        optionD: "Lafayette",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] 

function handleQuestions() { 
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0 

function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber]
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
           
            correctOption = option.labels[0].id
        }
    })

    
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "SeaGreen"
            playerScore++ 
            indexNumber++ 
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "SeaGreen"
            wrongAttempt++ 
            indexNumber++
            
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



function handleNextQuestion() {
    checkForAnswer() 
    unCheckRadioButtons()
    
    setTimeout(() => {
        if (indexNumber <= 9) {

            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}


function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}


function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


function handleEndGame() {
    let remark = null
    let remarkColor = null

    
    if (playerScore <= 3) {
        remark = "Better Luck Next Time ! Keep Practicing"
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Good ! You can do better"
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep up the good work"
        remarkColor = "SeaGreen"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}

