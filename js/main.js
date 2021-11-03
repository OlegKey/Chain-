let getRandomArbitrary = ((min, max) => {
    $('.register-now__count-number').html(Math.round( min - 0.5 + Math.random() * (max - min + 1)))
})

getRandomArbitrary(160, 299);

setInterval(function (){
    getRandomArbitrary(160, 299);
}, 10000)

const date = new Date();

$('.full-year').html(date.getFullYear())

$(".scroll-to-form").click(function () {
    let elementClick = $(this).attr("href");
    let destination = $(elementClick).offset().top;
    $('body').animate({ scrollTop: destination }, 700);
    return false;
});

let modalPrivacy = $('#desc_modal');

$('.open-privacy, .modal-header button, .modal-footer button').click(function (e) {
    e.preventDefault()
    modalPrivacy.toggleClass('open-modal-window')
    $('body').toggleClass('body-open-modal')
});

const nameEmail = `${window.location.host}@gmail.com`

$( ".email" ).each(function() {
   $(this).attr('href', `mailto:${nameEmail}`);
   $(this).html(nameEmail);
});