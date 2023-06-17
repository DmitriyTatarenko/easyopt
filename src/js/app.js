/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый (не вызванный) код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
} from './modules';

import addInputs from './modules/addInputs';
import createTxt from './modules/createTxt';
import createNewSelect from './modules/createNewSelect'; 
import totalSumm from './modules/totalSumm';
import goUp from './modules/goUp';

import addInputsForSale from './modules/addInputsForSale';
import createTxtForSale from './modules/createTxtForSale';
import createNewSelectForSale from './modules/createNewSelectForSale';
import totalSummForSale from './modules/totalSummForSale';


//HTML-код Селекта для Лакталис
const laktalisInner = `
<select id="1" data-val="" class="choose__wrapper_item-select-list">
  <option value="0" selected class="choose__wrapper_item-select-option">-/-</option>
  <option value="11.7" class="choose__wrapper_item-select-option">Айран Лактель</option>
  <option value="45.9" class="choose__wrapper_item-select-option">Вершки 10%</option>
  <option value="30.6" class="choose__wrapper_item-select-option">Десерт Аерований Ананас 200г</option>
  <option value="30.6" class="choose__wrapper_item-select-option">Десерт Аерований Полуниця 200г</option>
  <option value="18.9" class="choose__wrapper_item-select-option">Десерт Віденські вафлі 130г</option>
  <option value="27" class="choose__wrapper_item-select-option">Десерт Банан-Шоколад 200г</option>
  <option value="27" class="choose__wrapper_item-select-option">Десерт Вишня-Шоколад 200г</option>
  <option value="39.6" class="choose__wrapper_item-select-option">Десерт Банан-Шоколад 300г</option>
  <option value="40.5" class="choose__wrapper_item-select-option">Десерт Вишня 300г</option>
  <option value="39.6" class="choose__wrapper_item-select-option">Десерт Вишня-Шоколад 300г</option>
  <option value="43.2" class="choose__wrapper_item-select-option">Десерт Полуниця-Ківі 350г</option>
  <option value="25.2" class="choose__wrapper_item-select-option">Десерт Персик 200г</option>
  <option value="25.2" class="choose__wrapper_item-select-option">Десерт Полуниця 200г</option>
  <option value="27" class="choose__wrapper_item-select-option">Десерт Полуниця-Ківі-Шоколад 200г</option>
  <option value="18.45" class="choose__wrapper_item-select-option">Десерт Фанні 150г</option>
  <option value="41.4" class="choose__wrapper_item-select-option">Закваска Ананас</option>
  <option value="41.4" class="choose__wrapper_item-select-option">Закваска Л.Ягода</option>
  <option value="27" class="choose__wrapper_item-select-option">Йогурт стакан Ан.Диня</option>
  <option value="27" class="choose__wrapper_item-select-option">Йогурт стакан Перс.Маракуя</option>
  <option value="27" class="choose__wrapper_item-select-option">Йогурт стакан Полуниця</option>
  <option value="27" class="choose__wrapper_item-select-option">Йогурт стакан Ківі</option>
  <option value="27" class="choose__wrapper_item-select-option">Йогурт стакан Банан-Лічі</option>
  <option value="21.6" class="choose__wrapper_item-select-option">Йогурт 290г бут. Вишня</option>
  <option value="21.6" class="choose__wrapper_item-select-option">Йогурт 290г бут. Л.Ягода</option>
  <option value="21.6" class="choose__wrapper_item-select-option">Йогурт 290г бут. Манго</option>
  <option value="21.6" class="choose__wrapper_item-select-option">Йогурт 290г бут. Персик</option>
  <option value="21.6" class="choose__wrapper_item-select-option">Йогурт 290г бут. Полуниця</option>
  <option value="9.9" class="choose__wrapper_item-select-option">Йогурт ЛокоМоко Персик</option>
  <option value="9.9" class="choose__wrapper_item-select-option">Йогурт ЛокоМоко Малина</option>
  <option value="9.9" class="choose__wrapper_item-select-option">Йогурт ЛокоМоко Ябл-Груша</option>
  <option value="9.9" class="choose__wrapper_item-select-option">Йогурт ЛокоМоко Банан</option>
  <option value="9.9" class="choose__wrapper_item-select-option">Йогурт ЛокоМоко Полуниця</option>
  <option value="10.35" class="choose__wrapper_item-select-option">Йогурт Фанні 115г Вишня</option>
  <option value="10.35" class="choose__wrapper_item-select-option">Йогурт Фанні 115г Персик</option>
  <option value="10.35" class="choose__wrapper_item-select-option">Йогурт Фанні 115г Полуниця</option>
  <option value="10.35" class="choose__wrapper_item-select-option">Йогурт Фанні 115г Л.Ягода</option>
  <option value="38.7" class="choose__wrapper_item-select-option">Йогурт Фанні 0,7 Персик</option>
  <option value="38.7" class="choose__wrapper_item-select-option">Йогурт Фанні 0,7 Полун-Банан</option>
  <option value="38.7" class="choose__wrapper_item-select-option">Йогурт Фанні 0,7 Малина</option>
  <option value="38.7" class="choose__wrapper_item-select-option">Йогурт Фанні 0,7 Чорниця</option>
  <option value="34.65" class="choose__wrapper_item-select-option">Кефір Лактонія 0,78</option>
  <option value="13.05" class="choose__wrapper_item-select-option">Кефір Фанні 0,5%</option>
  <option value="15.3" class="choose__wrapper_item-select-option">Кефір Фанні 2,5%</option>
  <option value="42.3" class="choose__wrapper_item-select-option">Молоко Лактель 3,2% 1л</option>
  <option value="37.8" class="choose__wrapper_item-select-option">Молоко Лактель 2,5% 1л</option>
  <option value="38.7" class="choose__wrapper_item-select-option">Сир 9% Курага</option>
  <option value="36" class="choose__wrapper_item-select-option">Сир Шостка 150г Вершковий ст.</option>
  <option value="14.44" class="choose__wrapper_item-select-option">Сир В.Корівка 70г Вершковий</option>
  <option value="14.44" class="choose__wrapper_item-select-option">Сир В.Корівка 70г Зелень</option>
  <option value="14.44" class="choose__wrapper_item-select-option">Сир В.Корівка 70г Гриби</option>
  <option value="14.44" class="choose__wrapper_item-select-option">Сир В.Корівка 70г Дружба</option>
  <option value="44.1" class="choose__wrapper_item-select-option">Сир В.Корівка 150г Вершковий</option>
  <option value="14.44" class="choose__wrapper_item-select-option">Сир Президент 70г Вершковий</option>
  <option value="14.44" class="choose__wrapper_item-select-option">Сир Президент 70г Гриби</option>
  <option value="12.6" class="choose__wrapper_item-select-option">Сир Шостка 90г Вершковий</option>
  <option value="12.6" class="choose__wrapper_item-select-option">Сир Шостка 90г Голандський</option>
  <option value="12.6" class="choose__wrapper_item-select-option">Сир Шостка 90г Дружба</option>
  <option value="11.6" class="choose__wrapper_item-select-option">Сир Шостка 70г Дружба</option>
  <option value="56.7" class="choose__wrapper_item-select-option">Сир Творожна Традиція 5% Флоу-Пак</option>
  <option value="63" class="choose__wrapper_item-select-option">Сир Творожна Традиція 9% Термо</option>
  <option value="9.9" class="choose__wrapper_item-select-option">Сирок глаз. Вишня</option>
  <option value="9.9" class="choose__wrapper_item-select-option">Сирок глаз. Полуниця</option>
  <option value="32.4" class="choose__wrapper_item-select-option">Сметана п/е 15%</option>
  <option value="39.6" class="choose__wrapper_item-select-option">Сметана п/е 20%</option>
  <option value="36" class="choose__wrapper_item-select-option">Сметана стакан 15%</option>
  <option value="26" class="choose__wrapper_item-select-option">Сметана стакан 200г 20%</option>
  <option value="41.4" class="choose__wrapper_item-select-option">Сметана стакан 20%</option>
</select>`;

