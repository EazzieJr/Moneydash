const html = document.querySelector('html')

window.onload(setTimeout(() => {
    AOS.init();
}, 10700));

window.onload(
    $('html, body').animate({ scrollTop: 0 }, 'normal')
)
$('[data-aos]').parent().addClass('hideOverflowOnMobile');

