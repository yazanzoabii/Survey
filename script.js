import {router} from './router2.js';
import {init_storage_answers, init_storage_surveys} from './init.js';


init_storage_surveys();
init_storage_answers();

document.getElementById('nav_display_surveys').addEventListener('click', router);
document.getElementById('nav_create_survey').addEventListener('click', router);
window.addEventListener('popstate', router);

console.log("added event listener");

