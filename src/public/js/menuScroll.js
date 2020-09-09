let lastScroll;
const navbar = document.getElementById("nav") || document.documentElement.scrollTop;
window.addEventListener("scroll", function(){
  var scrollTop = window.pageYOffset;

  if(scrollTop > "130"){
    navbar.style.top = "-4rem";
  }else{
    navbar.style.top = "0";
  }
  if(lastScroll < scrollTop){
    navbar.style.top = "0";
  }else{
    navbar.style.top = "-4rem";
  }
  lastScroll = scrollTop
})