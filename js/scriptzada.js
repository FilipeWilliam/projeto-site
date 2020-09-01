import ScrollSuave from './modules/scroll-suave.js';
import initScrollAnimation from './modules/scroll-animation.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/initTab.js';
import initModal from './modal/modal.js';
import initToolTip from './modules/toolTip.js';
import initDropDownMenu from './modules/dropDownMenu.js';
import initMenuMobile from './modules/menuMobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initScrollAnimation();
initAccordion();
initTabNav();
initModal();
initToolTip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();