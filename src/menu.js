export function menuLoad() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    const content = document.querySelector('#content');
    content.appendChild(h1);
}
