const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
            toggle.classList.toggle('bx-x')
        })
    }
}

showMenu('header-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


//const r = rolly({
 //   view: document.querySelector('.app'),
 //   native: true,
 //   // other options
 // });
 // r.init();

 // AOS.init({
//      duration: 1500 //Global duration
//  });

//Flipster plugin

//$('.photos-container').flipster();


//Swiper for testimonies
let swiperEvents = new Swiper('.upcomingEvents', {
	cssMode: true,
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	// init: false,
	pagination: {
	  el: '.swiper-pagination-upcoming',
	  clickable: true,
	  dynamicBullets: true,
	},

  
	breakpoints: {
	  620: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  680: {
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  920: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1240: {
		slidesPerView: 4,
		spaceBetween: 50,
	  },
	},
	mousewheel: true,
  	keyboard: true, 
    });



	//Swiper for testimonies

	let swiperTestimonies = new Swiper('.koiTestimonies', {
		        
		loop: true,
		grabCursor: true,
		spaceBetween:48,

		pagination: {
			el: '.swiper-pagination-testimonies',
			clickable: true,
			dynamicBullets:true,
		},
		autoplay: {
			delay: 5000,
		  },

		});


// Search form
// 1. Get search form and page links
let searchForm = document.getElementById('searchForm')
let pageLinks = document.getElementsByClassName('pageLinks')

// 2. Ensure search form exist

if(searchForm){
	for(let i=0; pageLinks.length > i; i++) {
		pageLinks[i].addEventListener('click', function (e) {
			e.preventDefault()

			//get data attribute

			let page = this.dataset.page

			//add hidden search input
			searchForm.innerHTML +- `<input value=${page} name="page" hidden/>`

			//submit form

			searchForm.submit()
		})
	}
}


// testimoni pop

let preveiwContainer = document.querySelector('.testimony-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.blog-row .blog-col').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('activate');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('activate');
    preveiwContainer.style.display = 'none';
  };
});