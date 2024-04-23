function lengTaggle(){
const lenList = document.querySelector('.leng_list');
const lengBtn = document.querySelector('.languagedivwraper')
const dolerListDiv = document.querySelector('.doller_list');
var taggle = 0;
lengBtn.addEventListener('click', function(){
    if(taggle == 0){
        lenList.style.top = '7vh';
        lenList.style.opacity = '1';
        dolerListDiv.style.top= "10vh";
        dolerListDiv.style.opacity= "0";

        taggle = 1
    }else{
            lenList.style.top = '10vh';
            lenList.style.opacity = '0';
            taggle = 0
    }
})
}
lengTaggle()

function dollertaggle(){
    
const dolerListDiv = document.querySelector('.doller_list');
const dollerBtn = document.querySelector('.usdDoller')
const lenglist = document.querySelector('.leng_list')
const headSection = document.querySelector('.head_section');
const container = document.querySelector('.container');
const navpart2 = document.querySelector('.navpart2');
headSection.addEventListener('click', function(){
    dolerListDiv.style.top= "10vh";
    dolerListDiv.style.opacity= "0";
    lenglist.style.top= "10vh";
    lenglist.style.opacity= "0";
    console.log('click')
})
container.addEventListener('click', function(){
    dolerListDiv.style.top= "10vh";
    dolerListDiv.style.opacity= "0";
    lenglist.style.top= "10vh";
    lenglist.style.opacity= "0";
    console.log('click')
})
navpart2.addEventListener('click', function(){
    dolerListDiv.style.top= "10vh";
    dolerListDiv.style.opacity= "0";
    lenglist.style.top= "10vh";
    lenglist.style.opacity= "0";
    console.log('click')
})
var dollerTaggle = 0
dollerBtn.addEventListener('click', ()=>{
    if(dollerTaggle == 0){
        dolerListDiv.style.top= "100%";
        dolerListDiv.style.opacity= "1";
        lenglist.style.top= "10vh";
        lenglist.style.opacity= "0";
        dollerTaggle = 1;
    }else{
        dolerListDiv.style.top= "10vh";
        dolerListDiv.style.opacity= "0";
        dollerTaggle = 0;
    }

})
}
dollertaggle()

function nestingNav(){

    const shopbtn = document.querySelector('.shopbtn');
    const shoplist = document.querySelector('.shoplist');
    const bloglink = document.querySelector('.blogelink');
    const blogbtn = document.querySelector('.blogbtn');
    const bloglist = document.querySelector('.bloglist');
    const pagelist = document.querySelector('.pagelist');
    const pagebtn = document.querySelector('.pagebtn');

shopbtn.addEventListener('mouseenter', function(){
    shoplist.style.opacity = "1"
    shoplist.style.top = "3vw"
    shoplist.style.display = "flex"


})
shopbtn.addEventListener('mouseleave', function(){
    shoplist.style.opacity = "0"
    shoplist.style.top = "6vw"
    shoplist.style.display = "none"

})


blogbtn.addEventListener('mouseenter', function(){
    bloglist.style.opacity = "1"
    bloglist.style.top = "3vw"
    bloglist.style.display = "block"

})
blogbtn.addEventListener('mouseleave', function(){
    bloglist.style.opacity = "0"
    bloglist.style.top = "6vw"
    bloglist.style.display = "none"

})
pagebtn.addEventListener('mouseenter', function(){
    pagelist.style.opacity = "1"
    pagelist.style.top = "3vw"
    pagelist.style.display = "block"

})
pagebtn.addEventListener('mouseleave', function(){
    pagelist.style.opacity = "0"
    pagelist.style.top = "6vw"
    pagelist.style.display = "none"

})
}

nestingNav()


// ----------- swiper Js----------

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
  });


//   Review pagination

// best seller pagination
var bestSellerSwiper = new Swiper(".bestSeleler_swiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  const nav = document.querySelector('.nev2_con')
var lastScrollTop = 0;
  const scrollDown = document.addEventListener('scroll', function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if(scrollTop > lastScrollTop){
        nav.style.backgrounColor = "red"
    }else{

    }
  })
  



