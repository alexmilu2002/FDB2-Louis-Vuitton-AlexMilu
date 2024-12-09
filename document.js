
/**********************************/
/* START VAN CAROUSEL *************/
/**********************************/

function createCaroCarrousel(carrouselID) {
	let carrousel = document.querySelector("#"+carrouselID);
  let carrouselElementsContainer = carrousel.querySelector(":scope > ul");
	let carrouselElements = carrouselElementsContainer.querySelectorAll("li");
  let bolletjes = carrousel.querySelectorAll(":scope > nav a");
	
  /*****************/
	/* START POSITIE */
	/*****************/
  
	// het eerste element en bolletje actief maaken
  function iniStartPosition() {
    // eerste element current maken
    carrouselElements[0].classList.add("current");
    // eerste bolletje current maken
		bolletjes[0].classList.add("current");
		// aan het begin van de container starten
    carrouselElementsContainer.scrollLeft = 0;
  }
  
  /****************/
	/* DE BOLLETJES */
	/****************/
  
  // de bolletjes activeren
  function iniBolletjes() {
    for (bolletje of bolletjes) {
			// elk bolletje laten luisteren naar kliks
      bolletje.addEventListener("click", function(e){
				// als er geklikt wordt
        
				// de default-actie (de link volgen) niet uitvoeren
        // anders verplaatst de hele carrousel naar boven in het scherm
				e.preventDefault();

				// het nieuwe element opzoeken
				let newElement = carrousel.querySelector(this.hash);
        
        // de breedte van de container bepalen
        let carouselElementsContainerWidth = carrouselElementsContainer.offsetWidth;
        // de breedte van het element bepalen
        let newElementWidth = newElement.offsetWidth;
        // de linker offset van het nieuwe element bepalen 
        let newElementOffset = newElement.offsetLeft;
        // als de container breder is dan het elemenet
        // de ruimte die aan weerzijde van het element aanwezig aftrekken van de offsetLeft
        // als de container en de elementen even breed zijn, dan verandert er hier niets
        newElementOffset -= (carouselElementsContainerWidth - newElementWidth) / 2;

        // de carousel naar de berekende positie scrollen
        carrouselElementsContainer.scrollTo({
          left: newElementOffset
        });
        
        // nieuwe element current element maken
		    updateCurrentElement(newElement);
        
        // de bolletjes updaten
		    updateBolletjes(newElement);
      });
    }
	}
  
  /*********************/
	/* ALGEMENE FUNCTIES */
	/*********************/
  
	function updateCurrentElement(newElement) {
		// het huidige current element opzoeken
		let currentElement = carrousel.querySelector(":scope > ul > .current");
		// de class current verwijderen
		currentElement.classList.remove("current");

		// aan nieuwe element de class current toevoegen
		newElement.classList.add("current");
	}
  
  /*********************/
	/* Update Bolletjes */
	/*********************/
  
  function updateBolletjes(newElement){
		// het huidige current bolletje opzoeken
		let currentBolletje = carrousel.querySelector(":scope > nav .current");
		// de class current verwijderen
		currentBolletje.classList.remove("current");
		
		// het nieuwe bolletje opzoeken
    let newBolletje = carrousel.querySelector("a[href='#"+newElement.id+"']");
		// de class current toevoegen
		newBolletje.classList.add("current");
  }

	// de bolletjes activeren
  iniBolletjes();	
  // de carrousel bij het begin starten
  iniStartPosition();
}

/************************/
/* DE CARROUSEL CREËREN */
/************************/

// nadat de pagina geladen is, de carrousels activeren
(function() {
  // hier de id gebruiken van de section in de html
  createCaroCarrousel("visualClues");
  //je kunt hier ook meerdere carrousellen activeren
})();

/************************************/
/* EINDE VAN CAROUSEL ***************/
/************************************/

/************************************/
/* START VAN LIKE BUTTONS ***********/
/************************************/

var heartButtons = document.querySelectorAll("button.like");

/* nb. dit kan met veel minder code met een for loop */
for (let i = 0; i < heartButtons.length; i++) {
  heartButtons[i].onclick = addToFavorites;
}

function addToFavorites(event) {
  /* het hartje waarop geklikt is in de variabele 'clickedHeart' opslaan */
  let clickedHeart = event.target;
  
  /* de parent - de hele fish opzoeken */
  let theProduct = clickedHeart.closest("li");
  
  /* de class liked aan de fish toevoegen */
  /* en weer verwijderen als er nog een keer geklikt wordt */
  theProduct.classList.toggle("liked");
}

/************************************/
/* EINDE VAN LIKE BUTTONS ***********/
/************************************/

/************************************/
/* START VAN HAMBURGER MENU *********/
/************************************/

/**************/
/* menu openen*/
/**************/

// stap 1: zoek de menu-button op en sla die op in een variabele
var openButton = document.querySelector("header > button");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openButton.onclick = openMenu;

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {  
  // zoek de nav op
  var deNav = document.querySelector("nav");
  // voeg class toe aan nav
  deNav.classList.add("toonMenu");
}

/*****************/
/* menu sluiten  */
/*****************/

// stap 1 - zoek sluiten button op
var sluitButton = document.querySelector("nav button");

// stap 2 - laat die button luisteren naar kliks
sluitButton.onclick = sluitMenu;

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}

/**********************************/
/* bonus: menu sluiten met escape */
/**********************************/
window.onkeydown = handleKeydown;

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}

/************************************/
/* EINDE VAN  HAMBURGER MENU ********/
/************************************/

/**********************************/
/* START VAN DARKMODE *************/
/**********************************/

const lightMode = document.querySelector('.sun');
const darkMode = document.querySelector('.moon');

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

lightMode.onclick = function(){
  document.documentElement.setAttribute('data-theme', 'dark');
  lightMode.style = "display: none";
  darkMode.style = "display: block";
  localStorage.setItem('theme', 'dark');
}

darkMode.onclick = function(){
  document.documentElement.setAttribute('data-theme', 'light');
  lightMode.style = "display: block";
  darkMode.style = "display: none";
  localStorage.setItem('theme', 'light');
  
}

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        lightMode.style = "display: none";
      darkMode.style = "display: block";
    }
}

/************************************/
/* EINDE VAN DARK MODE **************/
/************************************/

/************************************/
/* BEGIN VAN REDUCE MOTIOn **********/
/************************************/

    // Selecteer de afbeeldingen
    const toggleOnImg = document.querySelector(".toggleonreducemotion");
    const toggleOffImg = document.querySelector(".toggleoffreducemotion");

    // Voeg event listeners toe aan beide afbeeldingen
    toggleOnImg.addEventListener("click", toggleAutoplay);
    toggleOffImg.addEventListener("click", toggleAutoplay);

    function toggleAutoplay() {
        const videos = document.querySelectorAll("video");
        let autoplayActive = false;

        videos.forEach(video => {
            if (video.hasAttribute("autoplay")) {
                video.removeAttribute("autoplay");
                video.pause();
                autoplayActive = false;
            } else {
                video.setAttribute("autoplay", "");
                video.play();
                autoplayActive = true;
            }
        });

        // Wissel de zichtbaarheid van de afbeeldingen
        if (autoplayActive) {
            toggleOnImg.style.display = "block";
            toggleOffImg.style.display = "none";
        } else {
            toggleOnImg.style.display = "none";
            toggleOffImg.style.display = "block";
        }
    }

/************************************/
/* EINDE VAN REDUCE MOTIOn **********/
/************************************/