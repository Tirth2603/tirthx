//  close the mobile menu when  we clicke  on any link

function closeMobileMenu() {
  document.getElementById("check").checked = false;
}

// Smooth scrolling behavior
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// darkmode-lightmode

var root = document.documentElement;
// Set the color property
islight = false;
function lightmode() {
  var bulbImage = document.querySelector("#menu li img");
  var purweb=document.getElementsByClassName("pur-web")
  if (islight) {
    // document.body.style.backgroundColor = "var(--black)";
    // document.body.style.color = "var(--white)";
    root.style.setProperty("--white", "#efedff");
    root.style.setProperty("--black", "#161616");
    
    for (var i = 0; i < purweb.length; i++) {
      purweb[i].style.color = "#8a79ff";
    }

    bulbImage.src = "bulb-yellow.png";

    islight = false;
  } else {
    // document.body.style.backgroundColor = "var(--white)";
    // document.body.style.color = "var(--black)";
    root.style.setProperty("--white", "#161616");
    root.style.setProperty("--black", "#efedff");
    bulbImage.src = "bulb-dark.png";
   
    for (var i = 0; i < purweb.length; i++) {
      purweb[i].style.color = "#5c45fd";
    }

    islight = true;
  }
}
