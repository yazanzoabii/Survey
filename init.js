import {savequestion, savesurvey, saveanswers} from './src/storage/storage.js';


export const mockData = [
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
  ]

export function init_storage(){
    savequestion(1, "what is the weather?", []);
    savequestion(1, "what is the day?", []);
    savequestion(1, "what is the year?", []);
    savequestion(2, "what is the capital city of germany?", ['berlin', 'dresden', 'basel', 'sulam']);
    savequestion(2, "what is the capital city of France?", ['berlin', 'Paris', 'basel', 'sulam']);
    savequestion(2, "what is the capital city of Egypt?", ['berlin', 'Cairo', 'basel', 'sulam']);
    savesurvey('basic survey', 'Yazan');
    
    
    savequestion(1, "explain what is energy?", []);
    savequestion(2, "What is the boiling point of water?", ['0', '10', '100', '-100']);
    savesurvey('physics survey', 'Yazan');
    
    
    savequestion(1, "what do you think about cars?", []);
    savequestion(3, "which is your favorite brand?", ['BMW', 'Mercedes', 'Volvo', 'Tesla']);
    savequestion(2, "chose one model", ['EV', 'Combustion engine', 'hybrid', 'Horse back riding']);
    savesurvey('Cars survey', 'Yazan');
    
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



