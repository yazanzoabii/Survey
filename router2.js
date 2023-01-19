'use_strict';

import {load_create} from './src/pages/create.js';
import {display_surveys} from './src/pages/surveys.js';
import {delete_survey} from './src/storage/storage.js';
import {load_answer_survey} from './src/pages/answer.js';
import {home_screen} from './src/pages/home_screen.js';
import {survey_result} from './src/pages/results.js';
import {init_storage} from './init.js';
init_storage();

const urlRoutes = {
  404: {
      title: "404",
      description: ""
  },

  "/": {
      url: "/home",
      title: "Survey | Home",
      description: "",
      function: home_screen,
      //instance: new HomePage()

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
      dynamic: false
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

  "pagination-button": {
    title: "pagination",
    url: "/surveys/",
    description: "",
    function: display_surveys,
    dynamic: "True"
  },

};

let page = 1;

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
  if (cls_name == "pagination-button"){
    if(id == "next-button"){
      page += 1;
      id = page;
    }
    else{
      page -= 1;
      id = page
    }
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