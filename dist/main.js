/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    height: 100vh;\r\n    background-color: rgb(130, 102, 82);\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.row {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.square {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n\r\n.dark {\r\n    background-color: #B88762;\r\n}\r\n\r\n.light {\r\n    background-color: #EDD6B0;\r\n}\r\n\r\n.fen-section {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n}\r\n\r\n#fen-input {\r\n    width: 600px;\r\n}\r\n\r\n#fen-set {\r\n    height: 40px;\r\n}\r\n\r\n.piece {\r\n    width: 80px;\r\n    height: 80px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   board: () => (/* binding */ board)\n/* harmony export */ });\n/* harmony import */ var _pieces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pieces */ \"./src/pieces.js\");\n\r\n\r\nconst board = () => {\r\n    const squares = [];\r\n\r\n    const setBoard = fen => {\r\n        squares.length = 0;\r\n        const rows = fen.split(\" \")[0].split(\"/\");\r\n        let position = 0;\r\n        for (let i = 0; i < rows.length; i++) {\r\n            const row = [];\r\n\r\n            for (let j = 0; j < rows[i].length; j++) {\r\n                const letter = rows[i][j];\r\n\r\n                if (parseInt(letter)) {\r\n                    for (let k = 0; k < Number(letter); k++) {\r\n                        row.push((0,_pieces__WEBPACK_IMPORTED_MODULE_0__.Empty)(position));\r\n                        position += 1;\r\n                    }\r\n                    continue;\r\n                }\r\n\r\n                const capitalLetter = letter.toUpperCase();\r\n                const color = capitalLetter === letter ? \"light\" : \"dark\";\r\n\r\n                if (capitalLetter === \"P\") {\r\n                    row.push((0,_pieces__WEBPACK_IMPORTED_MODULE_0__.Pawn)(color, position, false));\r\n                } else if (capitalLetter === \"N\") {\r\n                    row.push((0,_pieces__WEBPACK_IMPORTED_MODULE_0__.Knight)(color, position));\r\n                } else if (capitalLetter === \"B\") {\r\n                    row.push((0,_pieces__WEBPACK_IMPORTED_MODULE_0__.Bishop)(color, position));\r\n                } else if (capitalLetter === \"R\") {\r\n                    row.push((0,_pieces__WEBPACK_IMPORTED_MODULE_0__.Rook)(color, position, false));\r\n                } else if (capitalLetter === \"K\") {\r\n                    row.push((0,_pieces__WEBPACK_IMPORTED_MODULE_0__.King)(color, position, false));\r\n                } else if (capitalLetter === \"Q\") {\r\n                    row.push((0,_pieces__WEBPACK_IMPORTED_MODULE_0__.Queen)(color, position));\r\n                }\r\n                position += 1;\r\n            }\r\n            squares.push(row);\r\n        }\r\n    };\r\n\r\n    const getSquare = position => {\r\n        if (position < 0 || position > 63) return null;\r\n\r\n        const row = Math.floor(position / 8);\r\n        const square = position % 8;\r\n\r\n        return squares[row][square];\r\n    };\r\n\r\n    const rowsTravelled = (start, target) => {\r\n        const startRow = Math.floor(start / 8);\r\n        const targetRow = Math.floor(target / 8);\r\n\r\n        return Math.abs(startRow - targetRow);\r\n    };\r\n\r\n    return { squares, getSquare, setBoard, rowsTravelled };\r\n};\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/board.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawBoard: () => (/* binding */ drawBoard)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\n\r\nconst fenInput = document.querySelector(\"#fen-input\");\r\nconst fenButton = document.querySelector(\"#fen-set\");\r\nconst boardDiv = document.querySelector(\".board\");\r\n\r\nfunction drawBoard(board) {\r\n    boardDiv.innerHTML = \"\";\r\n    for (const row of board) {\r\n        const rowDiv = document.createElement(\"div\");\r\n        rowDiv.classList.add(\"row\");\r\n        for (const square of row) {\r\n            const squareDiv = document.createElement(\"div\");\r\n            squareDiv.classList.add(\"square\");\r\n\r\n            if (square.name !== \"empty\") {\r\n                const figureSvg = document.createElement(\"img\");\r\n                figureSvg.setAttribute(\"src\", square.icon);\r\n                figureSvg.classList.add(\"piece\");\r\n                squareDiv.appendChild(figureSvg);\r\n            }\r\n\r\n            if ((board.indexOf(row) + square.position) % 2 == 0) {\r\n                squareDiv.classList.add(\"light\");\r\n            } else {\r\n                squareDiv.classList.add(\"dark\");\r\n            }\r\n\r\n            rowDiv.appendChild(squareDiv);\r\n        }\r\n\r\n        boardDiv.appendChild(rowDiv);\r\n    }\r\n}\r\n\r\nfenButton.addEventListener(\"click\", () => {\r\n    _index_js__WEBPACK_IMPORTED_MODULE_1__.chessBoard.setBoard(fenInput.value);\r\n    drawBoard(_index_js__WEBPACK_IMPORTED_MODULE_1__.chessBoard.squares);\r\n});\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   chessBoard: () => (/* binding */ chessBoard)\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\r\n\r\n\r\nconst startingFEN = \"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1\";\r\n\r\nconst chessBoard = (0,_board__WEBPACK_IMPORTED_MODULE_0__.board)();\r\nchessBoard.setBoard(startingFEN);\r\n(0,_dom__WEBPACK_IMPORTED_MODULE_1__.drawBoard)(chessBoard.squares);\r\n\r\nconst threatMap = {};\r\n\r\nconsole.log(generateMoves(chessBoard.getSquare(1)));\r\nconsole.log(threatMap);\r\n\r\nfunction generateMoves(piece) {\r\n    const moves = [];\r\n\r\n    if (piece.name === \"pawn\") {\r\n        for (const offset of piece.offsets) {\r\n            const target = chessBoard.getSquare(piece.position + offset);\r\n            if (!target) continue;\r\n\r\n            if (offset % 2 === 0) {\r\n                if (target.name === \"empty\") {\r\n                    moves.push(target.position);\r\n\r\n                    if (!piece.hasMoved && chessBoard.getSquare(target.position + offset).name === \"empty\") {\r\n                        moves.push(target.position + offset);\r\n                    }\r\n                }\r\n            } else {\r\n                const rows = chessBoard.rowsTravelled(piece.position, target.position);\r\n\r\n                if (rows === 1) {\r\n                    pushThreatMap(piece, target);\r\n\r\n                    if (target.name !== \"empty\" && target.color !== piece.color) {\r\n                        moves.push(target.position);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    } else if (piece.name === \"knight\") {\r\n        for (const offset of piece.offsets) {\r\n            const target = chessBoard.getSquare(piece.position + offset);\r\n            if (!target) continue;\r\n\r\n            const rows = chessBoard.rowsTravelled(piece.position, target.position);\r\n\r\n            if ((offset % 2 === 0 && rows === 1) || (offset % 2 !== 0 && rows === 2)) {\r\n                pushThreatMap(piece, target);\r\n                if (target.name === \"empty\" || target.color !== piece.color) {\r\n                    moves.push(target.position);\r\n                }\r\n            }\r\n        }\r\n    } else if (piece.name === \"king\") {\r\n        for (const offset of piece.offsets) {\r\n            const target = chessBoard.getSquare(piece.position + offset);\r\n            if (!target) continue;\r\n\r\n            const rows = chessBoard.rowsTravelled(piece.position, target.position);\r\n\r\n            if (rows === 1 || rows === 0) {\r\n                pushThreatMap(piece, target);\r\n                if (target.name === \"empty\" || target.color !== piece.color) {\r\n                    moves.push(target.position);\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    return moves;\r\n}\r\n\r\nfunction pushThreatMap(attacker, target) {\r\n    if (threatMap[target.position]) {\r\n        threatMap[target.position].push(attacker);\r\n    } else {\r\n        threatMap[target.position] = [attacker];\r\n    }\r\n}\r\n\r\nfunction findEnemyThreats(currentColor) {\r\n    const threats = [];\r\n\r\n    for (const [key, value] of Object.entries(threatMap)) {\r\n        for (const attacker of value) {\r\n            if (attacker.color !== currentColor) {\r\n                threats.push(Number(key));\r\n            }\r\n        }\r\n    }\r\n\r\n    return threats;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/pieces.js":
/*!***********************!*\
  !*** ./src/pieces.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Bishop: () => (/* binding */ Bishop),\n/* harmony export */   Empty: () => (/* binding */ Empty),\n/* harmony export */   King: () => (/* binding */ King),\n/* harmony export */   Knight: () => (/* binding */ Knight),\n/* harmony export */   Pawn: () => (/* binding */ Pawn),\n/* harmony export */   Queen: () => (/* binding */ Queen),\n/* harmony export */   Rook: () => (/* binding */ Rook)\n/* harmony export */ });\nconst reqSvgs = __webpack_require__(\"./src/svgs/figures sync recursive \\\\.svg$\");\r\nconst paths = reqSvgs.keys();\r\nconst svgs = paths.map(path => reqSvgs(path));\r\n\r\nconst Pawn = (color, position, hasMoved) => {\r\n    const name = \"pawn\";\r\n    const offsets = [];\r\n    let icon;\r\n\r\n    if (color === \"dark\") {\r\n        icon = svgs[paths.indexOf(\"./dPawn.svg\")];\r\n        offsets.push(7, 8, 9);\r\n    } else {\r\n        offsets.push(-7, -8, -9);\r\n        icon = svgs[paths.indexOf(\"./lPawn.svg\")];\r\n    }\r\n\r\n    return { color, position, hasMoved, icon, name, offsets };\r\n};\r\n\r\nconst Knight = (color, position) => {\r\n    const name = \"knight\";\r\n    const offsets = [-17, -15, -6, 10, 17, 15, 6, -10];\r\n    let icon;\r\n\r\n    if (color === \"dark\") {\r\n        icon = svgs[paths.indexOf(\"./dKnight.svg\")];\r\n    } else {\r\n        icon = svgs[paths.indexOf(\"./lKnight.svg\")];\r\n    }\r\n\r\n    return { color, position, icon, name, offsets };\r\n};\r\n\r\nconst Bishop = (color, position) => {\r\n    const name = \"bishop\";\r\n    const offsets = [-9, 9, -7, 7];\r\n    let icon;\r\n\r\n    if (color === \"dark\") {\r\n        icon = svgs[paths.indexOf(\"./dBishop.svg\")];\r\n    } else {\r\n        icon = svgs[paths.indexOf(\"./lBishop.svg\")];\r\n    }\r\n\r\n    return { color, position, icon, name, offsets };\r\n};\r\n\r\nconst Rook = (color, position, hasMoved) => {\r\n    const name = \"rook\";\r\n    const offsets = [-1, 1, -8, 8];\r\n    let icon;\r\n\r\n    if (color === \"dark\") {\r\n        icon = svgs[paths.indexOf(\"./dRook.svg\")];\r\n    } else {\r\n        icon = svgs[paths.indexOf(\"./lRook.svg\")];\r\n    }\r\n\r\n    return { color, position, hasMoved, icon, name, offsets };\r\n};\r\n\r\nconst Queen = (color, position) => {\r\n    const name = \"queen\";\r\n    const offsets = [-1, 1, -8, 8, -9, 9, -7, 7];\r\n    let icon;\r\n\r\n    if (color === \"dark\") {\r\n        icon = svgs[paths.indexOf(\"./dQueen.svg\")];\r\n    } else {\r\n        icon = svgs[paths.indexOf(\"./lQueen.svg\")];\r\n    }\r\n\r\n    return { color, position, icon, name, offsets };\r\n};\r\n\r\nconst King = (color, position, hasMoved) => {\r\n    const name = \"king\";\r\n    const offsets = [-9, -8, -7, -1, 1, 7, 8, 9];\r\n    let icon;\r\n\r\n    if (color === \"dark\") {\r\n        icon = svgs[paths.indexOf(\"./dKing.svg\")];\r\n    } else {\r\n        icon = svgs[paths.indexOf(\"./lKing.svg\")];\r\n    }\r\n\r\n    return { color, position, hasMoved, icon, name, offsets };\r\n};\r\n\r\nconst Empty = position => {\r\n    const name = \"empty\";\r\n    return { name, position };\r\n};\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/pieces.js?");

