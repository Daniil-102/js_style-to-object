'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectOfStyles = {};
  const stylesArray = sourceString.split(';');

  for (let style of stylesArray) {
    if (style.trim().length < 3) {
      continue;
    }

    style = style.split(':').map((s) => s.trim());
    objectOfStyles[style[0]] = style[1];
  }

  return objectOfStyles;
}

module.exports = convertToObject;
