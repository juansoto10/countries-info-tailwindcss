const body = document.querySelector('body');
const countrySection = document.getElementById('country');

const params = new URLSearchParams(window.location.search);
const selectedCountry = params.get('country');


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


function getCountryInfo(countryName, countries) {
  for (let countryCode of Object.keys(countries)) {
    const country = countries[countryCode];
    
    if (country['name'].toLowerCase() === countryName) {
      return country;
    }
  }
}


function getBorderCountryName(alpha3Code) {
  for (let countryCode of Object.keys(countries)) {
    const country = countries[countryCode]
    if (country['alpha3Code'] === alpha3Code) {
      return country['name']
    }
  }
}


function renderCountry(countryName) {
  const country = getCountryInfo(countryName, countries)
  const article = document.createElement('article');
      
  article.classList.add('pt-16', 'lg:grid', 'lg:grid-cols-2', 'lg:gap-10', 'lg:pt-20', 'xl:gap-24');

  const img = document.createElement('img');
  img.classList.add('shadow-md');
  const alpha2Code = country['alpha2Code'].toLowerCase();
  img.src = `https://flagcdn.com/${alpha2Code}.svg`;
  img.alt = country['name'];

  const mainDiv = document.createElement('div');
  mainDiv.classList.add('pt-8', 'xl:flex', 'xl:flex-col', 'xl:justify-between', 'xl:p-0');

  const secDiv1 = document.createElement('div');

  const h2 = document.createElement('h2');
  h2.classList.add('font-bold', 'text-lg', 'lg:text-2xl');
  const name = document.createTextNode(country['name']);
  h2.append(name);

  const thirdDiv1 = document.createElement('div');
  thirdDiv1.classList.add('sm:flex', 'sm:justify-between');

  const ul1 = document.createElement('ul');
  ul1.classList.add('pt-5', 'flex', 'flex-col', 'gap-2', 'xl:gap-3', 'mr-3');
      
  const liOfficialName = document.createElement('li');
  const officialName = country['official_name'];
  liOfficialName.innerHTML = `<strong class="font-semibold">Official Name:</strong> ${officialName}`;

  const liPopulation = document.createElement('li');
  const population = country['population'];
  const formattedPopulation = population.toLocaleString();
  liPopulation.innerHTML = `<strong class="font-semibold">Population:</strong> ${formattedPopulation}`;

  const liRegion = document.createElement('li');
  const region = country['region'];
  liRegion.innerHTML = `<strong class="font-semibold">Region:</strong> ${region}`;

  const liSubRegion = document.createElement('li');
  const subRegion = country['subregion'];
  liSubRegion.innerHTML = `<strong class="font-semibold">Sub Region:</strong> ${subRegion}`;

  const liCapital = document.createElement('li');
  const capital = country['capital'];
  liCapital.innerHTML = `<strong class="font-semibold">Capital:</strong> ${capital}`;

  ul1.append(liOfficialName, liPopulation, liRegion, liSubRegion, liCapital);


  const ul2 = document.createElement('ul');
  ul2.classList.add('pt-10', 'flex', 'flex-col', 'sm:pt-5', 'gap-2', 'xl:gap-3');

  const liArea = document.createElement('li');
  const area = country['area'];
  const formattedArea = area.toLocaleString();
  liArea.innerHTML = `<strong class="font-semibold">Area:</strong> ${formattedArea} Km²`;

  const liTopLevelDomain = document.createElement('li');
  const topLevelDomain = country['topLevelDomain'];
  liTopLevelDomain.innerHTML = `<strong class="font-semibold">Top Level Domain:</strong> ${topLevelDomain}`;

  const liCurrency = document.createElement('li');

  const currenciesObj = country['currencies'];
  const currenciesArray = Object.values(currenciesObj);
  const currency = currenciesArray.length > 1 
                   ? `${currenciesArray[0]['name']} (${currenciesArray[0]['symbol']}), ${currenciesArray[1]['name']} (${currenciesArray[1]['symbol']})`
                   : `${currenciesArray[0]['name']} (${currenciesArray[0]['symbol']})`

  liCurrency.innerHTML = `<strong class="font-semibold">Currency:</strong> ${currency}`;

  const liLanguage = document.createElement('li');
  const languagesObj = country['languages'];
  const languagesArray = Object.values(languagesObj);
  const language = languagesArray.length > 1 ? languagesArray.join(', ') : languagesArray[0];

  liLanguage.innerHTML = `<strong class="font-semibold">Language:</strong> ${language}`;

  const liCallingCode = document.createElement('li');
  const callingCode = country['callingCode'];
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
  thirdDiv2.classList.add('flex', 'items-center', 'flex-wrap', 'gap-4', 'py-5', 'text-sm');

  const borderCountries = country['borders'];

  if (borderCountries === 'N/A') {
    const a = document.createElement('a');
    a.classList.add('py-1', 'px-5', 'rounded', 'shadow-2xl', 'dark:bg-gray-800');

    const lowerCaseCountryName = country['name'].toLowerCase();
    const url = new URL('/country.html', window.location.href);
    url.searchParams.set('country', lowerCaseCountryName);
    a.href = url.toString();
    const borderCountryText = document.createTextNode('None');
    a.append(borderCountryText);

    thirdDiv2.append(a);

  } else {
    borderCountries.forEach(border => {
      const borderCountryName = getBorderCountryName(border);
      const a = document.createElement('a');
      a.classList.add('py-1', 'px-5', 'rounded', 'shadow-2xl', 'dark:bg-gray-800');

      const url = new URL('/country.html', window.location.href);
      url.searchParams.set('country', borderCountryName.toLowerCase());
      a.href = url.toString();
      const borderCountryText = document.createTextNode(borderCountryName);
      a.append(borderCountryText)

      thirdDiv2.append(a);
    })
  }

  secDiv2.append(h3, thirdDiv2);
  mainDiv.append(secDiv1, secDiv2);

  article.append(img, mainDiv);

  countrySection.append(article);
}

