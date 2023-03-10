import {saveanswers} from '../storage/storage.js';
import {ThankYou} from '../components/ThankYou.js';
import { missingField } from '../components/missingField.js';

export function submit_answer() {
    let id = 28;
    let survey = JSON.parse(localStorage.getItem(id));
    let answers = [];
    for( let question of survey.questions){
        if (question.question_type == 1){
            answers = submit_open(answers);
        }
        if (question.question_type == 2){
            answers = submit_closed(answers);
        }

        if (question.question_type == 3){
            answers = submit_multi(answers);
        }
    }
    console.log(answers);
    saveanswers(id, answers);
    ThankYou();
};


const submit_open = function(answers){
    let answer = document.getElementById(question.Qid);
    console.log(answer.value);
    if (answer.value == ''){
        missingField();
        return;
    }
    answers.push(answer.value);
    return answers;
};

const submit_closed = function(answers){
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
        return answers;
    }
};

const submit_multi = function(answers){
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
        return answers;
    }
};