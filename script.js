const photos = [
    {
        url: 'https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1666278379770-440439b08656?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
    {
        url: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
    {
        url: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
];

const section = document.getElementById('gallery');
const more_photos = document.getElementById('loadMore');
// filter buttons
const allButton = document.getElementById('all');
const cityButton = document.getElementById('city');
const natureButton = document.getElementById('nature');
const animalButton = document.getElementById('animals');
//filer classes
const all_photos = document.getElementsByClassName('all');
const city_photos = document.getElementsByClassName('city');
const nature_photos = document.getElementsByClassName('nature');
const animal_photos = document.getElementsByClassName('animals');
// photo counter
let total_photos_loaded = 0;

function loadFirstPhotos(gallery){
    for (let i = 0; i < 6; i++) {
        let image = new Image();
        image.src = gallery[i].url;
        section.appendChild(image);
        image.classList.add(gallery[i].type);
        image.classList.add('all');
    }
    total_photos_loaded = 6;
    console.log('first 6 photos loaded');
};

function morePhotos(gallery){
    for (let j = total_photos_loaded+1 ; j < total_photos_loaded+6; j++) {
        let image = new Image();
        image.src = gallery[j].url;
        section.appendChild(image);
        image.classList.add(gallery[j].type);
        image.classList.add('all');
    }
    total_photos_loaded = total_photos_loaded+6;
    console.log('6 more photos loaded');
};


function filterPhotos(keyword){
    for (let l = 0; l < all_photos.length; l++) {
        all_photos[l].style.display = 'none';
    };
    switch (keyword) {
        case 'city':
            for (let c = 0; c < city_photos.length; c++) {
                city_photos[c].style.display = 'inline-block';
            };
            break;
        case 'animals':
            for (let a = 0; a < animal_photos.length; a++) {
                animal_photos[a].style.display = 'inline-block';
            };
            break;
        case 'nature':
            for (let n = 0; n < nature_photos.length; n++) {;
                nature_photos[n].style.display = 'inline-block';
            };
            break;
        default:
            break;
    };
};


function showAllPhotos(){
    for (let l = 0; l < all_photos.length; l++) {
        all_photos[l].style.display = 'inline-block';
    };
};

section.addEventListener("load", loadFirstPhotos(photos));
more_photos.addEventListener("click", function photo(){morePhotos(photos)});
cityButton.addEventListener("click", function filter(){filterPhotos('city')});
natureButton.addEventListener("click", function filter(){filterPhotos('nature')});
animalButton.addEventListener("click", function filter(){filterPhotos('animals')});
allButton.addEventListener('click', function all(){showAllPhotos()});