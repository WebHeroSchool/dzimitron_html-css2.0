const app = () => {

    const menuItems = document.querySelectorAll('.menu__elem');

    function toggleActive(e) {
        menuItems.forEach(elem => elem.classList.remove('menu__elem_active'));
        this.classList.add('menu__elem_active');
    }

    menuItems.forEach(elem => elem.addEventListener('click', toggleActive));
}

app();