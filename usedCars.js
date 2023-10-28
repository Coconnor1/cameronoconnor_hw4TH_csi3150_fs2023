const usedCars = [
  {
    year: 2018,
    make: "Toyota",
    model: "Camry",
    mileage: 30000,
    price: 18000,
    color: "Silver",
    gasMileage: "25 mpg city, 35 mpg highway",
    image: "./images/camry.webp",
  },
  {
    year: 2016,
    make: "Honda",
    model: "Civic",
    mileage: 45000,
    price: 14000,
    color: "White",
    gasMileage: "30 mpg city, 40 mpg highway",
    image: "./images/civic.jpg",
  },
  {
    year: 2017,
    make: "Ford",
    model: "Fusion",
    mileage: 35000,
    price: 16000,
    color: "Black",
    gasMileage: "28 mpg city, 38 mpg highway",
    image: "./images/fusion.jpg",
  },
  {
    year: 2019,
    make: "Nissan",
    model: "Altima",
    mileage: 25000,
    price: 17000,
    color: "Blue",
    gasMileage: "27 mpg city, 36 mpg highway",
    image: "./images/altima.png",
  },
  {
    year: 2015,
    make: "Chevrolet",
    model: "Malibu",
    mileage: 50000,
    price: 12000,
    color: "Red",
    gasMileage: "25 mpg city, 37 mpg highway",
    image: "./images/malibu.webp",
  },
  {
    year: 2016,
    make: "Volkswagen",
    model: "Passat",
    mileage: 40000,
    price: 15000,
    color: "Gray",
    gasMileage: "29 mpg city, 40 mpg highway",
    image: "./images/vw.webp",
  },
  {
    year: 2020,
    make: "Hyundai",
    model: "Elantra",
    mileage: 22000,
    price: 16000,
    color: "Silver",
    gasMileage: "30 mpg city, 41 mpg highway",
    image: "./images/hyundai.webp",
  },
  {
    year: 2014,
    make: "Subaru",
    model: "Outback",
    mileage: 60000,
    price: 14000,
    color: "Green",
    gasMileage: "22 mpg city, 30 mpg highway",
    image: "./images/outback.jpg",
  },
  {
    year: 2017,
    make: "Mazda",
    model: "CX-5",
    mileage: 32000,
    price: 19000,
    color: "Blue",
    gasMileage: "24 mpg city, 31 mpg highway",
    image: "./images/mazda.webp",
  },
  {
    year: 2018,
    make: "Kia",
    model: "Sorento",
    mileage: 28000,
    price: 17000,
    color: "White",
    gasMileage: "22 mpg city, 29 mpg highway",
    image: "./images/kia.png",
  },
  {
    year: 2015,
    make: "Dodge",
    model: "Challenger",
    mileage: 30000,
    price: 24000,
    color: "Black",
    gasMileage: "19 mpg city, 30 mpg highway",
    image: "./images/challenger.webp",
  },
  {
    year: 2017,
    make: "Cadillac",
    model: "XT5",
    mileage: 28000,
    price: 32000,
    color: "Red",
    gasMileage: "19 mpg city, 27 mpg highway",
    image: "./images/caddy.webp",
  },
  {
    year: 2018,
    make: "Jaguar",
    model: "F-PACE",
    mileage: 26000,
    price: 38000,
    color: "Blue",
    gasMileage: "18 mpg city, 23 mpg highway",
    image: "./images/jaguar.webp",
  },
  {
    year: 2019,
    make: "Tesla",
    model: "Model S",
    mileage: 18000,
    price: 55000,
    color: "Black",
    gasMileage: "Electric (370 miles per charge)",
    image: "./images/tesla.jpg",
  },
  {
    year: 2020,
    make: "Porsche",
    model: "Cayenne",
    mileage: 22000,
    price: 68000,
    color: "White",
    gasMileage: "20 mpg city, 26 mpg highway",
    image: "./images/porsche.webp",
  },
  {
    year: 2017,
    make: "Lexus",
    model: "ES",
    mileage: 29000,
    price: 26000,
    color: "White",
    gasMileage: "21 mpg city, 30 mpg highway",
    image: "./images/lexus.webp",
  },
  {
    year: 2016,
    make: "BMW",
    model: "5 Series",
    mileage: 32000,
    price: 27000,
    color: "Black",
    gasMileage: "23 mpg city, 34 mpg highway",
    image: "./images/bmw.webp",
  },
  {
    year: 2015,
    make: "Audi",
    model: "A3",
    mileage: 18000,
    price: 28000,
    color: "Silver",
    gasMileage: "24 mpg city, 34 mpg highway",
    image: "./images/audi.webp",
  },
];

function createCarCards(cars, filtered = false) {
  const carContainer = document.getElementById("carListings");
  carContainer.innerHTML = "";

  cars.forEach((car) => {
    car.price = car.price.toLocaleString();
    car.mileage = car.mileage.toLocaleString();

    const card = document.createElement("div");
    card.className = filtered ? "filtered-card" : "car-card";
    card.innerHTML = `
      <img src="${car.image}" alt="${car.make} ${car.model} Image">
      <hr />
      <h2>${car.make} ${car.model}</h2>
      <hr />
      <p>Price: $${car.price}</p>
      <p>Year: ${car.year}</p>
      <p>Color: ${car.color}</p>
      <p>Mileage: ${car.mileage}</p>
      <p>Gas Mileage: ${car.gasMileage}</p>
      </div> <!-- Close the <div> element -->
    `;

    carContainer.appendChild(card);
  });
}

function applyFilters() {
  const yearFilter = document.getElementById("yearFilter").value;
  const makeFilter = document.getElementById("makeFilter").value;
  const colorFilter = document.getElementById("colorFilter").value;
  const priceFilter = document.getElementById("priceFilter").value;
  const maxMileageFilter = parseInt(document.getElementById("maxMileageFilter").value);

  let filteredCars = [...usedCars];

  if (yearFilter !== "-select-") {
    filteredCars = filteredCars.filter((car) => car.year === parseInt(yearFilter));
  }

  if (makeFilter !== "-select-") {
    filteredCars = filteredCars.filter((car) => car.make === makeFilter);
  }

  if (colorFilter !== "-select-") {
    filteredCars = filteredCars.filter((car) => car.color === colorFilter);
  }

  if (priceFilter !== "-select-") {
    filteredCars = filteredCars.filter(
      (car) => parseInt(car.price.replace('$', '').replace(',', '')) <= parseInt(priceFilter)
    );
  }

  if (!isNaN(maxMileageFilter)) {
    filteredCars = filteredCars.filter(
      (car) => parseInt(car.mileage.replace(',', '')) <= maxMileageFilter
    );
  }
  

  createCarCards(filteredCars, true);
}


function initializePage() {

  document.getElementById("yearFilter").value = "-select-";
  document.getElementById("makeFilter").value = "-select-";
  document.getElementById("colorFilter").value = "-select-";
  document.getElementById("priceFilter").value = "-select-";


  applyFilters();
}


document.addEventListener("DOMContentLoaded", initializePage);

// Add event listeners for filter and search
document.getElementById("yearFilter").addEventListener("change", applyFilters);
document.getElementById("makeFilter").addEventListener("change", applyFilters);
document.getElementById("colorFilter").addEventListener("change", applyFilters);
document.getElementById("priceFilter").addEventListener("change", applyFilters);
document.getElementById("searchButton").addEventListener("click", applySearch);
document.getElementById("applyMaxMileageButton").addEventListener("click", applyMaxMileageFilter);

createCarCards(usedCars);

