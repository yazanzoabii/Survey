import {saveanswers} from '../storage/storage.js';
import {ThankYou} from '../components/ThankYou.js';
import { missingField } from '../components/missingField.js';
import {AnswerTemplateOpen, AnswerTemplateClosed, AnswerTemplateMulti} from './answerModels.js'

export function load_answer_survey(id){
    
    let section = document.createElement('section');
    let questions = JSON.parse(localStorage.getItem("questions_" + id));
    let survey = JSON.parse(localStorage.getItem(id));

    section = displayTitles(section, survey);
    let i = 1;
    for (let question of questions.Questions){
        let AnswerTemplate = null;
        if (question.question_type == 1){
            AnswerTemplate = new AnswerTemplateOpen(section, null, question);
        }
        if (question.question_type == 2){
            AnswerTemplate = new AnswerTemplateClosed(section, null, question);
        }
        if (question.question_type == 3){
            AnswerTemplate = new AnswerTemplateMulti(section, null, question);
        }
        AnswerTemplate.render();
        i += 1;
    }

    section = addSubmitButton(section, survey, id);

    document.getElementById("section--1").innerHTML = '<div></div>';
    document.getElementById("section--1").appendChild(section);
}


const displayTitles = function(section, survey){
    let h1 = document.createElement('h1');
    let h3 = document.createElement('h3');
    h1.textContent = survey.name;
    h3.textContent = "by: " + survey.Author;
    section.appendChild(h1);
    section.appendChild(h3);
    return section;
}

const addSubmitButton = function(section, survey, id){
    let ans_btn = document.createElement('button');
    ans_btn.className = 'btn btn_submit_answer';
    ans_btn.textContent = 'Submit!';
    ans_btn.id = survey.name;

    ans_btn.addEventListener('click', () => {
        submit_answer(id);
    });

    section.appendChild(ans_btn);
    return section;
}



export function submit_answer(id) {

    let questions = JSON.parse(localStorage.getItem("questions_" + id));
    let answers = [];
    for( let question of questions.Questions){
        if (question.question_type == 1){
            let answer = document.getElementById(question.Qid);
            console.log(answer.value);
            if (answer.value == ''){
                missingField();
                return;
            }
            answers.push(answer.value);
        }
        if (question.question_type == 2){
            let choices = document.getElementsByName(question.question);
            let radio_answer = '';
            for (let choice of choices){
                if (choice.checked){
                    radio_answer = choice.opt;
                    //answers[Number(choice.opt) - 1] += 1
                    console.log(choice.value);
                    break;
                }
            }
            if (radio_answer == ''){
                missingField();
                return;
            }
            else {
                console.log(radio_answer);
                answers.push(radio_answer);
            }
        }

        if (question.question_type == 3){
            let choices = document.getElementsByName(question.question);
            let radio_answer = [0, 0, 0, 0];
            for (let choice of choices){
                if (choice.checked){
                    //radio_answer.push(choice.opt);
                    radio_answer[Number(choice.opt) - 1] += 1;
                    //answers.push(choice.opt)
                    console.log(choice.value);
                }
            }
            if (radio_answer == []){
                missingField();
                return;
            }
            else {
                console.log(radio_answer);
                answers.push(radio_answer);
            }
        }
    }
    console.log(answers);
    saveanswers(id, answers);
    ThankYou();
}
