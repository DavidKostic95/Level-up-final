const navwrap=document.querySelector('.nav-wrap');

window.onscroll=function() {
    var top=window.scrollY;
    this.console.log(top);
    if (top>=150) {
        navwrap.classList.add('active')
    }
    else {
        navwrap.classList.remove('active');
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.getElementById("dark-mode-side-nav").style.opacity = "1";
    document.getElementById("dark-mode-side-nav").style.width="100%";    
  }
  
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("dark-mode-side-nav").style.opacity = "0";
    document.getElementById("dark-mode-side-nav").style.width="0";    
  }

  