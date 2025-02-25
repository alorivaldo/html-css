function menushow() {
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src="imagens/menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src= "material-symbols-outlined-close"
    
    
    }
}