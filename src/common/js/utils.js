/**
 * Определяет время до наступления некоторого события
 * @param  {Date}   endtime Дата и время натсупления события
 * @return {Object}         Количество дней, часов, минут и секунд до натсупления события
 */
export const getTimeRemaining = (endtime) => {
  const total = endtime.getTime() - Date.now();
  return {
    total,
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / 1000 / 60) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
};


/**
 * Подстановка лидирующего нуля для чисел от 1 до 9
 * @param  {String} value Число, которое нужно обработать
 * @return {String}       Обработанное число
 */
export const setLeadingZero = value => (value < 10) ? `0${value}` : value;

/**
 * Определяет координаты текущего положения скролла страницы
 * @return {Number}
 */
export const getCurrentScrollPosition = () => {
  if (window.pageYOffset) {
    return window.pageYOffset;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    return document.documentElement.scrollTop;
  } else if (document.body) {
    return document.body.scrollTop;
  }
};
