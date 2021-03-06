const mainNavEl = document.querySelectorAll('.mainNav');

const aOneEl= document.querySelector('.aOne');
const aOneWrapEl = document.querySelector('.aOneWrap');

const aTwoEl = document.querySelector('.aTwo');
const aTwoWrapEl = document.querySelector('.aTwoWrap');

const aThreeEl = document.querySelector('.aThree');
const aThreeWrapEl = document.querySelector('.aThreeWrap');

const searchBtnEl = document.querySelector('.searchBtn')
const searchBarEl = document.querySelector('.searchBar')

const toggleButtonEl = document.querySelector('.toggleButton');
const burgerLinksWrapEl = document.querySelector('.burgerLinksWrap');


//mobile navigation
toggleButtonEl.addEventListener('click', () => {
    //console.log(burgerLinksWrap.classList)
    burgerLinksWrapEl.classList.toggle('showLinks')
});

//search bar
searchBtnEl.addEventListener('click', () => {
    searchBarEl.classList.toggle('showSearchBar')
})

//desktop navigation
mainNavEl.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()

        if (e.target === aOneEl) {
            aOneWrapEl.classList.toggle('show'); 

        }   else {// Prevents showing all dropNavs at the same time when toggle
            aOneWrapEl.classList.remove('show');
        }

        if (e.target === aTwoEl) {
            aTwoWrapEl.classList.toggle('show');

        }   else {
            aTwoWrapEl.classList.remove('show');
        }
        
        if (e.target === aThreeEl) {
            aThreeWrapEl.classList.toggle('show');

        }   else {
            aThreeWrapEl.classList.remove('show');
        }  
    });
});   
   



