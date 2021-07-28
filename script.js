const app = () => {

    const menuItems = document.querySelectorAll('.menu__elem');
    const burger = document.querySelector('.burger__item');
    const menu = document.querySelector('.menu');

    function toggleActive(e) {
        menuItems.forEach(elem => elem.classList.remove('menu__elem_active'));
        this.classList.add('menu__elem_active');
    }

    menuItems.forEach(elem => elem.addEventListener('click', toggleActive));

    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });
}

app();