import ScrollSuave from './modules/scroll-suave.js';
import ScrollAnima from './modules/scroll-anima.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/initTab.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/toolTip.js';
import DropDownMenu from './modules/dropDownMenu.js';
import MenuMobile from './modules/menuMobile.js';
import Funcionamento from './modules/funcionamento.js';
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

const scrollAnima = new ScrollAnima('[data-anime="scroll"]')
scrollAnima.init();

const dropDownMenu = new DropDownMenu('[data-dropDown]');
dropDownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"', '[data-menu="lista"');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();

fetchAnimais('./animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');