"use strict";

exports.__esModule = true;
exports.default = useAnimationFrame;

var _react = require("react");

var _useWillUnmount = _interopRequireDefault(require("./useWillUnmount"));

var _useMounted = _interopRequireDefault(require("./useMounted"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a controller object for requesting and cancelling an animation freame that is properly cleaned up
 * once the component unmounts. New requests cancel and replace existing ones.
 */
function useAnimationFrame() {
  var isMounted = (0, _useMounted.default)();
  var handle = (0, _react.useRef)();

  var cancel = function cancel() {
    if (handle.current != null) {
      cancelAnimationFrame(handle.current);
    }
  };

  (0, _useWillUnmount.default)(cancel);
  return {
    request: function request(fn) {
      if (!isMounted()) return;
      cancel();
      handle.current = requestAnimationFrame(fn);
    },
    cancel: cancel
  };
}