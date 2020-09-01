import ScrollSuave from './modules/scroll-suave.js';
import initScrollAnimation from './modules/scroll-animation.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/initTab.js';
import initModal from './modal/modal.js';
import initToolTip from './modules/toolTip.js';
import initDropDownMenu from './modules/dropDownMenu.js';
import initMenuMobile from './modules/menuMobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNavPictures = new TabNav("[data-tab='menuPicture'] li", "[data-tab='contentPicture'] section");
const tabNavDesenhos = new TabNav("[data-tab='menuDesenhos'] li", "[data-tab='contentDesenhos'] section");
tabNavPictures.init();
tabNavDesenhos.init();

initScrollAnimation();
initModal();
initToolTip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();