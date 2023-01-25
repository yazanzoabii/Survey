import {router} from './router2.js';
import {init_storage, init_storage2} from './init.js';


init_storage2();
init_storage();
document.getElementById('nav_display_surveys').addEventListener('click', router);
document.getElementById('nav_create_survey').addEventListener('click', router);
window.addEventListener('popstate', router);

console.log("added event listener");

