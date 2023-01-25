import {Question, QuestionMulti, Questions, QuestionData, Survey, SurveyData} from './models.js'

//initialize the localstorage with empty data.
let emptyList = [];
let current_id = 0;
localStorage.setItem("current_id", current_id.toString());
localStorage.setItem("survies", JSON.stringify(emptyList));
let survey = new Survey();
let questions = new Questions();
localStorage.setItem("current_survey_questions", JSON.stringify(questions));
localStorage.setItem("current_survey", JSON.stringify(survey));

//when called it creates a new unseen id number for localstorage.
const getNewId = function() {
    let id = Number(localStorage.getItem("current_id"));
    id += 1;
    localStorage.setItem("current_id", id.toString());
    return id;
}

const storeSurvey = function(title, author) {
    let survey = JSON.parse(localStorage.getItem("current_survey"));
    let questions = JSON.parse(localStorage.getItem("current_survey_questions"));

    if (survey.num_questions === 0){
        console.log('empty survey');
        return;
    }

    //Names
    survey.name = title;
    survey.Author = author;
    survey.Date = Date().slice(0, 16);

    let id = getNewId();

    //create an instance for the answers data
    let Survey_answers = new SurveyData();

    for (let question of questions.Questions){
        let question_data = new QuestionData();
        if (question.question_type > 1){
            question_data.answers = [0, 0, 0, 0];
        }
        let question_data_id = getNewId();
        question_data.question_type = question.question_type;
        localStorage.setItem(question_data_id, JSON.stringify(question_data));
        Survey_answers.QuestionsData.push(question_data_id);
    }

    localStorage.setItem("answers_" + id, JSON.stringify(Survey_answers));
    
    let survies = JSON.parse(localStorage.getItem("survies"));
    survies.push(id);
    localStorage.setItem("questions_" + id, JSON.stringify(questions))
    localStorage.setItem("survies", JSON.stringify(survies));
    localStorage.setItem(id, JSON.stringify(survey));

    let new_survey = new Survey();
    let new_Questions = new Questions();
    localStorage.setItem("current_survey_questions", JSON.stringify(new_Questions));
    localStorage.setItem("current_survey", JSON.stringify(new_survey));
    console.log("stored");

}


//add a button here for deleting the the question
//display the added question to the screen
const display_question = function(text){
    console.log("displaying new question")
    let list_value = '<li class="added_questions_list"><h2> open question:  ' + text.slice(0, 20) + '...</h2></li>';
    const questionsList = document.getElementById('add_question_here');
    const listElement = document.getElementById('hidden');
    if (questionsList != null){
        questionsList.innerHTML += list_value;
    }
    if (listElement != null){
        listElement.style.display = "block";
    }
}


// add new question to a the current survey being built
const add_queston_to_current_survey = function(question_text, question_type, options){
    let Qid = getNewId();
    console.log(Qid);
    let newQuestion = null;
    if(question_type > 1){ //options
        newQuestion = new QuestionMulti(question_type, question_text, Qid, options);
    }
    else{
        newQuestion = new Question(question_type, question_text, Qid);
    }

    let current_survey = JSON.parse(localStorage.getItem("current_survey"));
    let current_survey_questions = JSON.parse(localStorage.getItem("current_survey_questions"));
    
    current_survey_questions.Questions.push(newQuestion);
    current_survey.num_questions += 1;//increase the number of the questions

    console.log(current_survey);
    localStorage.setItem("current_survey", JSON.stringify(current_survey));
    localStorage.setItem("current_survey_questions", JSON.stringify(current_survey_questions));

}



//functions below from here are exported to be used from outside.

//given an id and and answers this function saves the answers to the survey with the id given.
export function saveanswers(Sid, answer_data){
    let survey = JSON.parse(localStorage.getItem(Sid));
    let survey_answers = JSON.parse(localStorage.getItem("answers_" + Sid));
    let questionsData = survey_answers.QuestionsData;
    let i = 0;
    for (let question_data_id of questionsData){
        let question_data = JSON.parse(localStorage.getItem(question_data_id));
        if (question_data.question_type == 1){
            question_data.answers.push(answer_data[i]);
        }
        if (question_data.question_type == 2){
            question_data.answers[Number(answer_data[i]) - 1] += 1;
        }
        if (question_data.question_type == 3){
            console.log(answer_data);
            for (let option_check of answer_data[i]){
                question_data.answers[option_check - 1] += 1;
            }
        }
        i += 1;
        localStorage.setItem(question_data_id, JSON.stringify(question_data));
    }
    localStorage.setItem(survey.answers, JSON.stringify(survey_answers));
}


export function savequestion(q_type, text, options){
    add_queston_to_current_survey(text, q_type, options);
    display_question(text);
    console.log(q_type, text, options);
};


export function savesurvey(title, author){
    storeSurvey(title, author);
};


export function delete_survey(id){

    let survies = JSON.parse(localStorage.getItem("survies"));    
    let index = survies.indexOf(Number(id));
    if (index !== -1) {
        survies.splice(index, 1);//delete id from surveys array
    }
    localStorage.setItem("survies", JSON.stringify(survies));
    let survey = JSON.parse(localStorage.getItem(id));
    if (survey == null){//if survey already deleted return
        return;
    }

    let survey_data = JSON.parse(localStorage.getItem(survey.answers));
    for ( let question_data_id of survey_data.QuestionsData){//go through question's answers (question by question)
        localStorage.removeItem(question_data_id);//remove answers
    }
    localStorage.removeItem(survey.answers);

    let questions = JSON.parse(localStorage.getItem("questions_" + id));
    for ( let question_id of questions.Questions){
        localStorage.removeItem(question_id);
    }

    localStorage.removeItem(id);//remove survey
    document.getElementById(id).remove();//remove form screen

}