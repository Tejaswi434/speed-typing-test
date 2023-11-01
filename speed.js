let outer = document.getElementById("quoteDisplay");
let inner = document.getElementById("quoteInput");
let final = document.getElementById("result");
let submitting = document.getElementById("submitBtn");
let resetting = document.getElementById("resetBtn");
let shuffle = document.getElementById("shuffling");
let url = "https://apis.ccbp.in/random-quote";
let spinning = document.getElementById("spinner")
let uniqueid;

function calling() {
    spinning.classList.remove("d-none");
    let counter = 0;

    let options = {
        method: "GET"

    }

    fetch(url, options)

        .then(function(response) {
            return (response.json())
        })
        .then(function(jsonData) {
            outer.textContent = (jsonData.content);
            spinning.classList.add("d-none")
        })

    uniqueid = setInterval(function() {

        counter += 1;
        shuffle.textContent = counter;
    }, 1000);

    submitting.addEventListener("click", function(event) {
        if (outer.textContent === inner.value) {
            final.textContent = "You typed in " + counter + " sentence";
            clearInterval(uniqueid);
        } else {
            final.textContent = "You typed incorrect sentence";
            clearInterval(uniqueid);
        }
    });
}
resetting.addEventListener("click", function(event) {
    clearInterval(uniqueid);
    spinning.classList.add("d-none");

    outer.textContent = "";
    inner.value = "";
    final.textContent = "";
    shuffle.textContent = 0;
    calling();




});
calling();
