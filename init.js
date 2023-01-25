import {savequestion, savesurvey, saveanswers} from './src/storage/storage.js';


export const mockSurvey1 = [
    {
        type: 1,
        question: "what is the weather?",
        options: []
    },
    {
        type: 1,
        question: "what is the day?",
        options: []
    },
    {
        type: 1,
        question: "what is the year?",
        options: []
    },
    {
        type: 2,
        question: "what is the capital city of Germany?",
        options: ['berlin', 'dresden', 'basel', 'sulam']
    },
    {
        type: 2,
        question: "what is the capital city of France?",
        options: ['berlin', 'Paris', 'basel', 'sulam']
    },
    {
        type: 2,
        question: "what is the capital city of Egypt?",
        options: ['berlin', 'Cairo', 'basel', 'sulam']
}   
];

export const mockSurvey2 = [
{
    type: 1,
    question: "explain what is energy?",
    options: []
},
{
    type: 2,
    question: "What is the boiling point of water?",
    options: ['0', '10', '100', '-100']
},
];

export const mockSurvey3 = [
    {
        type: 1,
        question: "what do you think about cars?",
        options: []
    },
    {
        type: 3,
        question: "which is your favorite brand?", 
        options: ['BMW', 'Mercedes', 'Volvo', 'Tesla']
    },
    {
        type: 2,
        question: "chose one model", 
        options: ['EV', 'Combustion engine', 'hybrid', 'Horse back riding']
    },
];
  /*
const function mockData(){

}*/

export function init_storage2(){
    for (let question of mockSurvey1){
        savequestion(question["type"], question["question"], question["options"]);
    }
    savesurvey('basic survey', 'Yazan');

    for (let question of mockSurvey2){
        savequestion(question["type"], question["question"], question["options"]);
    }
    savesurvey('Physics survey', 'Yazan');

    for (let question of mockSurvey3){
        savequestion(question["type"], question["question"], question["options"]);
    }
    savesurvey('Cars survey', 'Yazan');
}


export function init_storage(){
    
    let third_id = JSON.parse(localStorage.getItem("survies"))[2];
    console.log(third_id);
    saveanswers(third_id, ['whatever', [1, 2], 1]);
    saveanswers(third_id, ['whatever', [1, 2], 1]);
    saveanswers(third_id, ['whatever', [1, 2], 1]);
    saveanswers(third_id, ['whatever', [1, 2], 1]);
    saveanswers(third_id, ['whatever', [1, 4], 2]);
    saveanswers(third_id, ['whatever', [1, 4], 2]);
    saveanswers(third_id, ['whatever', [1, 4], 2]);
    saveanswers(third_id, ['whatever', [1, 4], 2]);
    saveanswers(third_id, ['whatever', [2, 4], 2]);
    saveanswers(third_id, ['whatever', [2, 4], 4]);
    saveanswers(third_id, ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, autem tenetur veritatis soluta laboriosam quisquam?', [2, 4], 4]);
    saveanswers(third_id, ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, autem tenetur veritatis soluta laboriosam quisquam?', [1], 4]);
    saveanswers(third_id, ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, autem tenetur veritatis soluta laboriosam quisquam?', [1], 4]);
    saveanswers(third_id, ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem delectus eos eligendi fugiat modi doloremque consequatur possimus quam quaerat!', [1, 4], 4]);
    saveanswers(third_id, ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos officiis quas sequi exercitationem similique ut voluptas, laboriosam dignissimos obcaecati sed at fugiat illum soluta dolor repudiandae, maxime omnis distinctio veniam. Deserunt tenetur ratione laudantium dolor eligendi est totam explicabo nesciunt.', [3], 3]);
    saveanswers(third_id, ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, autem tenetur veritatis soluta laboriosam quisquam?', [3], 3]);
    
    
    //for(let i = 0; i < 30; i++){
    //  savequestion(1, "mock question", []);
    //  savesurvey('mock survey ' + i, 'Yazan ' + (30 - i));
    //}
}



