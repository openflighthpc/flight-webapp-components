import { useEffect, useRef } from 'react';

function useEventListener(element, eventName, handler) {
  var savedHandler = useRef();
  useEffect(function () {
    savedHandler.current = handler;
  }, [handler]);
  useEffect(function () {
    var isSupported = element && element.addEventListener;
    if (!isSupported) return;

    var eventListener = function eventListener(event) {
      return savedHandler.current(event);
    };

    element.addEventListener(eventName, eventListener);
    return function () {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

;
export default useEventListener;