import { displyQuestionResult } from "./../components/displayQuestionResult.js";


export function survey_result(id){
    console.log("this is the result");

    document.getElementById("section--1").innerHTML = '<div></div>';

    document.createElement('section');
    let survey = JSON.parse(localStorage.getItem(id));
    let h1 = document.createElement('h1');
    let h3 = document.createElement('h3');
    h1.textContent = survey.name;
    h3.textContent = 'by: ' + survey.Author;
    document.getElementById("section--1").appendChild(h1);
    document.getElementById("section--1").appendChild(h3);
    let survey_data = JSON.parse(localStorage.getItem("answers_" + id));
    let questions = JSON.parse(localStorage.getItem("questions_" + id));
    console.log(questions);
    let i = 0;

    for (let question_data_id of survey_data.QuestionsData){
        let question = questions.Questions[i];
        i += 1;
        let question_data = JSON.parse(localStorage.getItem(question_data_id));
        displyQuestionResult(question_data.question_type, question_data.answers, i, question);
    }
}