/***/ }),

/***/ "./src/svgs/figures sync recursive \\.svg$":
/*!***************************************!*\
  !*** ./src/svgs/figures/ sync \.svg$ ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./dBishop.svg\": \"./src/svgs/figures/dBishop.svg\",\n\t\"./dKing.svg\": \"./src/svgs/figures/dKing.svg\",\n\t\"./dKnight.svg\": \"./src/svgs/figures/dKnight.svg\",\n\t\"./dPawn.svg\": \"./src/svgs/figures/dPawn.svg\",\n\t\"./dQueen.svg\": \"./src/svgs/figures/dQueen.svg\",\n\t\"./dRook.svg\": \"./src/svgs/figures/dRook.svg\",\n\t\"./lBishop.svg\": \"./src/svgs/figures/lBishop.svg\",\n\t\"./lKing.svg\": \"./src/svgs/figures/lKing.svg\",\n\t\"./lKnight.svg\": \"./src/svgs/figures/lKnight.svg\",\n\t\"./lPawn.svg\": \"./src/svgs/figures/lPawn.svg\",\n\t\"./lQueen.svg\": \"./src/svgs/figures/lQueen.svg\",\n\t\"./lRook.svg\": \"./src/svgs/figures/lRook.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/svgs/figures sync recursive \\\\.svg$\";\n\n//# sourceURL=webpack://my-webpack-project/./src/svgs/figures/_sync_\\.svg$?");

/***/ }),

