let d = document;
const toggle_btn = d.getElementById('toggle-btn'),
	  menu = d.querySelector('.nav-items'),
	  header_nav = d.getElementById('header-nav'),
	  header = d.querySelector('header'),
	  logo = d.querySelector('.menu_img');



var menu_active = false
toggle_btn.addEventListener('click', toggle_menu);


function toggle_menu() {
	if(menu_active) {
		menu.classList.remove('active');
		this.classList.remove('active');
		menu_active = false
		header_nav.classList.remove('active');
	} else {
		menu.classList.add('active');
		this.classList.add('active');
		menu_active = true
		header_nav.classList.add('active');

	}
}


window.addEventListener('scroll', function() {
	header_nav.style.padding = window.pageYOffset > (header.offsetHeight) ? '15px 0' : '';
	logo.style.width = window.pageYOffset > (header.offsetHeight) ? '60px' : '';
	logo.style.height = window.pageYOffset > (header.offsetHeight) ? '60px' : '';  
});	

