//CONSTS FOR 1-st PAGE(EASY OPT)
const chooseSelectList = '.choose__wrapper_item-select-list'; 
const resultText = '.result__text';                           

//CONSTS FOR 2-nd PAGE(SALE!)
const saleSelectList = '.sale__wrapper_items-item-select';
const discountText = '.discount__text';



//FUNCTION FOR 1-st PAGE (EASY OPT)
if(document.querySelector(chooseSelectList)) {
addInputs(chooseSelectList);
createTxt(chooseSelectList, resultText);
createNewSelect('.laktalis', '.laktalis-item', laktalisInner, 'choose__wrapper_create-select', chooseSelectList, chooseSelectList, resultText, 'choose__wrapper_item-select');
totalSumm(resultText, '.result__text_btn', '.result__text_item', '.result__text_summ', 'result__text_summ');
goUp();
}

//FUNCTION FOR 2-ND PAGE(SALE!)
if (document.querySelector(saleSelectList)) {
  addInputsForSale();
  createTxtForSale(saleSelectList, discountText);
  createNewSelectForSale('.sale__wrapper_item-create-select', '.laktalis-item', laktalisInner, 'laktalis sale__wrapper_item-create-select', saleSelectList, saleSelectList, discountText, 'sale__wrapper_item-select');
  totalSummForSale(discountText, '.discount__text_btn', '.discount__text_item', '.discount__text_summ', 'discount__text_summ');
  
}







// import BurgerMenu from './modules/BurgerMenu';

// import Tabs from 'modules/Tabs';

// import { MousePRLX } from './libs/parallaxMouse'

// import AOS from 'aos'

// import Swiper, { Navigation, Pagination } from 'swiper';

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
 ! (i) необходимо для корректного отображения webp из css
 */
isWebp();

/* Добавление класса touch для HTML если браузер мобильный */
// addTouchClass();

/* Добавление loaded для HTML после полной загрузки страницы */
// addLoadedClass();

/* Модуль для работы с меню (Бургер) */
// new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();

/** Параллакс мышей */
// const mousePrlx = new MousePRLX({});

/** Фиксированный header */
// headerFixed();

/**
 *  Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

 * На обертку(враппер) окна добавь класс _overlay-bg
 * На кнопку для закрытия окна добавь класс button-close
 */
// togglePopupWindows();

// const tabs = new Tabs('default-tabs', {});