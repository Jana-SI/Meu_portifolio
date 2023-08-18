function toggleDescricao(button) {
    var cardBody = button.parentElement;
    var cardTextMore = cardBody.querySelector('.card-text-more');
    var icon = button.querySelector('.fas');

    if (cardTextMore.style.display === 'none') {
        cardTextMore.style.display = 'block';
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
        button.innerText = ' Ver Menos';
    } else {
        cardTextMore.style.display = 'none';
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
        button.innerText = ' Ver Mais';
    }
}