/***/ "./src/svgs/figures/dBishop.svg":
/*!**************************************!*\
  !*** ./src/svgs/figures/dBishop.svg ***!
  \**************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ij4NCiAgPGcgc3R5bGU9Im9wYWNpdHk6MTsgZmlsbDpub25lOyBmaWxsLXJ1bGU6ZXZlbm9kZDsgZmlsbC1vcGFjaXR5OjE7IHN0cm9rZTojMDAwMDAwOyBzdHJva2Utd2lkdGg6MS41OyBzdHJva2UtbGluZWNhcDpyb3VuZDsgc3Ryb2tlLWxpbmVqb2luOnJvdW5kOyBzdHJva2UtbWl0ZXJsaW1pdDo0OyBzdHJva2UtZGFzaGFycmF5Om5vbmU7IHN0cm9rZS1vcGFjaXR5OjE7IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDAuNikiPg0KICAgIDxnIHN0eWxlPSJmaWxsOiMwMDAwMDA7IHN0cm9rZTojMDAwMDAwOyBzdHJva2UtbGluZWNhcDpidXR0OyI+DQogICAgICA8cGF0aCBkPSJNIDksMzYgQyAxMi4zOSwzNS4wMyAxOS4xMSwzNi40MyAyMi41LDM0IEMgMjUuODksMzYuNDMgMzIuNjEsMzUuMDMgMzYsMzYgQyAzNiwzNiAzNy42NSwzNi41NCAzOSwzOCBDIDM4LjMyLDM4Ljk3IDM3LjM1LDM4Ljk5IDM2LDM4LjUgQyAzMi42MSwzNy41MyAyNS44OSwzOC45NiAyMi41LDM3LjUgQyAxOS4xMSwzOC45NiAxMi4zOSwzNy41MyA5LDM4LjUgQyA3LjY1LDM4Ljk5IDYuNjgsMzguOTcgNiwzOCBDIDcuMzUsMzYuNTQgOSwzNiA5LDM2IHoiLz4NCiAgICAgIDxwYXRoIGQ9Ik0gMTUsMzIgQyAxNy41LDM0LjUgMjcuNSwzNC41IDMwLDMyIEMgMzAuNSwzMC41IDMwLDMwIDMwLDMwIEMgMzAsMjcuNSAyNy41LDI2IDI3LjUsMjYgQyAzMywyNC41IDMzLjUsMTQuNSAyMi41LDEwLjUgQyAxMS41LDE0LjUgMTIsMjQuNSAxNy41LDI2IEMgMTcuNSwyNiAxNSwyNy41IDE1LDMwIEMgMTUsMzAgMTQuNSwzMC41IDE1LDMyIHoiLz4NCiAgICAgIDxwYXRoIGQ9Ik0gMjUgOCBBIDIuNSAyLjUgMCAxIDEgIDIwLDggQSAyLjUgMi41IDAgMSAxICAyNSA4IHoiLz4NCiAgICA8L2c+DQogICAgPHBhdGggZD0iTSAxNy41LDI2IEwgMjcuNSwyNiBNIDE1LDMwIEwgMzAsMzAgTSAyMi41LDE1LjUgTCAyMi41LDIwLjUgTSAyMCwxOCBMIDI1LDE4IiBzdHlsZT0iZmlsbDpub25lOyBzdHJva2U6I2ZmZmZmZjsgc3Ryb2tlLWxpbmVqb2luOm1pdGVyOyIvPg0KICA8L2c+DQo8L3N2Zz4NCg==\";\n\n//# sourceURL=webpack://my-webpack-project/./src/svgs/figures/dBishop.svg?");

/***/ }),

/***/ "./src/svgs/figures/dKing.svg":
/*!************************************!*\
  !*** ./src/svgs/figures/dKing.svg ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ij4NCiAgPGcgc3R5bGU9ImZpbGw6bm9uZTsgZmlsbC1vcGFjaXR5OjE7IGZpbGwtcnVsZTpldmVub2RkOyBzdHJva2U6IzAwMDAwMDsgc3Ryb2tlLXdpZHRoOjEuNTsgc3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7IHN0cm9rZS1kYXNoYXJyYXk6bm9uZTsgc3Ryb2tlLW9wYWNpdHk6MTsiPg0KICAgIDxwYXRoIGQ9Ik0gMjIuNSwxMS42MyBMIDIyLjUsNiIgc3R5bGU9ImZpbGw6bm9uZTsgc3Ryb2tlOiMwMDAwMDA7IHN0cm9rZS1saW5lam9pbjptaXRlcjsiIGlkPSJwYXRoNjU3MCIvPg0KICAgIDxwYXRoIGQ9Ik0gMjIuNSwyNSBDIDIyLjUsMjUgMjcsMTcuNSAyNS41LDE0LjUgQyAyNS41LDE0LjUgMjQuNSwxMiAyMi41LDEyIEMgMjAuNSwxMiAxOS41LDE0LjUgMTkuNSwxNC41IEMgMTgsMTcuNSAyMi41LDI1IDIyLjUsMjUiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7IHN0cm9rZS1saW5lY2FwOmJ1dHQ7IHN0cm9rZS1saW5lam9pbjptaXRlcjsiLz4NCiAgICA8cGF0aCBkPSJNIDEyLjUsMzcgQyAxOCw0MC41IDI3LDQwLjUgMzIuNSwzNyBMIDMyLjUsMzAgQyAzMi41LDMwIDQxLjUsMjUuNSAzOC41LDE5LjUgQyAzNC41LDEzIDI1LDE2IDIyLjUsMjMuNSBMIDIyLjUsMjcgTCAyMi41LDIzLjUgQyAyMCwxNiAxMC41LDEzIDYuNSwxOS41IEMgMy41LDI1LjUgMTIuNSwzMCAxMi41LDMwIEwgMTIuNSwzNyIgc3R5bGU9ImZpbGw6IzAwMDAwMDsgc3Ryb2tlOiMwMDAwMDA7Ii8+DQogICAgPHBhdGggZD0iTSAyMCw4IEwgMjUsOCIgc3R5bGU9ImZpbGw6bm9uZTsgc3Ryb2tlOiMwMDAwMDA7IHN0cm9rZS1saW5lam9pbjptaXRlcjsiLz4NCiAgICA8cGF0aCBkPSJNIDMyLDI5LjUgQyAzMiwyOS41IDQwLjUsMjUuNSAzOC4wMywxOS44NSBDIDM0LjE1LDE0IDI1LDE4IDIyLjUsMjQuNSBMIDIyLjUsMjYuNiBMIDIyLjUsMjQuNSBDIDIwLDE4IDEwLjg1LDE0IDYuOTcsMTkuODUgQyA0LjUsMjUuNSAxMywyOS41IDEzLDI5LjUiIHN0eWxlPSJmaWxsOm5vbmU7IHN0cm9rZTojZmZmZmZmOyIvPg0KICAgIDxwYXRoIGQ9Ik0gMTIuNSwzMCBDIDE4LDI3IDI3LDI3IDMyLjUsMzAgTSAxMi41LDMzLjUgQyAxOCwzMC41IDI3LDMwLjUgMzIuNSwzMy41IE0gMTIuNSwzNyBDIDE4LDM0IDI3LDM0IDMyLjUsMzciIHN0eWxlPSJmaWxsOm5vbmU7IHN0cm9rZTojZmZmZmZmOyIvPg0KICA8L2c+DQo8L3N2Zz4NCg==\";\n\n//# sourceURL=webpack://my-webpack-project/./src/svgs/figures/dKing.svg?");

/***/ }),

