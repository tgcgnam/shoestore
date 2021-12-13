let card__like = document.querySelectorAll(".card__like")

for (let i = 0; i < card__like.length; i++) {

    card__like[i].onclick = function() {
        this.classList.toggle('color_red');
    };

}