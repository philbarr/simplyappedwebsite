import _ from 'lodash';
import '../css/index.css'
import myimg from '../img/simplyappedlogo.svg'

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = myimg;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());