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
    // appendDots: `<button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 2" tabindex="0" aria-selected="true"><i class='bx bx-minus'></i></button>`,
});