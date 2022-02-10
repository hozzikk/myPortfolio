// const hamburger = document.querySelector('.hamburger'),
//       menu = document.querySelector('.menu'),
//       closeElem = document.querySelector('.menu__close');

// hamburger.addEventListener('click', () => {
//     menu.classList.add('active');
// });

// closeElem.addEventListener('click', () => {
//     menu.classList.remove('active');
// });

// const counters = document.querySelectorAll('.skills__ratings-counter'),
//       lines = document.querySelectorAll('.skills__ratings-line span');

// counters.forEach( (item, i) => {
//     lines[i].style.width = item.innerHTML;
// });



// MENU

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu__close');
const menuOverlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click',() => {
    menu.classList.add('active');
});

closeMenu.addEventListener('click',() => {
    menu.classList.remove('active');
});

menuOverlay.addEventListener('click',() => {
    menu.classList.remove('active');
});

//CLICK PROMO

const promoMeBtn = document.querySelectorAll('.promo__link');
function clearPromo (){
    promoMeBtn.forEach(item => {
        item.classList.remove('btn');
    })
}
promoMeBtn.forEach(item => {
    item.addEventListener('click', () => {
        clearPromo();
        item.classList.toggle('btn');
    })
})


// PROGRESSА

const percent = document.querySelectorAll('.skills__progress-percent');
const lineActive = document.querySelectorAll('.skills__progress-active');

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

for (let i = 0; i < percent.length; i++){
    lineActive[i].style.width = percent[i].innerHTML;
}

const sidepanel = document.querySelector('.sidepanel');
const screenWidth = window.screen.width;
sidepanel.style.display = "none";

// const scrollHeight = document.documentElement.scrollHeight;
window.addEventListener('scroll',(event) => {
    if (scrollY > 400 && screenWidth > 1200){
        sidepanel.style.display = "flex";
    } else{
        sidepanel.style.display = "none";
    }
});

//animate scroll

$("a").on('click', function(event) {

    if (this.hash !== "") {
    
    event.preventDefault();

    
    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 800, function(){

        
        window.location.hash = hash;
    });
    }
    menu.classList.remove('active'); 
});


//Email
$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "../mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");

        $('form').trigger('reset');
    });
    return false;
})

new WOW().init();

