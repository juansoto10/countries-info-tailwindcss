const cardsSection = document.getElementById('cards');
const countrySection = document.getElementById('country');
const jsonText = document.getElementById('jsonText');

const api = axios.create({
  baseURL: 'https://countryapi.io/api/all',
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
    const res = await api.get()
    console.log(res);
  }
  catch (error) {
    console.error(error);
  }
}

/* getCountries(); */

// res.data => {ar:{}, co:{}}
// countries = res.data
// 
// name, population, region, capital

const countries = {
  "af": {
    "name": "Afghanistan",
    "official_name": "Islamic Republic of Afghanistan",
    "topLevelDomain": [".af"],
    "alpha2Code": "AF",
    "alpha3Code": "AFG",
    "cioc": "AFG",
    "numericCode": "004",
    "callingCode": "+93",
    "capital": "Kabul",
    "altSpellings": ["AF", "Afġānistān"],
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 2837743,
    "latLng": { "country": [33, 65], "capital": [34.52, 69.18] },
    "demonyms": {
      "eng": { "f": "Afghan", "m": "Afghan" },
      "fra": { "f": "Afghane", "m": "Afghan" }
    },
    "area": 652230,
    "gini": "Not Available",
    "timezones": ["UTC+04:30"],
    "borders": ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
    "nativeNames": {
      "prs": { "official": "جمهوری اسلامی افغانستان", "common": "افغانستان" },
      "pus": {
        "official": "د افغانستان اسلامي جمهوریت",
        "common": "افغانستان"
      },
      "tuk": {
        "official": "Owganystan Yslam Respublikasy",
        "common": "Owganystan"
      }
    },
    "currencies": { "AFN": { "name": "Afghan afghani", "symbol": "؋" } },
    "languages": { "prs": "Dari", "pus": "Pashto", "tuk": "Turkmen" },
    "translations": {
      "ara": "أفغانستان",
      "ces": "Afghánistán",
      "cym": "Affganistan",
      "deu": "Afghanistan",
      "est": "Afganistan",
      "fin": "Afganistan",
      "fra": "Afghanistan",
      "hrv": "Afganistan",
      "hun": "Afganisztán",
      "ita": "Afghanistan",
      "jpn": "アフガニスタン",
      "kor": "아프가니스탄",
      "nld": "Afghanistan",
      "per": "افغانستان",
      "pol": "Afganistan",
      "por": "Afeganistão",
      "rus": "Афганистан",
      "slk": "Afganistan",
      "spa": "Afganistán",
      "swe": "Afghanistan",
      "urd": "افغانستان",
      "zho": "阿富汗"
    },
    "flag": {
      "small": "https://flagcdn.com/24x18/af.png",
      "medium": "https://flagcdn.com/96x72/af.png",
      "large": "https://flagcdn.com/256x192/af.png"
    },
    "regionalBlocs": [
      {
        "acronym": "SAARC",
        "name": "South Asian Association for Regional Cooperation"
      }
    ]
  },
  "sd": {
    "name": "Sudan",
    "official_name": "Republic of the Sudan",
    "topLevelDomain": [".sd"],
    "alpha2Code": "SD",
    "alpha3Code": "SDN",
    "cioc": "SUD",
    "numericCode": "729",
    "callingCode": "+249",
    "capital": "Khartoum",
    "altSpellings": ["SD", "Republic of the Sudan", "Jumhūrīyat as-Sūdān"],
    "region": "Africa",
    "subregion": "Northern Africa",
    "population": 43849269,
    "latLng": { "country": [15, 30], "capital": [15.6, 32.53] },
    "demonyms": {
      "eng": { "f": "Sudanese", "m": "Sudanese" },
      "fra": { "f": "Soudanaise", "m": "Soudanais" }
    },
    "area": 1886068,
    "gini": { "2014": 34.2 },
    "timezones": ["UTC+03:00"],
    "borders": ["CAF", "TCD", "EGY", "ERI", "ETH", "LBY", "SSD"],
    "nativeNames": {
      "ara": { "official": "جمهورية السودان", "common": "السودان" },
      "eng": { "official": "Republic of the Sudan", "common": "Sudan" }
    },
    "currencies": { "SDG": { "name": "Sudanese pound" } },
    "languages": { "ara": "Arabic", "eng": "English" },
    "translations": {
      "ara": "السودان",
      "ces": "Súdán",
      "cym": "Sudan",
      "deu": "Sudan",
      "est": "Sudaan",
      "fin": "Sudan",
      "fra": "Soudan",
      "hrv": "Sudan",
      "hun": "Szudán",
      "ita": "Sudan",
      "jpn": "スーダン",
      "kor": "수단",
      "nld": "Soedan",
      "per": "سودان",
      "pol": "Sudan",
      "por": "Sudão",
      "rus": "Судан",
      "slk": "Sudán",
      "spa": "Sudán",
      "swe": "Sudan",
      "urd": "سودان",
      "zho": "苏丹"
    },
    "flag": {
      "small": "https://flagcdn.com/24x18/sd.png",
      "medium": "https://flagcdn.com/96x72/sd.png",
      "large": "https://flagcdn.com/256x192/sd.png"
    },
    "regionalBlocs": [
      {
        "acronym": "AU",
        "name": "African Union",
        "otherNames": [
          "الاتحاد الأفريقي",
          "Union africaine",
          "União Africana",
          "Unión Africana",
          "Umoja wa Afrika"
        ]
      },
      {
        "acronym": "AL",
        "name": "Arab League",
        "otherNames": [
          "جامعة الدول العربية",
          "Jāmiʻat ad-Duwal al-ʻArabīyah",
          "League of Arab States"
        ]
      }
    ]
  },
}

for (let key of Object.keys(countries)) {
  console.log(key + " -> " + countries[key]['name']);
  console.log(key + " -> " + countries[key]['population']);
  console.log(key + " -> " + countries[key]['region']);
  console.log(key + " -> " + countries[key]['capital']);
}

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



// Cards view


// Country view


// Create the article element and the other tags and then add the classes like this:

/* article.classList.add('pt-16', 'lg:grid', 'lg:grid-cols-2', 'lg:gap-10', 'lg:pt-20', 'xl:gap-24'); */

const article = document.createElement('article');
article.classList.add('pt-16', 'lg:grid', 'lg:grid-cols-2', 'lg:gap-10', 'lg:pt-20', 'xl:gap-24');

const img = document.createElement('img');
img.classList.add('shadow-md');
// colocar la scr de la imagen y el alt como el nombre del país
img.src = '';
img.alt = '';

const mainDiv = document.createElement('div');
mainDiv.classList.add('pt-8', 'xl:flex', 'xl:flex-col', 'xl:justify-between', 'xl:p-0');