/***/ "./src/svgs/figures/dKnight.svg":
/*!**************************************!*\
  !*** ./src/svgs/figures/dKnight.svg ***!
  \**************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ij4NCiAgPGcgc3R5bGU9Im9wYWNpdHk6MTsgZmlsbDpub25lOyBmaWxsLW9wYWNpdHk6MTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IHN0cm9rZTojMDAwMDAwOyBzdHJva2Utd2lkdGg6MS41OyBzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDsgc3Ryb2tlLWRhc2hhcnJheTpub25lOyBzdHJva2Utb3BhY2l0eToxOyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwLjMpIj4NCiAgICA8cGF0aA0KICAgICAgZD0iTSAyMiwxMCBDIDMyLjUsMTEgMzguNSwxOCAzOCwzOSBMIDE1LDM5IEMgMTUsMzAgMjUsMzIuNSAyMywxOCINCiAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7IHN0cm9rZTojMDAwMDAwOyIgLz4NCiAgICA8cGF0aA0KICAgICAgZD0iTSAyNCwxOCBDIDI0LjM4LDIwLjkxIDE4LjQ1LDI1LjM3IDE2LDI3IEMgMTMsMjkgMTMuMTgsMzEuMzQgMTEsMzEgQyA5Ljk1OCwzMC4wNiAxMi40MSwyNy45NiAxMSwyOCBDIDEwLDI4IDExLjE5LDI5LjIzIDEwLDMwIEMgOSwzMCA1Ljk5NywzMSA2LDI2IEMgNiwyNCAxMiwxNCAxMiwxNCBDIDEyLDE0IDEzLjg5LDEyLjEgMTQsMTAuNSBDIDEzLjI3LDkuNTA2IDEzLjUsOC41IDEzLjUsNy41IEMgMTQuNSw2LjUgMTYuNSwxMCAxNi41LDEwIEwgMTguNSwxMCBDIDE4LjUsMTAgMTkuMjgsOC4wMDggMjEsNyBDIDIyLDcgMjIsMTAgMjIsMTAiDQogICAgICBzdHlsZT0iZmlsbDojMDAwMDAwOyBzdHJva2U6IzAwMDAwMDsiIC8+DQogICAgPHBhdGgNCiAgICAgIGQ9Ik0gOS41IDI1LjUgQSAwLjUgMC41IDAgMSAxIDguNSwyNS41IEEgMC41IDAuNSAwIDEgMSA5LjUgMjUuNSB6Ig0KICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjsgc3Ryb2tlOiNmZmZmZmY7IiAvPg0KICAgIDxwYXRoDQogICAgICBkPSJNIDE1IDE1LjUgQSAwLjUgMS41IDAgMSAxICAxNCwxNS41IEEgMC41IDEuNSAwIDEgMSAgMTUgMTUuNSB6Ig0KICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC44NjYsMC41LC0wLjUsMC44NjYsOS42OTMsLTUuMTczKSINCiAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7IHN0cm9rZTojZmZmZmZmOyIgLz4NCiAgICA8cGF0aA0KICAgICAgZD0iTSAyNC41NSwxMC40IEwgMjQuMSwxMS44NSBMIDI0LjYsMTIgQyAyNy43NSwxMyAzMC4yNSwxNC40OSAzMi41LDE4Ljc1IEMgMzQuNzUsMjMuMDEgMzUuNzUsMjkuMDYgMzUuMjUsMzkgTCAzNS4yLDM5LjUgTCAzNy40NSwzOS41IEwgMzcuNSwzOSBDIDM4LDI4Ljk0IDM2LjYyLDIyLjE1IDM0LjI1LDE3LjY2IEMgMzEuODgsMTMuMTcgMjguNDYsMTEuMDIgMjUuMDYsMTAuNSBMIDI0LjU1LDEwLjQgeiAiDQogICAgICBzdHlsZT0iZmlsbDojZmZmZmZmOyBzdHJva2U6bm9uZTsiIC8+DQogIDwvZz4NCjwvc3ZnPg0K\";\n\n//# sourceURL=webpack://my-webpack-project/./src/svgs/figures/dKnight.svg?");

/***/ }),

