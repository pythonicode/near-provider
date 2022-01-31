"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NearProvider = NearProvider;
exports.useNear = useNear;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

var _react = _interopRequireWildcard(require("react"));

var _nearApiJs = require("near-api-js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Packages //
const NearContext = /*#__PURE__*/(0, _react.createContext)();

function useNear() {
  return (0, _react.useContext)(NearContext);
}

function NearProvider(_ref) {
  let {
    children
  } = _ref;
  const [near, setNear] = (0, _react.useState)(undefined);
  const [wallet, setWallet] = (0, _react.useState)(undefined);
  (0, _react.useEffect)(async () => {
    const config = {
      networkId: "testnet",
      keyStore: new _nearApiJs.keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl: "https://rpc.testnet.near.org",
      walletUrl: "https://wallet.testnet.near.org",
      helperUrl: "https://helper.testnet.near.org",
      explorerUrl: "https://explorer.testnet.near.org"
    };
    const near_connection = await (0, _nearApiJs.connect)(config);
    const wallet_connection = new _nearApiJs.WalletConnection(near_connection);
    setNear(near_connection);
    setWallet(wallet_connection);
  }, []);
  const context = {
    near,
    wallet
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(NearContext.Provider, {
    value: context
  }, children));
}