var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}





/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }




 const url = "https://swapi.co/api/"
 const randButton = document.querySelector(".randomButton")
 let randomPeep = "people/13"

 randButton.addEventListener("click", function () {
    fetch(url + randomPeep)
        .then(res => res.json())
        .then(characterInfo => {
            console.log(characterInfo)
            
            document.querySelectorAll(".name")[0].innerHTML = characterInfo.name
            document.querySelectorAll(".height")[0].innerHTML = characterInfo.height
            document.querySelectorAll(".weight")[0].innerHTML = characterInfo.mass
            document.querySelectorAll(".hair-color")[0].innerHTML = characterInfo.hair_color
        })
})
console.log(document.querySelectorAll(".name")[0].innerHTML)