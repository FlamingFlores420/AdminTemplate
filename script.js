const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-bar');
const closeBtn = document.querySelector('#close-btn');

const darkModeToggle = document.querySelector('#darkmode-toggle');

function handleScreenWidthChange() {
    var screenWidth = window.innerWidth;

    
    if (screenWidth > 1000) {
        
        sideMenu.style.display = "block";
    } 
}

handleScreenWidthChange();

window.addEventListener('resize', handleScreenWidthChange);

menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display = "block";
})

closeBtn.addEventListener('click', ()=>{
    sideMenu.style.display = "none";
})

darkModeToggle.addEventListener('change',()=>{
    if(darkModeToggle.checked){
        document.body.classList.add('dark-theme-variables')
        themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    }else{
        document.body.classList.remove('dark-theme-variables')
        themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    }

})

