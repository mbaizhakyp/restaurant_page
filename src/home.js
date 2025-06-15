import restaurantPic from './images/restaurant_photo.jpg';
export function firstLoad() {
    const h1 = document.createElement('h1');
    h1.textContent = 'La Crêperie Belle';
    const content = document.querySelector('#content');
    content.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = `La Crêperie Belle serves the most delightful crêpes in town!
    The charming Parisian atmosphere and friendly service make you feel like you’ve stumbled into a cozy café on a quiet street in Montmartre.
    It’s the kind of place you’ll find yourself coming back to—whether for a sweet morning treat or a relaxing afternoon bite.`;
    content.appendChild(p);

    const img = document.createElement('img');
    img.src = restaurantPic;
    img.width = 700;
    content.appendChild(img);
}
