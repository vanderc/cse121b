/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Chris Vandermark',
    photo: 'images/profile.png',
    favoriteFoods: [
        'Cereal',
        'Tacos',
        'Pizza',
        'Wendys',
        'Chicken'
    ],
    hobbies: [
        'volleyball',
        'video games',
        'watching movies'
    ],
    placesLived: [],
};

myProfile.placesLived.push(
    {
        place: 'Santa Clarita, CA' ,
        length: '23 years'
    },
    {
        place: 'Houston, TX' ,
        length: '2 years'
    }
)



/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
let imageElement = document.querySelector('img');
imageElement.setAttribute('src', myProfile.photo);
imageElement.setAttribute('alt', `placeholder for ${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let ul = document.createElement('ul');
    ul.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(ul);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
})