/***/ "./src/svgs/figures/dPawn.svg":
/*!************************************!*\
  !*** ./src/svgs/figures/dPawn.svg ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ij4NCiAgPHBhdGggZD0ibSAyMi41LDkgYyAtMi4yMSwwIC00LDEuNzkgLTQsNCAwLDAuODkgMC4yOSwxLjcxIDAuNzgsMi4zOCBDIDE3LjMzLDE2LjUgMTYsMTguNTkgMTYsMjEgYyAwLDIuMDMgMC45NCwzLjg0IDIuNDEsNS4wMyBDIDE1LjQxLDI3LjA5IDExLDMxLjU4IDExLDM5LjUgSCAzNCBDIDM0LDMxLjU4IDI5LjU5LDI3LjA5IDI2LjU5LDI2LjAzIDI4LjA2LDI0Ljg0IDI5LDIzLjAzIDI5LDIxIDI5LDE4LjU5IDI3LjY3LDE2LjUgMjUuNzIsMTUuMzggMjYuMjEsMTQuNzEgMjYuNSwxMy44OSAyNi41LDEzIGMgMCwtMi4yMSAtMS43OSwtNCAtNCwtNCB6IiBzdHlsZT0ib3BhY2l0eToxOyBmaWxsOiMwMDAwMDA7IGZpbGwtb3BhY2l0eToxOyBmaWxsLXJ1bGU6bm9uemVybzsgc3Ryb2tlOiMwMDAwMDA7IHN0cm9rZS13aWR0aDoxLjU7IHN0cm9rZS1saW5lY2FwOnJvdW5kOyBzdHJva2UtbGluZWpvaW46bWl0ZXI7IHN0cm9rZS1taXRlcmxpbWl0OjQ7IHN0cm9rZS1kYXNoYXJyYXk6bm9uZTsgc3Ryb2tlLW9wYWNpdHk6MTsiLz4NCjwvc3ZnPg0K\";\n\n//# sourceURL=webpack://my-webpack-project/./src/svgs/figures/dPawn.svg?");

/***/ }),

/***/ "./src/svgs/figures/dQueen.svg":
/*!*************************************!*\
  !*** ./src/svgs/figures/dQueen.svg ***!
  \*************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iDQoiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI0NSINCmhlaWdodD0iNDUiPg0KICA8ZyBzdHlsZT0iZmlsbDojMDAwMDAwO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7IHN0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCI+DQoNCiAgICA8cGF0aCBkPSJNIDksMjYgQyAxNy41LDI0LjUgMzAsMjQuNSAzNiwyNiBMIDM4LjUsMTMuNSBMIDMxLDI1IEwgMzAuNywxMC45IEwgMjUuNSwyNC41IEwgMjIuNSwxMCBMIDE5LjUsMjQuNSBMIDE0LjMsMTAuOSBMIDE0LDI1IEwgNi41LDEzLjUgTCA5LDI2IHoiDQogICAgc3R5bGU9InN0cm9rZS1saW5lY2FwOmJ1dHQ7ZmlsbDojMDAwMDAwIiAvPg0KICAgIDxwYXRoIGQ9Im0gOSwyNiBjIDAsMiAxLjUsMiAyLjUsNCAxLDEuNSAxLDEgMC41LDMuNSAtMS41LDEgLTEsMi41IC0xLDIuNSAtMS41LDEuNSAwLDIuNSAwLDIuNSA2LjUsMSAxNi41LDEgMjMsMCAwLDAgMS41LC0xIDAsLTIuNSAwLDAgMC41LC0xLjUgLTEsLTIuNSAtMC41LC0yLjUgLTAuNSwtMiAwLjUsLTMuNSAxLC0yIDIuNSwtMiAyLjUsLTQgLTguNSwtMS41IC0xOC41LC0xLjUgLTI3LDAgeiIgLz4NCiAgICA8cGF0aCBkPSJNIDExLjUsMzAgQyAxNSwyOSAzMCwyOSAzMy41LDMwIiAvPg0KICAgIDxwYXRoIGQ9Im0gMTIsMzMuNSBjIDYsLTEgMTUsLTEgMjEsMCIgLz4NCiAgICA8Y2lyY2xlIGN4PSI2IiBjeT0iMTIiIHI9IjIiIC8+DQogICAgPGNpcmNsZSBjeD0iMTQiIGN5PSI5IiByPSIyIiAvPg0KICAgIDxjaXJjbGUgY3g9IjIyLjUiIGN5PSI4IiByPSIyIiAvPg0KICAgIDxjaXJjbGUgY3g9IjMxIiBjeT0iOSIgcj0iMiIgLz4NCiAgICA8Y2lyY2xlIGN4PSIzOSIgY3k9IjEyIiByPSIyIiAvPg0KICAgIDxwYXRoIGQ9Ik0gMTEsMzguNSBBIDM1LDM1IDEgMCAwIDM0LDM4LjUiDQogICAgc3R5bGU9ImZpbGw6bm9uZTsgc3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLWxpbmVjYXA6YnV0dDsiIC8+DQogICAgPGcgc3R5bGU9ImZpbGw6bm9uZTsgc3Ryb2tlOiNmZmZmZmY7Ij4NCiAgICAgIDxwYXRoIGQ9Ik0gMTEsMjkgQSAzNSwzNSAxIDAgMSAzNCwyOSIgLz4NCiAgICAgIDxwYXRoIGQ9Ik0gMTIuNSwzMS41IEwgMzIuNSwzMS41IiAvPg0KICAgICAgPHBhdGggZD0iTSAxMS41LDM0LjUgQSAzNSwzNSAxIDAgMCAzMy41LDM0LjUiIC8+DQogICAgICA8cGF0aCBkPSJNIDEwLjUsMzcuNSBBIDM1LDM1IDEgMCAwIDM0LjUsMzcuNSIgLz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg0K\";\n\n//# sourceURL=webpack://my-webpack-project/./src/svgs/figures/dQueen.svg?");

/***/ }),

