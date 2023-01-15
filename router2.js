/*



currently not used.
currently not used.
currently not used.
currently not used.
currently not used.
currently not used.
currently not used.
v
currently not used.
v
v
currently not used.


*/











import {load_create} from './js/create.js';
import {display_surveys} from './js/surveys.js';
import {savequestion, savesurvey} from './js/survey_storage.js';
import {answer_survey} from './js/answer.js'
import {home_screen} from './js/home_screen.js'
import {survey_result} from './js/results.js'

const routes = [
    { path: '/', component: home_screen, },
    { path: '/create', component: load_create, },
    { path: '/surveys', component: display_surveys, },
  ];

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';
const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

const router = () => {
  // Find the component based on the current path
  const path = parseLocation();
  // If there's no matching route, get the "Error" component
  const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
  // TODO: Render the component in the "app" placeholder
  document.getElementById('app').innerHTML = component();
};
