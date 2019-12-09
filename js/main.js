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
 const randButton1 = document.querySelector(".randomButton1")
 let randomPeep1 = "people/13"
 const randButton2 = document.querySelector(".randomButton2")
 let randomPeep2 = "people/14"
 const randButton3 = document.querySelector(".randomButton3")
 let randomPeep3 = "people/15"
 const randButton4 = document.querySelector(".randomButton3")
 let randomPeep4 = "people/20"


 randButton1.addEventListener("click", function () {
    fetch(url + randomPeep1)
        .then(res => res.json())
        .then(characterInfo => {
            console.log(characterInfo)
            
            document.querySelectorAll(".name")[0].innerHTML = characterInfo.name
            document.querySelectorAll(".height")[0].innerHTML = characterInfo.height
            document.querySelectorAll(".weight")[0].innerHTML = characterInfo.mass
            document.querySelectorAll(".hair-color")[0].innerHTML = characterInfo.hair_color
        })
})
randButton2.addEventListener("click", function () {
    fetch(url + randomPeep2)
        .then(res => res.json())
        .then(characterInfo => {
            console.log(characterInfo)
            
            document.querySelectorAll(".name")[1].innerHTML = characterInfo.name
            document.querySelectorAll(".height")[1].innerHTML = characterInfo.height
            document.querySelectorAll(".weight")[1].innerHTML = characterInfo.mass
            document.querySelectorAll(".hair-color")[1].innerHTML = characterInfo.hair_color
        })
})
randButton3.addEventListener("click", function () {
    fetch(url + randomPeep3)
        .then(res => res.json())
        .then(characterInfo => {
            console.log(characterInfo)
            
            document.querySelectorAll(".name")[2].innerHTML = characterInfo.name
            document.querySelectorAll(".height")[2].innerHTML = characterInfo.height
            document.querySelectorAll(".weight")[2].innerHTML = characterInfo.mass
            document.querySelectorAll(".hair-color")[2].innerHTML = characterInfo.hair_color
        })
})
randButton4.addEventListener("click", function () {
    fetch(url + randomPeep4)
        .then(res => res.json())
        .then(characterInfo => {
            console.log(characterInfo)
            
            document.querySelectorAll(".name")[3].innerHTML = characterInfo.name
            document.querySelectorAll(".height")[3].innerHTML = characterInfo.height
            document.querySelectorAll(".weight")[3].innerHTML = characterInfo.mass
            document.querySelectorAll(".hair-color")[3].innerHTML = characterInfo.hair_color
        })
})
console.log(document.querySelectorAll(".name")[0].innerHTML)