export function aboutLoad() {
    const h1 = document.createElement('h1');
    h1.textContent = 'About';
    const content = document.querySelector('#content');
    content.appendChild(h1);
}
