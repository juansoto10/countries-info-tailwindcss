const cardsSection = document.getElementById('cards');
const countrySection = document.getElementById('country');
const jsonText = document.getElementById('jsonText');


const api = axios.create({
  baseURL: 'https://countryapi.io/api',
  headers: {
    'Authorization': 'Bearer wzboaEqfDeW6hyr5YAby9NvASkyAqQwLDVvull0N'
  }
})

/* const countries = {}; */

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
      

      const img = document.createElement('img');
      img.classList.add('h-40', 'lg:h-52', 'w-full', 'object-cover');
      img.src = `https://flagcdn.com/${key}.svg`;
      img.alt = countries[key]['name'];

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

      const lowerCaseCountryName = countries[key]['name'].toLowerCase();
      /* console.log(lowerCaseCountryName); */
      const url = new URL('/src/country.html', window.location.href);
      url.searchParams.set('country', lowerCaseCountryName);

      a.href = url.toString();

      article.onclick = () => {
        /* window.open('/src/country.html'); */
        
        window.location.href = url.toString();
        /* getCountry(lowerCaseCountryName); */
      }

      toRender.push(article);
    }

    cardsSection.append(...toRender);
  }
  catch (error) {
    console.error(error);
  }
}


/* getCountries(); */

async function getCountry(name) {
  try {
    const res = await api.get(`/name/${name}`);
    console.log(res);

    country = res.data;

    for (let key of Object.keys(country)) {
      const article = document.createElement('article');
      article.classList.add('pt-16', 'lg:grid', 'lg:grid-cols-2', 'lg:gap-10', 'lg:pt-20', 'xl:gap-24');

      const img = document.createElement('img');
      img.classList.add('shadow-md');
      // colocar la scr de la imagen y el alt como el nombre del país
      img.src = `https://flagcdn.com/${key}.svg`;
      img.alt = country[key]['name'];

      const mainDiv = document.createElement('div');
      mainDiv.classList.add('pt-8', 'xl:flex', 'xl:flex-col', 'xl:justify-between', 'xl:p-0');

      const secDiv1 = document.createElement('div');

      const h2 = document.createElement('h2');
      h2.classList.add('font-bold', 'text-lg', 'lg:text-2xl');
      const countryName = document.createTextNode(country[key]['name']);
      h2.append(countryName);

      const thirdDiv1 = document.createElement('div');
      thirdDiv1.classList.add('sm:flex', 'sm:justify-between');

      const ul1 = document.createElement('ul');
      ul1.classList.add('pt-5', 'flex', 'flex-col', 'gap-1', 'xl:gap-2')
      
      const liOfficialName = document.createElement('li');
      const officialName = country[key]['official_name'];
      liOfficialName.innerHTML = `<strong class="font-semibold">Official Name:</strong> ${officialName}`

      const liPopulation = document.createElement('li');
      const population = country[key]['population'];
      liPopulation.innerHTML = `<strong class="font-semibold">Population:</strong> ${population}`

      const liRegion = document.createElement('li');
      const region = country[key]['region'];
      liRegion.innerHTML = `<strong class="font-semibold">Region:</strong> ${region}`

      const liSubRegion = document.createElement('li');
      const subRegion = country[key]['subregion'];
      liSubRegion.innerHTML = `<strong class="font-semibold">Sub Region:</strong> ${subRegion}`

      const liCapital = document.createElement('li');
      const capital = country[key]['capital'];
      liCapital.innerHTML = `<strong class="font-semibold">Capital:</strong> ${capital}`;

      ul1.append(liOfficialName, liPopulation, liRegion, liSubRegion, liCapital);


      const ul2 = document.createElement('ul');
      ul2.classList.add('pt-10', 'flex', 'flex-col', 'gap-1', 'sm:pt-5', 'xl:gap-2');

      const liArea = document.createElement('li');
      const area = country[key]['area'];
      liArea.innerHTML = `<strong class="font-semibold">Area:</strong> ${area} m2`;

      const liTopLevelDomain = document.createElement('li');
      const topLevelDomain = country[key]['topLevelDomain'];
      liTopLevelDomain.innerHTML = `<strong class="font-semibold">Top Level Domain:</strong> ${topLevelDomain}`;

      const liCurrency = document.createElement('li');
      const currencies = country[key]['currencies'];

      for (let curr of Object.keys(currencies)) {
        for (let key of Object.keys(curr)) {
          let currency = '';
          currency += curr[key] + ' ';
        }
      }
      liCurrency.innerHTML = `<strong class="font-semibold">Currency:</strong> ${currency}`;

      const liLanguage = document.createElement('li');
      const languages = country[key]['languages'];

      for (let lang of Object.keys(languages)) {
        let language = '';
        language += languages[lang] + ', '
      }
      liLanguage.innerHTML = `<strong class="font-semibold">Language:</strong> ${language}`;

      const liCallingCode = document.createElement('li');
      const callingCode = country[key]['callingCode'];
      liCallingCode.innerHTML = `<strong class="font-semibold">Calling Code:</strong> ${callingCode}`;

      ul2.append(liArea, liTopLevelDomain, liCurrency, liLanguage, liCallingCode);


      thirdDiv1.append(ul1, ul2);
      secDiv1.append(h2, thirdDiv1);


      const secDiv2 = document.createElement('div');
      secDiv2.classList.add('pt-10', 'sm:flex', 'sm:items-center', 'sm:flex-auto', 'sm:gap-4', 'lg:pt-2');

      const h3 = document.createElement('h3');
      h3.classList.add('font-semibold');
      const h3Text = document.createTextNode('Border Countries:');
      h3.append(h3Text);

      const thirdDiv2 = document.createElement('div');
      thirdDiv2.classList.add('flex', 'items-center', 'flex-wrap', 'gap-4', 'py-5', 'text-sm')

      const borderCountries = country[key]['borders']
      borderCountries.forEach(border => {
        const a = document.createElement('a');
        a.classList.add('py-1', 'px-5', 'rounded shadow-2xl', 'dark:bg-gray-800');
        a.href = '/src/country.html';
        borderText = document.createTextNode('lala');
        a.append(borderText);

        thirdDiv2.append(a);
      })

      secDiv2.append(h3, thirdDiv2);
      mainDiv.append(secDiv1, secDiv2);

      article.append(img, mainDiv);

      countrySection.append(article);
    }
  } catch (error) {
    console.error(error);
  }
}

/* getCountries(); */


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

	    <div class="flex items-center flex-wrap gap-4 py-5 text-sm">
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
