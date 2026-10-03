const baseUrl =
  'https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants';
fetch(`${baseUrl}/restaurants`)
  .then((response) => response.json())
  .then((restaurants) => {
    displayRestaurants(restaurants);
  })
  .catch((error) => {
    console.log(error);
  });

const displayRestaurants = (restaurants) => {
  const restaurantList = document.querySelector('#restaurantList');
  restaurants.forEach((restaurant) => {
    const row = document.createElement('tr');
    const {name, company} = restaurant;
    row.innerHTML = `
            <td>${name}</td>
            <td>${company}</td>
        `;
    row.addEventListener('click', () => {
      getMenu(restaurant);
    });
    restaurantList.appendChild(row);
  });
};

const getMenu = (restaurant) => {
  fetch(`${baseUrl}/restaurants/${restaurant._id}/daily`)
    .then((response) => response.json())
    .then((menu) => {
      showModal(restaurant, menu);
    })
    .catch((error) => {
      console.log(error);
    });
};

const showModal = (restaurant, menu) => {
  const modal = document.querySelector('#modal');
  modal.style.display = 'block';
  let menuHtml = '<ul>';
  menu.courses.forEach((course) => {
    menuHtml += `
            <li>
                ${course.name ? course.name : 'no name'}
                ${course.price ? course.price : '?€'}
                ${course.diets ? course.diets : 'no diet'}
            </li>
        `;
  });
  menuHtml += '</ul>';
  const {name, address, postalCode, city, phone, company} = restaurant;
  modal.innerHTML = `
        <h2>${name}</h2>
        <p>${address}, ${postalCode} ${city}</p>
        <p>${phone}</p>
        <p>${company}</p>
        <h3>Menu</h3>
        ${menuHtml}
    `;
};

const sodexoButton = document.querySelector('#sodexo');
const compassButton = document.querySelector('#compass');
const allButton = document.querySelector('#all');

sodexoButton.addEventListener('click', () => {
  const filteredRestaurants = restaurants.filter(
    (restaurant) => restaurant.company === 'Sodexo'
  );
  displayRestaurants(filteredRestaurants);
});

compassButton.addEventListener('click', () => {
  const filteredRestaurants = restaurants.filter(
    (restaurant) => restaurant.company === 'Compass Group'
  );
  displayRestaurants(filteredRestaurants);
});

allButton.addEventListener('click', () => {
  displayRestaurants(restaurants);
});
