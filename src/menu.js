import crepeSuzette from './images/crepe-suzette.jpg';
import crepeAmour from './images/crepe-amour.jpeg';
import alpineCrepe from './images/alpine-crepe.jpeg';
export function menuLoad() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    const content = document.querySelector('#content');
    content.appendChild(h1);

    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item'); // optional styling class

    menuItem1.innerHTML = `
  <img src="${crepeSuzette}" alt="Crepe Suzette" class="menu-img">
  <div class="menu-text">
    <h2>Crepe Suzette</h2>
    <p>Delicious French crepe with orange sauce and Grand Marnier.</p>
    <span class="price">$7.50</span>
  </div>
`;
    document.getElementById('content').appendChild(menuItem1);

    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item'); // optional styling class

    menuItem2.innerHTML = `
  <img src="${crepeAmour}" alt="Crepe Amour" class="menu-img">
  <div class="menu-text">
    <h2>Crepe Amour</h2>
    <p>Strawberries, whipped mascarpone, and dark chocolate in a vanilla crepe—topped with rose petals.</p>
    <span class="price">$8.25</span>
  </div>
`;
    document.getElementById('content').appendChild(menuItem2);

    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menu-item'); // optional styling class

    menuItem3.innerHTML = `
  <img src="${alpineCrepe}" alt="Alpine Crepe" class="menu-img">
  <div class="menu-text">
    <h2>Alpine Crepe</h2>
    <p>A warm buckwheat crepe filled with melted raclette cheese, caramelized onions, rosemary potatoes, and smoked ham—straight from the French Alps.</p>
    <span class="price">$9.00</span>
  </div>
`;
    document.getElementById('content').appendChild(menuItem3);
}