/***/ "./src/svgs/figures/dRook.svg":
/*!************************************!*\
  !*** ./src/svgs/figures/dRook.svg ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ij4NCiAgPGcgc3R5bGU9Im9wYWNpdHk6MTsgZmlsbDojMDAwMDAwOyBmaWxsLW9wYWNpdHk6MTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IHN0cm9rZTojMDAwMDAwOyBzdHJva2Utd2lkdGg6MS41OyBzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDsgc3Ryb2tlLWRhc2hhcnJheTpub25lOyBzdHJva2Utb3BhY2l0eToxOyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwLjMpIj4NCiAgICA8cGF0aA0KICAgICAgZD0iTSA5LDM5IEwgMzYsMzkgTCAzNiwzNiBMIDksMzYgTCA5LDM5IHogIg0KICAgICAgc3R5bGU9InN0cm9rZS1saW5lY2FwOmJ1dHQ7IiAvPg0KICAgIDxwYXRoDQogICAgICBkPSJNIDEyLjUsMzIgTCAxNCwyOS41IEwgMzEsMjkuNSBMIDMyLjUsMzIgTCAxMi41LDMyIHogIg0KICAgICAgc3R5bGU9InN0cm9rZS1saW5lY2FwOmJ1dHQ7IiAvPg0KICAgIDxwYXRoDQogICAgICBkPSJNIDEyLDM2IEwgMTIsMzIgTCAzMywzMiBMIDMzLDM2IEwgMTIsMzYgeiAiDQogICAgICBzdHlsZT0ic3Ryb2tlLWxpbmVjYXA6YnV0dDsiIC8+DQogICAgPHBhdGgNCiAgICAgIGQ9Ik0gMTQsMjkuNSBMIDE0LDE2LjUgTCAzMSwxNi41IEwgMzEsMjkuNSBMIDE0LDI5LjUgeiAiDQogICAgICBzdHlsZT0ic3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7IiAvPg0KICAgIDxwYXRoDQogICAgICBkPSJNIDE0LDE2LjUgTCAxMSwxNCBMIDM0LDE0IEwgMzEsMTYuNSBMIDE0LDE2LjUgeiAiDQogICAgICBzdHlsZT0ic3Ryb2tlLWxpbmVjYXA6YnV0dDsiIC8+DQogICAgPHBhdGgNCiAgICAgIGQ9Ik0gMTEsMTQgTCAxMSw5IEwgMTUsOSBMIDE1LDExIEwgMjAsMTEgTCAyMCw5IEwgMjUsOSBMIDI1LDExIEwgMzAsMTEgTCAzMCw5IEwgMzQsOSBMIDM0LDE0IEwgMTEsMTQgeiAiDQogICAgICBzdHlsZT0ic3Ryb2tlLWxpbmVjYXA6YnV0dDsiIC8+DQogICAgPHBhdGgNCiAgICAgIGQ9Ik0gMTIsMzUuNSBMIDMzLDM1LjUgTCAzMywzNS41Ig0KICAgICAgc3R5bGU9ImZpbGw6bm9uZTsgc3Ryb2tlOiNmZmZmZmY7IHN0cm9rZS13aWR0aDoxOyBzdHJva2UtbGluZWpvaW46bWl0ZXI7IiAvPg0KICAgIDxwYXRoDQogICAgICBkPSJNIDEzLDMxLjUgTCAzMiwzMS41Ig0KICAgICAgc3R5bGU9ImZpbGw6bm9uZTsgc3Ryb2tlOiNmZmZmZmY7IHN0cm9rZS13aWR0aDoxOyBzdHJva2UtbGluZWpvaW46bWl0ZXI7IiAvPg0KICAgIDxwYXRoDQogICAgICBkPSJNIDE0LDI5LjUgTCAzMSwyOS41Ig0KICAgICAgc3R5bGU9ImZpbGw6bm9uZTsgc3Ryb2tlOiNmZmZmZmY7IHN0cm9rZS13aWR0aDoxOyBzdHJva2UtbGluZWpvaW46bWl0ZXI7IiAvPg0KICAgIDxwYXRoDQogICAgICBkPSJNIDE0LDE2LjUgTCAzMSwxNi41Ig0KICAgICAgc3R5bGU9ImZpbGw6bm9uZTsgc3Ryb2tlOiNmZmZmZmY7IHN0cm9rZS13aWR0aDoxOyBzdHJva2UtbGluZWpvaW46bWl0ZXI7IiAvPg0KICAgIDxwYXRoDQogICAgICBkPSJNIDExLDE0IEwgMzQsMTQiDQogICAgICBzdHlsZT0iZmlsbDpub25lOyBzdHJva2U6I2ZmZmZmZjsgc3Ryb2tlLXdpZHRoOjE7IHN0cm9rZS1saW5lam9pbjptaXRlcjsiIC8+DQogIDwvZz4NCjwvc3ZnPg0K\";\n\n//# sourceURL=webpack://my-webpack-project/./src/svgs/figures/dRook.svg?");

/***/ }),

/***/ "./src/svgs/figures/lBishop.svg":
/*!**************************************!*\
  !*** ./src/svgs/figures/lBishop.svg ***!
  \**************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ij4NCiAgPGcgc3R5bGU9Im9wYWNpdHk6MTsgZmlsbDpub25lOyBmaWxsLXJ1bGU6ZXZlbm9kZDsgZmlsbC1vcGFjaXR5OjE7IHN0cm9rZTojMDAwMDAwOyBzdHJva2Utd2lkdGg6MS41OyBzdHJva2UtbGluZWNhcDpyb3VuZDsgc3Ryb2tlLWxpbmVqb2luOnJvdW5kOyBzdHJva2UtbWl0ZXJsaW1pdDo0OyBzdHJva2UtZGFzaGFycmF5Om5vbmU7IHN0cm9rZS1vcGFjaXR5OjE7IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDAuNikiPg0KICAgIDxnIHN0eWxlPSJmaWxsOiNmZmZmZmY7IHN0cm9rZTojMDAwMDAwOyBzdHJva2UtbGluZWNhcDpidXR0OyI+DQogICAgICA8cGF0aCBkPSJNIDksMzYgQyAxMi4zOSwzNS4wMyAxOS4xMSwzNi40MyAyMi41LDM0IEMgMjUuODksMzYuNDMgMzIuNjEsMzUuMDMgMzYsMzYgQyAzNiwzNiAzNy42NSwzNi41NCAzOSwzOCBDIDM4LjMyLDM4Ljk3IDM3LjM1LDM4Ljk5IDM2LDM4LjUgQyAzMi42MSwzNy41MyAyNS44OSwzOC45NiAyMi41LDM3LjUgQyAxOS4xMSwzOC45NiAxMi4zOSwzNy41MyA5LDM4LjUgQyA3LjY1LDM4Ljk5IDYuNjgsMzguOTcgNiwzOCBDIDcuMzUsMzYuNTQgOSwzNiA5LDM2IHoiLz4NCiAgICAgIDxwYXRoIGQ9Ik0gMTUsMzIgQyAxNy41LDM0LjUgMjcuNSwzNC41IDMwLDMyIEMgMzAuNSwzMC41IDMwLDMwIDMwLDMwIEMgMzAsMjcuNSAyNy41LDI2IDI3LjUsMjYgQyAzMywyNC41IDMzLjUsMTQuNSAyMi41LDEwLjUgQyAxMS41LDE0LjUgMTIsMjQuNSAxNy41LDI2IEMgMTcuNSwyNiAxNSwyNy41IDE1LDMwIEMgMTUsMzAgMTQuNSwzMC41IDE1LDMyIHoiLz4NCiAgICAgIDxwYXRoIGQ9Ik0gMjUgOCBBIDIuNSAyLjUgMCAxIDEgIDIwLDggQSAyLjUgMi41IDAgMSAxICAyNSA4IHoiLz4NCiAgICA8L2c+DQogICAgPHBhdGggZD0iTSAxNy41LDI2IEwgMjcuNSwyNiBNIDE1LDMwIEwgMzAsMzAgTSAyMi41LDE1LjUgTCAyMi41LDIwLjUgTSAyMCwxOCBMIDI1LDE4IiBzdHlsZT0iZmlsbDpub25lOyBzdHJva2U6IzAwMDAwMDsgc3Ryb2tlLWxpbmVqb2luOm1pdGVyOyIvPg0KICA8L2c+DQo8L3N2Zz4NCg==\";\n\n//# sourceURL=webpack://my-webpack-project/./src/svgs/figures/lBishop.svg?");

/***/ }),

