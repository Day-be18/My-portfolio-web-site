function toggleMenu() {
    const navbar = document.querySelector('.navbar');  // Находим элемент с классом .navbar
    navbar.classList.toggle('active');  // Переключаем класс 'active' у найденного элемента. Если класс есть, он убирается, если нет — добавляется
}

// Путь к файлу вашего портфолио
const portfolioFile = './resume/Резюме Асланян Георгий Frontend-разработчик.pdf'; // Убедитесь, что файл находится в нужной папке

document.getElementById('downloadPortfolio').addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = portfolioFile;
  link.download = 'resume_aslanyan_george.pdf'; // Укажите имя файла, которое будет видно пользователю
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


//scroll reveal
ScrollReveal({
    reset: true,
    distance: '79px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .contacts, .about-content', { origin: 'top'});
ScrollReveal().reveal('.home-img, .about-img, .services-container', { origin: 'bottom'});

// modal window
function openModal(modalId) {
  document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
     if (event.target === modal) {
        modal.style.display = "none";
     }
  });
};


//dog animation
const dog = document.querySelector(".dog");

if (dog) {
  // Определяем параметры анимации в зависимости от ширины экрана
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const runDuration = isMobile ? 2.5 : 5; // Уменьшаем время анимации в два раза для мобильных устройств
}

// Анимация спрайта (смена кадров)
const spriteAnimation = gsap.to(dog, {
  backgroundPosition: "-600px", // Полный сдвиг для всех кадров (6 кадров)
  duration: 0.7, // Время полного цикла анимации
  ease: "steps(6)", // Анимация по кадрам (6 шагов)
  repeat: -1, // Бесконечная анимация
});

// Анимация движения собаки по экрану
const runAnimation = gsap.to(dog, {
  x: "100vw", // Перемещение собаки на всю ширину экрана
  duration: 5, // Время на полный путь
  repeat: -1, // Бесконечная анимация
  ease: "linear", // Равномерная скорость
});

// Инициализация EmailJS
emailjs.init("5S2HOmeDRuZkQwCi1");

const form = document.getElementById("contact-form");
const button = document.querySelector(".btn");
const statusMessage = document.getElementById("status-message");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Предотвращаем стандартную отправку формы

  // Получение значений из полей
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Установка состояния кнопки
  button.textContent = "Отправляется...";
  button.classList.add("sending");

  // Отправка письма через EmailJS
  emailjs
    .send("service_7k6fsic", "template_rzyaa28", {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    })
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        button.textContent = "Отправлено!";
        button.classList.remove("sending");
        button.classList.add("success");

        // Отображение сообщения об успехе
        statusMessage.textContent = "Сообщение успешно отправлено!";
        statusMessage.style.color = "green";

        // Очистка формы
        form.reset();

        // Возврат к изначальному состоянию через 1 сек.
        setTimeout(() => {
          button.textContent = "Отправить письмо";
          button.classList.remove("success");
          statusMessage.textContent = ""; // Убираем сообщение после 1 сек.
        }, 1000);
      },
      function (error) {
        console.log("FAILED...", error);
        button.textContent = "Ошибка!";
        button.classList.remove("sending");
        button.classList.add("error");

        // Отображение сообщения об ошибке
        statusMessage.textContent = "Произошла ошибка при отправке.";
        statusMessage.style.color = "red";

        // Возврат к изначальному состоянию через 3 сек.
        setTimeout(() => {
          button.textContent = "Отправить письмо";
          button.classList.remove("error");
          statusMessage.textContent = ""; // Убираем сообщение после 3 сек.
        }, 3000);
      }
    );
});

// Инициализация typedjs
const typed = new Typed(".multiple-text", {
  strings: ["Frontend-Разработчик!", "Web-Дизайнер!"],
  typeSpeed: 100,
  backSpeed: 150,
  backDelay: 500,
  loop: true
});