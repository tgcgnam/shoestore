let card__like = document.querySelectorAll(".card__like")

for (let i = 0; i < card__like.length; i++) {

    card__like[i].onclick = function() {
        this.classList.toggle('color_red');
    };

}
$('.slide__banner').slick({
    dots: true,
    prevArrow: `<button class="slick-prev slick-arrow" aria-label="prev" type="button" style="display: block;"><i class='bx bx-chevron-left'></i></button>`,
    nextArrow: `<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"><i class='bx bx-chevron-right' ></i></button>`,
});