const loaderP = document.querySelector(".loader")
const selectCats = document.querySelector(".breed-select");
const catInfoDiv = document.querySelector(".cat-info");
const BREEDS_VOID = `https://api.thecatapi.com/v1/images/`;
import Notiflix from 'notiflix';

 
function fetchBreeds(url) {
 return fetch(`${url}`).then(
        (resp) => {
            if (!resp.ok) {
                loaderP.classList.add("hidden")
            throw new Error(resp.statusText)
            }
            return resp.json()
        }
    )
}

function fetchCatByBreed(id) {
    catInfoDiv.classList.add("hidden")
    loaderP.classList.remove("hidden")
     return fetch(`${BREEDS_VOID}${id}`).then(
        (resp) => {
             if (!resp.ok) {
                 loaderP.classList.add("hidden")
                throw new Error(resp.statusText)
             }
            return resp.json()
        }
    )
}
export {fetchBreeds,fetchCatByBreed, BREEDS_VOID, loaderP,selectCats, catInfoDiv}

   