renderCountry(selectedCountry);


/* const api = axios.create({
  baseURL: 'https://countryapi.io/api',
  headers: {
    'Authorization': 'Bearer wzboaEqfDeW6hyr5YAby9NvASkyAqQwLDVvull0N'
  }
})


async function getCountry(name) {
  try {
    const res = await api.get(`/name/${name}`);
    console.log('Country:')
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
      ul1.classList.add('pt-5', 'flex', 'flex-col', 'gap-2', 'xl:gap-3', 'mr-3')
      
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
      ul2.classList.add('pt-10', 'flex', 'flex-col', 'sm:pt-5', 'gap-2', 'xl:gap-3');

      const liArea = document.createElement('li');
      const area = country[key]['area'];
      liArea.innerHTML = `<strong class="font-semibold">Area:</strong> ${area} m2`;

      const liTopLevelDomain = document.createElement('li');
      const topLevelDomain = country[key]['topLevelDomain'];
      liTopLevelDomain.innerHTML = `<strong class="font-semibold">Top Level Domain:</strong> ${topLevelDomain}`;

      const liCurrency = document.createElement('li');
      const currencies = country[key]['currencies'];

      const currencyCode = Object.keys(currencies)[0];
      const currencyName = currencies[currencyCode].name;
      const currencySymbol = currencies[currencyCode].symbol;

      liCurrency.innerHTML = `<strong class="font-semibold">Currency:</strong> ${currencyName} (${currencySymbol})`;

      const liLanguage = document.createElement('li');
      const languagesObj = country[key]['languages'];
      const languagesArray = Object.values(languagesObj);
      const language = languagesArray.length > 1 ? languagesArray.join(', ') : languagesArray[0];

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
        a.classList.add('py-1', 'px-5', 'rounded', 'shadow-2xl', 'dark:bg-gray-800');
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
} */
