 //harmburger script
 let navlinks = document.querySelector('.navbar__links');
 let navlinksUl = document.querySelector('.navbar__links ul');
 let mainBody = document.querySelector('.main');
 let navbar = document.querySelector('.navbar');
 let mainContent = document.querySelector('.main-rapper');
 let navOpen = true;
 let togBtn = document.querySelector('.navbar__toggle-btn');
 togBtn.addEventListener('click', function(){  
      if(navOpen===true){
         togBtn.classList.add('open');
         navlinks.classList.add('navbar__links--open');
         navbar.style.zIndex = 10;
         navOpen = !navOpen;
       }else{
         togBtn.classList.remove('open');
         navlinks.classList.remove('navbar__links--open');
         navbar.style.position = "sticky";  
         navOpen = !navOpen;
     }
 });

  //reveal elements on scroll
     let pics = [...document.querySelectorAll(".events img, .news img")];
     let headerOne = [...document.querySelectorAll(".landing-page__header-one")];
     let headerTwo = [...document.querySelectorAll(".landing-page__header-two")];
     let paras = [...document.querySelectorAll("article p,article h3")];
     let titles = [...document.querySelectorAll(".main-body__section-title--contact-us,.main-body__section-title--event, .main-body__section-title--testimonials,.main-body__section-title--facilities,.main-body__section-title--awards,.main-body__section-title--news")];
     let options = {
          root: null,
          rootMargin: "-50px 0px",
      }
     let observer = new IntersectionObserver(betouching, options);
      pics.forEach((picture)=>{
          observer.observe(picture);
      });
      titles.forEach((title)=>{
          observer.observe(title);
      });
      headerOne.forEach((header)=>{
          observer.observe(header);
      });
      headerTwo.forEach((header)=>{
          observer.observe(header);
      });
      paras.forEach((p)=>{
          observer.observe(p);
      });

  //callback function adds animation to elements when they are in view
  function betouching(entries){
      entries.forEach(entry=>{
          if(entry.isIntersecting){
             entry.target.classList.add('active');
          }
      });
      
  }
  //reveal and hide backToTop
  let back2top = document.querySelector('button[id="backToTop"]');
  let doc = document.documentElement;
  window.onscroll = function(){
      let scrollHeight = window.scrollY;
      if(scrollHeight>=450){
          back2top.style.opacity = 1;
          back2top.style.transition = "opacity .6s ease-in-out";
      }else{
         back2top.style.transition = "none";
         back2top.style.opacity = 0;
      }
 

      //this script will shrink the navbar and change the bg color at 0 offset from the top of the viewport
      if(scrollHeight>0){
          navbar.classList.add("navbar--shrink");
          navlinksUl.style.backgroundColor = "rgb(192,192,192)";
      }else{
         navbar.classList.remove("navbar--shrink");
         navlinksUl.style.backgroundColor = "#1b1e23";
      }
  }
  //back to top animation
  function scrollToTop(){
     $('html, body').animate({scrollTop: 0}, "slow");
 } 
 