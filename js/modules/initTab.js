const activeClass = 'ativo';

export default function initTabNav() {
  const tabMenuPicture = document.querySelectorAll("[data-tab='menuPicture'] li");

  const tabContentPicture = document.querySelectorAll(
    "[data-tab='contentPicture'] section",
  );
  tabContentPicture[0].classList.add(activeClass);

  const tabMenuDesenhos = document.querySelectorAll(
    "[data-tab='menuDesenhos'] li",
  );
  const tabContentDesenhos = document.querySelectorAll(
    "[data-tab='contentDesenhos'] section",
  );
  tabContentDesenhos[0].classList.add('ativo');

  function activeTabPicture(index) {
    tabContentPicture.forEach((section) => {
      section.classList.remove(activeClass);
    });
    const direcao = tabContentDesenhos[index].dataset.anime;
    tabContentPicture[index].classList.add(activeClass, direcao);
  }

  function activeTabDesenhos(index) {
    tabContentDesenhos.forEach((section) => {
      section.classList.remove('ativo');
    });
    const direcao = tabContentDesenhos[index].dataset.anime;
    tabContentDesenhos[index].classList.add('ativo', direcao);
  }

  if (tabMenuPicture.length && tabContentPicture.length) {
    tabMenuPicture.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTabPicture(index);
      });
    });

    tabMenuDesenhos.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTabDesenhos(index);
      });
    });
  }
}