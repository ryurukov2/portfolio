import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function useOutsideAlerter(ref, handleCloseModalClick) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleCloseModalClick();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.handleCloseModalClick);

  return <span ref={wrapperRef}>{props.children}</span>;
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
};

export default OutsideAlerter;
