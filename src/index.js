// import axios from "axios";
import { fetchBreeds, fetchCatByBreed, BREEDS_VOID, loaderP, selectCats, catInfoDiv } from "./cat-api";
import Notiflix from 'notiflix';
// axios.defaults.headers.common["x-api-key"] = "live_cN2Up0hKvgIvqXtVFaUckvXElZKneik9YRcwu3Wa02xOF1zg0ESvEO80ojcDz33U";
const BASE_URL = `https://api.thecatapi.com/v1/breeds`;


fetchBreeds(BASE_URL)
    .then((data) => selectCats.insertAdjacentHTML('beforeend', createMarkup(data)))
    .catch(() => 
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!'))
    .finally(() => {
          loaderP.classList.add("hidden")
        selectCats.classList.remove("hidden")
    })

function createMarkup(arr) {
    return arr.map(({ reference_image_id, name }) => `
<option value="${reference_image_id}">${name}</option>`).join();
}

selectCats.addEventListener("change", (e) => fetchCatByBreed(e.currentTarget.value)
    .then((data) => catInfoDiv.innerHTML = `<img src="${data.url}"   alt="${data.id}" class="cat-image">
<div class="cat-text">
<h1 class="title">${data.breeds[0].name}</h1>
<p>${data.breeds[0].description}</p>
<p><span class="title">Temperament:</span>${data.breeds[0].temperament}</p>
</div>`)
    .catch(() =>
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!'))
    .finally(() => {
        loaderP.classList.add("hidden")
        catInfoDiv.classList.remove("hidden")
    })
)


    

