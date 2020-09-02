import ScrollSuave from './modules/scroll-suave.js';
import initScrollAnimation from './modules/scroll-animation.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/initTab.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/toolTip.js';
import initDropDownMenu from './modules/dropDownMenu.js';
import initMenuMobile from './modules/menuMobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNavPictures = new TabNav("[data-tab='menuPicture'] li", "[data-tab='contentPicture'] section");
const tabNavDesenhos = new TabNav("[data-tab='menuDesenhos'] li", "[data-tab='contentDesenhos'] section");
tabNavPictures.init();
tabNavDesenhos.init();

const modal = new Modal("[data-modal='abrir']", "[data-modal='fechar']", "[data-modal='container']");
modal.init();

const toolTip = new ToolTip('[data-toolTip]');
toolTip.init();

initScrollAnimation();
initDropDownMenu();
initMenuMobile();
initFuncionamento();

fetchAnimais('../../animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');