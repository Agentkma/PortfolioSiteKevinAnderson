import _ from 'lodash';
import './stylesheets/style.css';
import  fourOfour from './404.js';
import  about from './about.js';
import  contact from './contact.js';
import  error404 from './error404.js';
import  project from './project.js';
import  project01 from './project01.js';
import  project02 from './project02.js';
import  project03 from './project03.js';
import  project04 from './project04.js';
import  project05 from './project05.js';
import  thanks from './thanks.js';

  function component() {
    var element = document.createElement('div');


  // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
  }

  document.body.appendChild(component());
