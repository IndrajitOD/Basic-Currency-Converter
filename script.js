const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies";

const dropdowns = document.querySelectorAll(".custom-select select");
const btn = document.querySelector(".convert-btn");


const fromCurr = document.querySelector("#from-currency");
const toCurr = document.querySelector("#to-currency");
const msg = document.querySelector("#msg-text");

const swapBtn = document.querySelector("#swap-btn");

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    if (countryCode) {
        let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
        let img = element.parentElement.querySelector("img");
        if (img) img.src = newSrc;
    }
};

const updateExchangeRate = async () => {
    let amount = document.querySelector("#amount");
    
    let amtVal = amount.value;
    if (amtVal === "" || amtVal <= 0) {
        amtVal = 1;
        amount.value = "1";
    }

    msg.innerText = "Calculating...";
    
    const from = fromCurr.value.toLowerCase();
    const to = toCurr.value.toLowerCase();
    
    const URL = `${BASE_URL}/${from}.json`;

    
    try {
        let response = await fetch(URL);
        if (!response.ok) throw new Error("Rate not found");
        let data = await response.json();
        
        if (data[from] && data[from][to]) {
            let rate = data[from][to];
            let finalAmount = (amtVal * rate).toFixed(2);
            msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
        } else {
            msg.innerText = "Conversion rate not available.";
            
        }
    } catch (error) {
        msg.innerText = "Error fetching rate. Try again.";
        console.error(error);
    }
};

const showGlow = () => {
    btn.classList.add("ready");
};


for (let select of dropdowns) {
    const parent = select.parentElement;
    const dropdownMenu = document.createElement("div");
    dropdownMenu.className = "dropdown-menu";
    parent.appendChild(dropdownMenu);

    

    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        
        newOption.value = currCode;

        
        const dropdownItem = document.createElement("div");
        dropdownItem.className = "dropdown-item";
        dropdownItem.dataset.value = currCode;
        
        const flagImg = document.createElement("img");
        flagImg.src = `https://flagsapi.com/${countryList[currCode]}/flat/64.png`;
        flagImg.alt = `${currCode} Flag`;
        
        const codeText = document.createElement("span");
        codeText.innerText = currCode;
        
        dropdownItem.appendChild(flagImg);
        dropdownItem.appendChild(codeText);
        
        dropdownMenu.appendChild(dropdownItem);

        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
            dropdownItem.classList.add("selected");
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
            dropdownItem.classList.add("selected");
            
        }
        select.append(newOption);

        dropdownItem.addEventListener("click", (e) => {
            e.stopPropagation();
            select.value = currCode;
            updateFlag(select);
            
            parent.querySelectorAll(".dropdown-item").forEach(item => item.classList.remove("selected"));
            dropdownItem.classList.add("selected");
            
            parent.classList.remove("active");
            showGlow(); 
        });
    }

    parent.addEventListener("click", (e) => {
        e.stopPropagation();
        const isActive = parent.classList.contains("active");
        document.querySelectorAll(".custom-select").forEach(s => s.classList.remove("active"));
        if (!isActive) parent.classList.add("active");
    });

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
        showGlow();
    });
}

document.addEventListener("click", () => {
    document.querySelectorAll(".custom-select").forEach(s => s.classList.remove("active"));
});


const footerGreeting = document.querySelector("#footer-greeting");
if (footerGreeting) {
    const text = footerGreeting.innerText;
    footerGreeting.innerHTML = text.split(" ").map(word => {
        const isName = word === "Indrajit" || word === "Bhowmick";
        return `<span class="${isName ? 'name-word' : ''}">${word}</span>`;
    }).join(" ");
}


swapBtn.addEventListener("click", () => {
    let tempCode = fromCurr.value;
    fromCurr.value = toCurr.value;
    toCurr.value = tempCode;
    
    updateFlag(fromCurr);
    updateFlag(toCurr);
    showGlow();
});

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    btn.classList.remove("ready");
    updateExchangeRate();
});

window.addEventListener("load", () => {
    msg.innerText = "Click the button to get the exchange rate";
});

/*swapBtn.addEventListener("click", () => {
    let tempCode = fromCurr.value;
    fromCurr.value = toCurr.value;
    toCurr.value = tempCode;
    
    updateFlag(fromCurr);
    updateFlag(toCurr);
    showGlow();
});

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    btn.classList.remove("ready");
    updateExchangeRate();
});*/
