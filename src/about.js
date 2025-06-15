export function aboutLoad() {
    const content = document.querySelector('#content');
    content.innerHTML = ''; // Clear previous content

    const h1 = document.createElement('h1');
    h1.textContent = 'About';

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    aboutContainer.innerHTML = `
    <p>
      Welcome to <strong>La Crêperie</strong>, where every crepe is made with love, tradition, and a dash of creativity.
      Nestled in the heart of the city, we bring a taste of Paris to your plate—whether you’re craving a sweet indulgence
      or a savory delight.
    </p>
    <p>
      Our recipes are inspired by classic French cuisine, but we’re not afraid to experiment with modern flavors and
      seasonal ingredients. From the fiery Alpine Crepe to the romantic Crepe Amour, there's something here for everyone.
    </p>
    <p>
      Founded in 2025 by a pair of travel-loving foodies, La Crêperie is more than a restaurant—it's a cozy corner of France,
      right around the corner. Bon appétit!
    </p>
  `;

    content.appendChild(h1);
    content.appendChild(aboutContainer);
}
