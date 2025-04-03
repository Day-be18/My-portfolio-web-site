const { toggleMenu, openModal, closeModal } = require('../script');

describe('toggleMenu', () => {
  test('должен переключать класс active у элемента navbar', () => {
    document.body.innerHTML = '<div class="navbar"></div>';
    const navbar = document.querySelector('.navbar');
    toggleMenu();
    expect(navbar.classList.contains('active')).toBe(true);
    toggleMenu();
    expect(navbar.classList.contains('active')).toBe(false);
  });
});

describe('openModal', () => {
  test('должен открывать модальное окно', () => {
    document.body.innerHTML = '<div id="modal" style="display:none"></div>';
    openModal('modal');
    const modal = document.getElementById('modal');
    expect(modal.style.display).toBe('flex');
  });
});

describe('closeModal', () => {
  test('должен закрывать модальное окно', () => {
    document.body.innerHTML = '<div id="modal" style="display:flex"></div>';
    closeModal('modal');
    const modal = document.getElementById('modal');
    expect(modal.style.display).toBe('none');
  });
});