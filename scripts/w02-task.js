/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Chris Vandermark';

let currentYear = (new Date()).getFullYear();

let profilePicture = 'images/profile.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

const imgElement = document.getElementsByTagName('img')[0];
/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imgElement.setAttribute('src', profilePicture);

imgElement.setAttribute('alt', `Profile image of ${fullName}`);
/* Step 5 - Array */
let favFoods = ['Cereal', 'Tacos', 'Pizza', 'Wendys', 'Chicken'];

foodElement.innerHTML = `<br> ${favFoods}`;

const bestFood = 'Ice Cream';

favFoods.push(bestFood);

foodElement.innerHTML += `<br> ${favFoods}`;

favFoods.shift();

foodElement.innerHTML += `<br> ${favFoods}`;

favFoods.pop();

foodElement.innerHTML += `<br> ${favFoods}`;