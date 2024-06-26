import React, { useEffect, useRef, useState } from 'react';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import useEventListener from './useEventListener';

function FullscreenButton({ onFullscreenChange, onZenChange }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);
  const [isFullscreen, setFullscreen] = useState(false);
  const [isZen, setZen] = useState(false);
  const fullScreenChangeCallbackRef = useRef(onFullscreenChange);
  const zenChangeCallbackRef = useRef(onZenChange);

  useEventListener(window, 'keydown', function handleKeypress(e) {
    if (!(e.ctrlKey || e.shiftKey || e.altKey) && e.code === "F11") {
      document.documentElement.requestFullscreen();
      e.preventDefault();
    }
  });

  useEffect(() => {
    document.onfullscreenchange = function ( event ) { 
      if (document.fullscreenElement == null) {
        setFullscreen(false);
        if (typeof fullScreenChangeCallbackRef.current === 'function') {
          fullScreenChangeCallbackRef.current(false);
        }
      } else {
        setFullscreen(true);
        if (typeof fullScreenChangeCallbackRef.current === 'function') {
          fullScreenChangeCallbackRef.current(true);
        }
      }
    }; 

    return () => { document.onfullscreenchange = null; };
  }, [setFullscreen]);

  function toggleFullscreen() {
    if (isFullscreen) {
      document.exitFullscreen();
    } else {
      if (isZen) {
        toggleZen();
      }
      document.documentElement.requestFullscreen();
    }
  }

  function toggleZen() {
    setZen((prevZen) => {
      if (prevZen) {
        exitZen();
      } else {
        if (isFullscreen) {
          document.exitFullscreen();
        }
        enterZen();
      }
      return !prevZen;
    });
  }

  function enterZen() {
    document.body.classList.add('zen-mode');
    if (typeof zenChangeCallbackRef.current === 'function') {
      zenChangeCallbackRef.current(true);
    }
  }

  function exitZen() {
    document.body.classList.remove('zen-mode');
    if (typeof zenChangeCallbackRef.current === 'function') {
      zenChangeCallbackRef.current(false);
    }
  }

  // Turn zen mode off when this component is unmounted.
  useEffect(() => {
    return () => { document.body.classList.remove('zen-mode'); };
  }, []);

  function defaultAction() {
    if (isFullscreen) {
      toggleFullscreen();
    } else if (isZen) {
      toggleZen();
    } else {
      toggleFullscreen();
    }
  }

  return (
    <Dropdown
      className="btn-group mr-1"
      isOpen={dropdownOpen}
      toggle={toggleDropdown}
    >
      <i
        className={`fa ${(isFullscreen || isZen) ? 'fa-compress' : 'fa-expand'} ml-2 link white-text`}
        title={
          isFullscreen ? 'Exit Fullscreen' : isZen ? 'Exit Zen mode' : 'Fullscreen'
        }
        onClick={defaultAction}
      ></i>
      <DropdownToggle
        split
        color="transparent"
        className="white-text"
      />
      <DropdownMenu>
        <DropdownItem onClick={toggleFullscreen} >
          { isFullscreen ? 'Exit Fullscreen' : 'Fullscreen' }
        </DropdownItem>
        <DropdownItem onClick={toggleZen} >
          { isZen ? 'Exit Zen mode' : 'Zen mode' }
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default FullscreenButton;
