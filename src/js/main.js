const cardsSection = document.getElementById('cards');
const countrySection = document.getElementById('country');
const jsonText = document.getElementById('jsonText');

const api = axios.create({
  baseURL: 'https://countryapi.io/api',
  headers: {
    'Authorization': 'Bearer wzboaEqfDeW6hyr5YAby9NvASkyAqQwLDVvull0N'
  }
})

/* api.defaults.headers.common['Authorization'] = 'Bearer wzboaEqfDeW6hyr5YAby9NvASkyAqQwLDVvull0N'; */

/* const API_URL = 'https://countryapi.io/api/all';
const API_KEY = 'wzboaEqfDeW6hyr5YAby9NvASkyAqQwLDVvull0N'; */

// Endpoint by name:
// https://countryapi.io/api/name/austria

// Endpoint by region:
// https://countryapi.io/api/region/europe

// "Authorization: Bearer YOUR-APIKEY"

/* const config = {
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer wzboaEqfDeW6hyr5YAby9NvASkyAqQwLDVvull0N'
  }
}; */

async function getCountries() {
  try {
    const res = await api.get('/all');
    console.log(res);

    const unsortedCountries = res.data;

    const countries = {};

    Object.keys(unsortedCountries).sort().forEach(key => {
      countries[key] = unsortedCountries[key];
    })

    const toRender = [];

    for (let key of Object.keys(countries)) {
      const article = document.createElement('article');
      article.classList.add('bg-main', 'rounded-md', 'shadow-2xl', 'overflow-hidden', 'dark:bg-gray-800', 'dark:text-sec');

      const a = document.createElement('a');
      a.href = '/src/country.html';

      const img = document.createElement('img');
      img.classList.add('h-40', 'lg:h-52', 'w-full', 'object-cover');
      img.src = `https://flagcdn.com/${key}.svg`;

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

      // Get country
      /* article.onclick = getCountry(countryName); */

      toRender.push(article);
    }

    cardsSection.append(...toRender);
  }
  catch (error) {
    console.error(error);
  }
}


async function getCountry(name) {
  try {
    
  } catch (error) {
    console.error(error);
  }
}

getCountries();

// res.data => {ar:{}, co:{}}
// countries = res.data
// 
// name, population, region, capital





{/* <article class="pt-16 lg:grid lg:grid-cols-2 lg:gap-10 lg:pt-20 xl:gap-24">
  
  <img src="https://flagcdn.com/co.svg" alt="Colombia" class="shadow-md">

	<div class="pt-8 xl:flex xl:flex-col xl:justify-between xl:p-0">
    
    <div>

      <h2 class="font-bold text-lg lg:text-2xl">
        Colombia
      </h2>

	    <div class="sm:flex sm:justify-between">

        <ul class="pt-5 flex flex-col gap-1 xl:gap-2">
          
          <li>
            <strong class="font-semibold">Native Name:</strong>
			      Colombia
          </li>

		      <li>
            <strong class="font-semibold">Population:</strong>
			      50,882,884
          </li>

		      <li>
            <strong class="font-semibold">Region:</strong> Americas
          </li>

		      <li>
            <strong class="font-semibold">Sub Region:</strong> South America
          </li>

		      <li>
            <strong class="font-semibold">Capital:</strong> Bogotá
          </li>

        </ul>

	      <ul class="pt-10 flex flex-col gap-1 sm:pt-5 xl:gap-2">
          
          <li>
            <strong class="font-semibold">Area:</strong> 1,141,748 sq
          </li>

		      <li>
            <strong class="font-semibold">Top Level Domain:</strong> .co
          </li>

		      <li>
            <strong class="font-semibold">Currency:</strong>
			      Colombian peso ($)
          </li>

		      <li>
            <strong class="font-semibold">Language:</strong>
			      Spanish
          </li>

        </ul>

      </div>

    </div>

	  <div class="pt-10 sm:flex sm:items-center sm:flex-auto sm:gap-4 lg:pt-2">
      
      <h3 class="font-semibold">
        Border Countries:
      </h3>

	    <div class="flex items-center flex-wrap gap-4 py-5 text-sm ">
        <a href="/country/brazil" class="py-1 px-5 rounded shadow-2xl dark:bg-gray-800">
          Brazil
        </a>
        <a href="/country/ecuador" class="py-1 px-5 rounded shadow-2xl  dark:bg-gray-800">
          Ecuador
        </a>
        <a href="/country/panama" class="py-1 px-5 rounded shadow-2xl dark:bg-gray-800">
          Panama
        </a>
        <a href="/country/peru" class="py-1 px-5 rounded shadow-2xl dark:bg-gray-800">
          Peru
        </a>
        <a href="/country/venezuela" class="py-1 px-5 rounded shadow-2xl dark:bg-gray-800">
          Venezuela
        </a>
      </div>

    </div>

  </div>

</article> */}


// CARDS

{/* <article class="bg-main rounded-md shadow-2xl overflow-hidden dark:bg-gray-800 dark:text-sec">
  <a href="/src/country.html">
    <img src="https://flagcdn.com/co.svg" alt="" class="h-40 lg:h-52 w-full object-cover">

    <div class="px-6 py-5">
      <h2 class="font-bold text-lg">
        Colombia
      </h2>

      <ul class="py-3 text-sm flex flex-col gap-1">
        <li>
          <strong class="font-semibold">Population:</strong>
          50,882,884
        </li>
        <li>
          <strong class="font-semibold">Region:</strong> Americas
        </li>
        <li>
          <strong class="font-semibold">Capital:</strong> Bogotá
        </li>
      </ul>
    </div>
  </a>
</article> */}


// Country view


// Create the article element and the other tags and then add the classes like this:

/* article.classList.add('pt-16', 'lg:grid', 'lg:grid-cols-2', 'lg:gap-10', 'lg:pt-20', 'xl:gap-24'); */

/*
const article = document.createElement('article');
article.classList.add('pt-16', 'lg:grid', 'lg:grid-cols-2', 'lg:gap-10', 'lg:pt-20', 'xl:gap-24');

const img = document.createElement('img');
img.classList.add('shadow-md');
// colocar la scr de la imagen y el alt como el nombre del país
img.src = '';
img.alt = '';

const mainDiv = document.createElement('div');
mainDiv.classList.add('pt-8', 'xl:flex', 'xl:flex-col', 'xl:justify-between', 'xl:p-0');

*/
