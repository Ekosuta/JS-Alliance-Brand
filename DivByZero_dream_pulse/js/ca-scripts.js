var customerName = "Alliance";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;
    let elem = document.querySelector('#tm-header')
    elem.textContent = customerName;
    let elem1 = document.querySelector('#introheader')
    elem1.textContent = customerName;

    
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->

    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->

};

function toggleColors() {
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
    let rectangles = document.querySelectorAll('.tm-white-rect')
    rectangles.forEach(function(rectangle){
        rectangle.classList.remove('tm-white-rect')
        rectangle.classList.add('tm-blue-rect')
    })
};

function hideElement() {
    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
    let socialLinks = document.querySelector('.tm-social-links')
    socialLinks.style.visibility = "hidden";
};

 function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->
    let intro = document.querySelector('#intropara1')
    intro.textContent = 'Alliance was founded in 1931 by Albert Daniels.';
    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->
    let intro2 = document.querySelector('#intropara2')
    intro2.textContent = "The company is a leader in P.C. Manufacturing";
     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->
    let about = document.querySelector('#aboutpara1')
    about.textContent = "We deliver the best service this side of creation.";
    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->
    let about2 = document.querySelector('#aboutpara2')
    about2.textContent = "Our motto is satisfaction guaranteed.";
    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->
    let address = document.querySelector('#addresspara')
    address.innerText = "800-555-5555"
}; 



