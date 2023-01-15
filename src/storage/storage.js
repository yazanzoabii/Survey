import {Question, QuestionData, Survey, SurveyData} from './models.js'


let emptyList = [];
let current_id = 0;
localStorage.setItem("current_id", current_id.toString());
localStorage.setItem("survies", JSON.stringify(emptyList));
let survey = new Survey();
//survey.questions = [];
localStorage.setItem("current_survey", JSON.stringify(survey));


const getNewId = function() {
    let id = Number(localStorage.getItem("current_id"));
    id += 1;
    localStorage.setItem("current_id", id.toString());
    return id;
}

const storeSurvey = function(survey, title, author) {
    
    survey.name = title;
    survey.Author = author;

    let Survey_answers = new SurveyData();


    let Survey_answers_id = getNewId();
    for (let question of survey.questions){
        let question_data = new QuestionData();
        if (question_data.question_type > 1){
            question_data.answers = [0, 0, 0, 0];
        }
        let question_data_id = getNewId();
        question_data.question_type = question.question_type;
        localStorage.setItem(question_data_id, JSON.stringify(question_data));
        Survey_answers.QuestionsData.push(question_data_id);
    }

    localStorage.setItem(Survey_answers_id, JSON.stringify(Survey_answers));
    survey.answers = Survey_answers_id;

    if (survey.num_questions === 0){
        console.log('empty survey');
        return;
    }
    let id = getNewId();
    let survies = JSON.parse(localStorage.getItem("survies"));
    survies.push(id);
    console.log(survies);
    
    localStorage.setItem("survies", JSON.stringify(survies));
    localStorage.setItem(id, JSON.stringify(survey));

    let new_survey = new Survey();
    localStorage.setItem("current_survey", JSON.stringify(new_survey));
    console.log("stored");
}


//add a button here for deleting the the question
const display_question = function(text){
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


const add_queston_to_current_survey = function(question_text, question_type, options){
    let Qid = getNewId();
    console.log(Qid);
    let newQuestion = new Question(question_type, question_text, Qid);
    let current_survey = JSON.parse(localStorage.getItem("current_survey"));
    current_survey.num_questions += 1;
    if(question_type > 1){
        newQuestion.options = options;
    }
    current_survey.questions.push(newQuestion);
    console.log(current_survey);
    localStorage.setItem("current_survey", JSON.stringify(current_survey));
}

            
export function saveanswers(Sid, answer_data){
    let survey = JSON.parse(localStorage.getItem(Sid));
    let survey_answers = JSON.parse(localStorage.getItem(survey.answers));
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
    storeSurvey(JSON.parse(localStorage.getItem("current_survey")), title, author);
};