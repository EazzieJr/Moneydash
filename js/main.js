const html = document.querySelector('html')

window.onload(setTimeout(() => {
    AOS.init();
}, 10700));

$('[data-aos]').parent().addClass('hideOverflowOnMobile');