/***/ "./src/svgs/figures/lKing.svg":
/*!************************************!*\
  !*** ./src/svgs/figures/lKing.svg ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ij4NCiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPg0KICAgIDxwYXRoIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIGQ9Ik0yMi41IDExLjYzVjZNMjAgOGg1Ii8+DQogICAgPHBhdGggZmlsbD0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIGQ9Ik0yMi41IDI1czQuNS03LjUgMy0xMC41YzAgMC0xLTIuNS0zLTIuNXMtMyAyLjUtMyAyLjVjLTEuNSAzIDMgMTAuNSAzIDEwLjUiLz4NCiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIuNSAzN2M1LjUgMy41IDE0LjUgMy41IDIwIDB2LTdzOS00LjUgNi0xMC41Yy00LTYuNS0xMy41LTMuNS0xNiA0VjI3di0zLjVjLTIuNS03LjUtMTItMTAuNS0xNi00LTMgNiA2IDEwLjUgNiAxMC41djciLz4NCiAgICA8cGF0aCBkPSJNMTIuNSAzMGM1LjUtMyAxNC41LTMgMjAgMG0tMjAgMy41YzUuNS0zIDE0LjUtMyAyMCAwbS0yMCAzLjVjNS41LTMgMTQuNS0zIDIwIDAiLz4NCiAgPC9nPg0KPC9zdmc+\";\n\n//# sourceURL=webpack://my-webpack-project/./src/svgs/figures/lKing.svg?");

/***/ }),

/***/ "./src/svgs/figures/lKnight.svg":
/*!**************************************!*\
  !*** ./src/svgs/figures/lKnight.svg ***!
  \**************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ij4NCiAgPGcgc3R5bGU9Im9wYWNpdHk6MTsgZmlsbDpub25lOyBmaWxsLW9wYWNpdHk6MTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IHN0cm9rZTojMDAwMDAwOyBzdHJva2Utd2lkdGg6MS41OyBzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDsgc3Ryb2tlLWRhc2hhcnJheTpub25lOyBzdHJva2Utb3BhY2l0eToxOyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwLjMpIj4NCiAgICA8cGF0aA0KICAgICAgZD0iTSAyMiwxMCBDIDMyLjUsMTEgMzguNSwxOCAzOCwzOSBMIDE1LDM5IEMgMTUsMzAgMjUsMzIuNSAyMywxOCINCiAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7IHN0cm9rZTojMDAwMDAwOyIgLz4NCiAgICA8cGF0aA0KICAgICAgZD0iTSAyNCwxOCBDIDI0LjM4LDIwLjkxIDE4LjQ1LDI1LjM3IDE2LDI3IEMgMTMsMjkgMTMuMTgsMzEuMzQgMTEsMzEgQyA5Ljk1OCwzMC4wNiAxMi40MSwyNy45NiAxMSwyOCBDIDEwLDI4IDExLjE5LDI5LjIzIDEwLDMwIEMgOSwzMCA1Ljk5NywzMSA2LDI2IEMgNiwyNCAxMiwxNCAxMiwxNCBDIDEyLDE0IDEzLjg5LDEyLjEgMTQsMTAuNSBDIDEzLjI3LDkuNTA2IDEzLjUsOC41IDEzLjUsNy41IEMgMTQuNSw2LjUgMTYuNSwxMCAxNi41LDEwIEwgMTguNSwxMCBDIDE4LjUsMTAgMTkuMjgsOC4wMDggMjEsNyBDIDIyLDcgMjIsMTAgMjIsMTAiDQogICAgICBzdHlsZT0iZmlsbDojZmZmZmZmOyBzdHJva2U6IzAwMDAwMDsiIC8+DQogICAgPHBhdGgNCiAgICAgIGQ9Ik0gOS41IDI1LjUgQSAwLjUgMC41IDAgMSAxIDguNSwyNS41IEEgMC41IDAuNSAwIDEgMSA5LjUgMjUuNSB6Ig0KICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDsgc3Ryb2tlOiMwMDAwMDA7IiAvPg0KICAgIDxwYXRoDQogICAgICBkPSJNIDE1IDE1LjUgQSAwLjUgMS41IDAgMSAxICAxNCwxNS41IEEgMC41IDEuNSAwIDEgMSAgMTUgMTUuNSB6Ig0KICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC44NjYsMC41LC0wLjUsMC44NjYsOS42OTMsLTUuMTczKSINCiAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7IHN0cm9rZTojMDAwMDAwOyIgLz4NCiAgPC9nPg0KPC9zdmc+DQo=\";\n\n//# sourceURL=webpack://my-webpack-project/./src/svgs/figures/lKnight.svg?");

/***/ }),

/***/ "./src/svgs/figures/lPawn.svg":
/*!************************************!*\
  !*** ./src/svgs/figures/lPawn.svg ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ij4NCiAgPHBhdGggZD0ibSAyMi41LDkgYyAtMi4yMSwwIC00LDEuNzkgLTQsNCAwLDAuODkgMC4yOSwxLjcxIDAuNzgsMi4zOCBDIDE3LjMzLDE2LjUgMTYsMTguNTkgMTYsMjEgYyAwLDIuMDMgMC45NCwzLjg0IDIuNDEsNS4wMyBDIDE1LjQxLDI3LjA5IDExLDMxLjU4IDExLDM5LjUgSCAzNCBDIDM0LDMxLjU4IDI5LjU5LDI3LjA5IDI2LjU5LDI2LjAzIDI4LjA2LDI0Ljg0IDI5LDIzLjAzIDI5LDIxIDI5LDE4LjU5IDI3LjY3LDE2LjUgMjUuNzIsMTUuMzggMjYuMjEsMTQuNzEgMjYuNSwxMy44OSAyNi41LDEzIGMgMCwtMi4yMSAtMS43OSwtNCAtNCwtNCB6IiBzdHlsZT0ib3BhY2l0eToxOyBmaWxsOiNmZmZmZmY7IGZpbGwtb3BhY2l0eToxOyBmaWxsLXJ1bGU6bm9uemVybzsgc3Ryb2tlOiMwMDAwMDA7IHN0cm9rZS13aWR0aDoxLjU7IHN0cm9rZS1saW5lY2FwOnJvdW5kOyBzdHJva2UtbGluZWpvaW46bWl0ZXI7IHN0cm9rZS1taXRlcmxpbWl0OjQ7IHN0cm9rZS1kYXNoYXJyYXk6bm9uZTsgc3Ryb2tlLW9wYWNpdHk6MTsiLz4NCjwvc3ZnPg0K\";\n\n//# sourceURL=webpack://my-webpack-project/./src/svgs/figures/lPawn.svg?");

/***/ }),

