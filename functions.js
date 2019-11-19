
/* changing background color of navbar on scroll  */
$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 300);
});



/*changing font of navbar links on scroll  */
window.onscroll = function() {myFunction()};
        
function myFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("ProjectLink").className = "nav-link-default.scrolled";
    document.getElementById('ContactLink').className = 'nav-link-default.scrolled';
    document.getElementById('ResumeLink').className = 'nav-link-default.scrolled';
    document.getElementById('AboutLink').className = 'nav-link-default.scrolled';
    
  } else {
    document.getElementById("ProjectLink").className = "nav-link-default";
    document.getElementById('ContactLink').className = 'nav-link-default';
    document.getElementById('ResumeLink').className = 'nav-link-default';
    document.getElementById('AboutLink').className = 'nav-link-default';
  }
}