import { firstLoad } from './home.js';
import { menuLoad } from './menu.js';
import { aboutLoad } from './about.js';
import './styles.css';
import crepePic from './images/crepe-photo.jpeg';

const tileWidth = window.innerWidth / 10;
const tileHeight = window.innerHeight / 10;
document.body.style.backgroundImage = `url(${crepePic})`;
document.body.style.backgroundRepeat = 'repeat';
document.body.style.backgroundSize = `${tileWidth}px ${tileHeight}px`;

firstLoad();

const homeBtn = document.querySelector('#home');
const content = document.querySelector('#content');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');
const clearContent = () => (content.innerHTML = '');

if (homeBtn && menuBtn && aboutBtn && content) {
    homeBtn.addEventListener('click', () => {
        console.log('home button pressed');
        clearContent();
        firstLoad();
    });

    menuBtn.addEventListener('click', () => {
        console.log('menu button pressed');
        clearContent();
        menuLoad();
    });

    aboutBtn.addEventListener('click', () => {
        console.log('about button pressed');
        clearContent();
        aboutLoad();
    });
} else {
    console.error('Missing DOM elements.');
}
