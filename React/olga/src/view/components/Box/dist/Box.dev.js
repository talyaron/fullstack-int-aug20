"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Box(props) {
  var imgData = ['https://helpx.adobe.com/content/dam/help/en/stock/how-to/adobe-stock-video-footage_297x176.jpg', 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search-v2_297x176.jpg', 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/open-in-app-purchase_297x176.jpg'];

  var _useState = (0, _react.useState)('0'),
      _useState2 = _slicedToArray(_useState, 2),
      indImg = _useState2[0],
      setIndex = _useState2[1];

  randomIndex = function randomIndex() {
    setIndex(Math.floor(Math.random() * Math.floor(imgData.length)));
  };

  return; // const [color, setColor] = useState('red');
  // const [counter, setCounter] = useState(1);
  // const [password, setPassword] = useState('123');
  // let x = 1;
  // function randomColor(){
  //   setColor("#" + ((1<<24)*Math.random() | 0).toString(16))
  //   setCounter(counter+1);
  // }
  // function xPlus(){
  //   x++;
  //   setColor("#" + ((1<<24)*Math.random() | 0).toString(16));
  //   setPassword(Math.random().toString(36).slice(-8))
  // }
  //   // const { name, gender } = props.info;
  //   return (<h1 style={{color:color}} onMouseOver={xPlus} onClick={randomColor}>Hello {name}, you are a {gender}: {counter}, x: {x}, and your password is {password}</h1>)
}

var _default = Box;
exports["default"] = _default;