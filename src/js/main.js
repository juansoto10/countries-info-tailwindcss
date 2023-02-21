const body = document.querySelector('body')
const cardsSection = document.getElementById('cards');
const scrollUp = document.getElementById('scroll-up');

const select = document.getElementById('select');
select.addEventListener('change', filterByRegion);

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', filterByName);

localStorage.setItem('darkMode', true);

const toggleDarkMode = document.getElementById('dark-mode');
toggleDarkMode.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('darkMode', body.classList.contains('dark'));
})

const isDarkModeActive = JSON.parse(localStorage.getItem('darkMode'));

document.addEventListener('DOMContentLoaded', setColors);


function setColors() {
  if (isDarkModeActive) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
}

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});


function renderCountries(countries) {
  const toRender = [];

    for (let key of Object.keys(countries)) {
      const article = document.createElement('article');
      article.classList.add('bg-main', 'rounded-md', 'shadow-2xl', 'overflow-hidden', 'dark:bg-gray-800', 'dark:text-sec', 'transition', 'hover:scale-105', 'duration-300', 'ease-in-out');
      /* article.setAttribute('data-aos', 'fade-up'); */

      const a = document.createElement('a');
      

      const img = document.createElement('img');
      img.classList.add('h-40', 'lg:h-52', 'w-full', 'object-cover');
      img.src = `https://flagcdn.com/${key}.svg`;
      img.alt = countries[key]['name'];
      img.loading = 'lazy';

      const div = document.createElement('div');
      div.classList.add('px-6', 'py-5');

      const h2 = document.createElement('h2');
      h2.classList.add('font-bold', 'text-lg');
      const countryName = document.createTextNode(countries[key]['name']);
      h2.append(countryName);

      const ul = document.createElement('ul');
      ul.classList.add('py-3', 'text-sm', 'flex', 'flex-col', 'gap-1');

      const liCapital = document.createElement('li');
      const capital = countries[key]['capital'];
      liCapital.innerHTML = `<strong class="font-semibold">Capital:</strong> ${capital}`;

      const liPopulation = document.createElement('li');
      const population = countries[key]['population'];
      const formattedPopulation = population.toLocaleString()
      liPopulation.innerHTML = `<strong class="font-semibold">Population:</strong> ${formattedPopulation}`;

      const liRegion = document.createElement('li');
      const region = countries[key]['region'];
      liRegion.innerHTML = `<strong class="font-semibold">Region:</strong> ${region}`;

      ul.append(liCapital, liPopulation, liRegion);

      div.append(h2, ul);

      a.append(img, div);

      article.append(a);


      // Article.onclick

      const lowerCaseCountryName = countries[key]['name'].toLowerCase();
      const url = new URL('/country.html', window.location.href);
      url.searchParams.set('country', lowerCaseCountryName);

      a.href = url.toString();

      article.onclick = () => {
        window.location.href = url.toString();
      }

      toRender.push(article);
    }

    cardsSection.append(...toRender);
}

renderCountries(countries);


function filterByRegion() {
  const selectedRegion = select.value;
  cardsSection.innerHTML = '';

  const filteredCountries = {};

  if (selectedRegion === 'all') {
    renderCountries(countries)
  } else {
    Object.keys(countries).forEach(countryCode => {
      if (countries[countryCode]['region'].toLowerCase() === selectedRegion) {
        filteredCountries[countryCode] = countries[countryCode];
      }
    })
  }

  renderCountries(filteredCountries)
}


function filterByName() {
  const query = searchInput.value.trim().toLowerCase();
  const cards = document.querySelectorAll('article');

  cards.forEach(card => {
    const name = card.querySelector('h2').textContent.toLowerCase();
    const matchesQuery = name.includes(query);

    card.style.display = matchesQuery ? 'block' : 'none';
  });
}

/* filterByName(); */




/* const api = axios.create({
  baseURL: 'https://countryapi.io/api',
  headers: {
    'Authorization': 'Bearer wzboaEqfDeW6hyr5YAby9NvASkyAqQwLDVvull0N'
  }
})

async function getCountries() {
  try {
    const res = await api.get('/all');
    console.log(res);

    const unsortedCountries = res.data;

    const countries = {};

    Object.keys(unsortedCountries).sort().forEach(key => {
      countries[key] = unsortedCountries[key];
    })

    renderCountries(countries);
  }
  catch (error) {
    console.error(error);
  }
} */