/***/ "./src/svgs/figures/lQueen.svg":
/*!*************************************!*\
  !*** ./src/svgs/figures/lQueen.svg ***!
  \*************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ij4NCiAgPGcgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lam9pbjpyb3VuZCI+DQogICAgPHBhdGggZD0iTSA5LDI2IEMgMTcuNSwyNC41IDMwLDI0LjUgMzYsMjYgTCAzOC41LDEzLjUgTCAzMSwyNSBMIDMwLjcsMTAuOSBMIDI1LjUsMjQuNSBMIDIyLjUsMTAgTCAxOS41LDI0LjUgTCAxNC4zLDEwLjkgTCAxNCwyNSBMIDYuNSwxMy41IEwgOSwyNiB6Ii8+DQogICAgPHBhdGggZD0iTSA5LDI2IEMgOSwyOCAxMC41LDI4IDExLjUsMzAgQyAxMi41LDMxLjUgMTIuNSwzMSAxMiwzMy41IEMgMTAuNSwzNC41IDExLDM2IDExLDM2IEMgOS41LDM3LjUgMTEsMzguNSAxMSwzOC41IEMgMTcuNSwzOS41IDI3LjUsMzkuNSAzNCwzOC41IEMgMzQsMzguNSAzNS41LDM3LjUgMzQsMzYgQyAzNCwzNiAzNC41LDM0LjUgMzMsMzMuNSBDIDMyLjUsMzEgMzIuNSwzMS41IDMzLjUsMzAgQyAzNC41LDI4IDM2LDI4IDM2LDI2IEMgMjcuNSwyNC41IDE3LjUsMjQuNSA5LDI2IHoiLz4NCiAgICA8cGF0aCBkPSJNIDExLjUsMzAgQyAxNSwyOSAzMCwyOSAzMy41LDMwIiBzdHlsZT0iZmlsbDpub25lIi8+DQogICAgPHBhdGggZD0iTSAxMiwzMy41IEMgMTgsMzIuNSAyNywzMi41IDMzLDMzLjUiIHN0eWxlPSJmaWxsOm5vbmUiLz4NCiAgICA8Y2lyY2xlIGN4PSI2IiBjeT0iMTIiIHI9IjIiIC8+DQogICAgPGNpcmNsZSBjeD0iMTQiIGN5PSI5IiByPSIyIiAvPg0KICAgIDxjaXJjbGUgY3g9IjIyLjUiIGN5PSI4IiByPSIyIiAvPg0KICAgIDxjaXJjbGUgY3g9IjMxIiBjeT0iOSIgcj0iMiIgLz4NCiAgICA8Y2lyY2xlIGN4PSIzOSIgY3k9IjEyIiByPSIyIiAvPg0KICA8L2c+DQo8L3N2Zz4NCg==\";\n\n//# sourceURL=webpack://my-webpack-project/./src/svgs/figures/lQueen.svg?");

/***/ }),

/***/ "./src/svgs/figures/lRook.svg":
/*!************************************!*\
  !*** ./src/svgs/figures/lRook.svg ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ij4NCiAgPGcgc3R5bGU9Im9wYWNpdHk6MTsgZmlsbDojZmZmZmZmOyBmaWxsLW9wYWNpdHk6MTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IHN0cm9rZTojMDAwMDAwOyBzdHJva2Utd2lkdGg6MS41OyBzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDsgc3Ryb2tlLWRhc2hhcnJheTpub25lOyBzdHJva2Utb3BhY2l0eToxOyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwLjMpIj4NCiAgICA8cGF0aA0KICAgICAgZD0iTSA5LDM5IEwgMzYsMzkgTCAzNiwzNiBMIDksMzYgTCA5LDM5IHogIg0KICAgICAgc3R5bGU9InN0cm9rZS1saW5lY2FwOmJ1dHQ7IiAvPg0KICAgIDxwYXRoDQogICAgICBkPSJNIDEyLDM2IEwgMTIsMzIgTCAzMywzMiBMIDMzLDM2IEwgMTIsMzYgeiAiDQogICAgICBzdHlsZT0ic3Ryb2tlLWxpbmVjYXA6YnV0dDsiIC8+DQogICAgPHBhdGgNCiAgICAgIGQ9Ik0gMTEsMTQgTCAxMSw5IEwgMTUsOSBMIDE1LDExIEwgMjAsMTEgTCAyMCw5IEwgMjUsOSBMIDI1LDExIEwgMzAsMTEgTCAzMCw5IEwgMzQsOSBMIDM0LDE0Ig0KICAgICAgc3R5bGU9InN0cm9rZS1saW5lY2FwOmJ1dHQ7IiAvPg0KICAgIDxwYXRoDQogICAgICBkPSJNIDM0LDE0IEwgMzEsMTcgTCAxNCwxNyBMIDExLDE0IiAvPg0KICAgIDxwYXRoDQogICAgICBkPSJNIDMxLDE3IEwgMzEsMjkuNSBMIDE0LDI5LjUgTCAxNCwxNyINCiAgICAgIHN0eWxlPSJzdHJva2UtbGluZWNhcDpidXR0OyBzdHJva2UtbGluZWpvaW46bWl0ZXI7IiAvPg0KICAgIDxwYXRoDQogICAgICBkPSJNIDMxLDI5LjUgTCAzMi41LDMyIEwgMTIuNSwzMiBMIDE0LDI5LjUiIC8+DQogICAgPHBhdGgNCiAgICAgIGQ9Ik0gMTEsMTQgTCAzNCwxNCINCiAgICAgIHN0eWxlPSJmaWxsOm5vbmU7IHN0cm9rZTojMDAwMDAwOyBzdHJva2UtbGluZWpvaW46bWl0ZXI7IiAvPg0KICA8L2c+DQo8L3N2Zz4NCg==\";\n\n//# sourceURL=webpack://my-webpack-project/./src/svgs/figures/lRook.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;