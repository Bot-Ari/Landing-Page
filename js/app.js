/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
var removeAllActiveClasses = function () {
  document.querySelectorAll("section").forEach((el) => {
    el.classList.remove("your-active-class");
  });
  document.querySelectorAll("li a").forEach((el) => {
    el.classList.remove("active");
  });
};
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function addSectionToNav(i) {
	const newElement = document.createElement("li");
	const newAnchor = document.createElement("a");
	var newAnchorText = document.createTextNode(i.dataset.nav);
	newAnchor.id = i.id;
	newAnchor.appendChild(newAnchorText);
	newElement.appendChild(newAnchor);
	const theList = document.getElementById('navbar__list');
	theList.appendChild(newElement);
}
// build the navigation
sections.forEach(addSectionToNav);

// Add class 'active' to section when near top of viewport
onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;
  let newElements = document.querySelectorAll('a');
  
  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses();
      if (section.id == currentId) {
      	section.classList.add("your-active-class");
      }
      newElements.forEach((oneThing) => {
      	if (oneThing.id === currentId) {
      		oneThing.classList.add('active');
      	}
      });
    }
  });
};
// Scroll to anchor ID using scrollTO event
let newElements = document.querySelectorAll('a');

newElements.forEach ((oneThing) => {
	oneThing.addEventListener ('click' , function(el) {
		sections.forEach ((section) => {
			if (section.id === oneThing.id) {
					    section.scrollIntoView();
			}
		});
    });
})

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


