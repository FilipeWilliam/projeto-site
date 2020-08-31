import outSideClick from './outSideClick.js';

export default function initDropDownMenu() {
  const dropDownMenus = document.querySelectorAll('[data-dropDown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outSideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }

  dropDownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}