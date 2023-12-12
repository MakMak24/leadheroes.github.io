const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

let countries = ["AARP", "Aetna","Aflac","AmeriHealth","american continental","Americare","Anthem/Primera BCBS","Assurity","Banker's Fidelity", "Banker's life", "Blue Cross Blue Shield",
"Carefirst","CENTINAL","Cigna","Colonial pen","combined insurance","Coventry","CSI",  "Equitable",              
 "forethought","Geisinger","HAP-Health Alliance Plan","hartford","health choice","health partners","Healthspring","Highmark","Horizon BCBS","IAC","medica","Medico","Male handlers","Manhattan life","Medi-Share","MODA","Mutual of Omaha","New Era","Old surety","Optimum Health Care","oxford","oxford life","Philadelphia life ","Philadelphia america","Physicians Mutual","Priority health","Presbyterian","Pacific source","reserve national","Regence","Silver script","State Farm","SUPPLEMENT PLANS F G N K L M J","Transamerica","United Health Care","United American","USAA","UCT-united commercial travellers" ];

function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));