'use_strict';

import {load_create} from './src/pages/create.js';
import {display_surveys} from './src/pages/surveys.js';
import {savequestion, savesurvey, saveanswers, delete_survey} from './src/storage/storage.js';
import {load_answer_survey} from './src/pages/answer.js'
import {home_screen} from './src/pages/home_screen.js'
import {survey_result} from './src/pages/results.js'



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


saveanswers(28, ['whatever', [1, 2], 1]);
saveanswers(28, ['whatever', [1, 2], 1]);
saveanswers(28, ['whatever', [1, 2], 1]);
saveanswers(28, ['whatever', [1, 2], 1]);
saveanswers(28, ['whatever', [1, 4], 2]);
saveanswers(28, ['whatever', [1, 4], 2]);
saveanswers(28, ['whatever', [1, 4], 2]);
saveanswers(28, ['whatever', [1, 4], 2]);
saveanswers(28, ['whatever', [2, 4], 2]);
saveanswers(28, ['whatever', [2, 4], 4]);
saveanswers(28, ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, autem tenetur veritatis soluta laboriosam quisquam?', [2, 4], 4]);
saveanswers(28, ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, autem tenetur veritatis soluta laboriosam quisquam?', [1], 4]);
saveanswers(28, ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, autem tenetur veritatis soluta laboriosam quisquam?', [1], 4]);
saveanswers(28, ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem delectus eos eligendi fugiat modi doloremque consequatur possimus quam quaerat!', [1, 4], 4]);
saveanswers(28, ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos officiis quas sequi exercitationem similique ut voluptas, laboriosam dignissimos obcaecati sed at fugiat illum soluta dolor repudiandae, maxime omnis distinctio veniam. Deserunt tenetur ratione laudantium dolor eligendi est totam explicabo nesciunt.', [3], 3]);
saveanswers(28, ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, autem tenetur veritatis soluta laboriosam quisquam?', [3], 3]);




const urlRoutes = {
  404: {
      title: "404",
      description: ""
  },

  "/": {
      url: "/home",
      title: "Survey | Home",
      description: "",
      function: home_screen

  },
  
  "/index.html": {
      url: "/home",
      title: "Survey | Home",
      description: "",
      function: home_screen,
      dynamic: "False"
  },

  "nav_display_surveys": {
      url: "/surveys",
      title: "Survey | Home",
      description: "",
      function: display_surveys,
      dynamic: "False"
  },

  "nav_create_survey": {
      url: "/create",
      title: "Create",
      description: "Create your own survey",
      function: load_create,
      dynamic: "False"
  },

  "answer": {
    url: "/answer/",
    title: "Answer",
    description: "Answer a survey",
    function: load_answer_survey,
    dynamic: "True"
  },

  "results": {
    url: "/results/",
    title: "Results",
    description: "see the Results of a survey",
    function: survey_result,
    dynamic: "True"
  },

  "close": {
    title: "Delete",
    url: "/delete/",
    description: "see the Results of a survey",
    function: delete_survey,
    dynamic: "True"
  },

};


export function router(event){

  let cls_name = "/";
  let id = "0";
  if (event != undefined){
    cls_name = event.target.className;
    id = event.target.id;
    console.log(cls_name);
    console.log(id);
  }
  if (cls_name == 'nav__link'){
    cls_name = id;
  }
  console.log(cls_name);

  const route = urlRoutes[cls_name] || urlRoutes['/'];
  console.log(route);
  window.history.pushState({}, "", route.url);
  
  if (route.function != null){
    if (route.dynamic == "True"){
      window.history.pushState({}, "", route.url + id);
      route.function(id);
    }
    else{
      window.history.pushState({}, "", route.url);
      route.function();
    }
  }

};


router();