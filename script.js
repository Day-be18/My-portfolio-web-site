function toggleMenu() {
    const navbar = document.querySelector('.navbar');  // Находим элемент с классом .navbar
    navbar.classList.toggle('active');  // Переключаем класс 'active' у найденного элемента. Если класс есть, он убирается, если нет — добавляется
}