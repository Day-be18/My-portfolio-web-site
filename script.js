function toggleMenu() {
    const navbar = document.querySelector('.navbar');  // Находим элемент с классом .navbar
    navbar.classList.toggle('active');  // Переключаем класс 'active' у найденного элемента. Если класс есть, он убирается, если нет — добавляется
}

// Путь к файлу вашего портфолио
const portfolioFile = './resume/portfolio_aslanyan_george.pdf'; // Убедитесь, что файл находится в нужной папке

document.getElementById('downloadPortfolio').addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = portfolioFile;
  link.download = 'portfolio_aslanyan_george.pdf'; // Укажите имя файла, которое будет видно пользователю
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
