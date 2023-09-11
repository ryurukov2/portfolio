import OutsideAlerter from "../functions/OutsideAlerter";
export function Modal({
  isClickedOn,
  handleCloseModalClick,
  setIsInTransition,
  modalStyles
}) {
  
  return (
    <div 
      className={`absolute ${
        isClickedOn ? `opacity-100` : `opacity-0`
      } bg-gray-600 rounded-lg transition-[transform,height,width,opacity] delay-200 duration-500`} // className="absolute opacity-30 hover:opacity-100 bg-red-500 transition-[transform,height,width,opacity] delay-300 duration-150"
      onTransitionEnd={() => {
        setIsInTransition(false);
      }}
      style={modalStyles}
    >
      {isClickedOn && (
        <OutsideAlerter
          handleCloseModalClick={handleCloseModalClick}
          isClickedOn
        >
            <div>{isClickedOn.title}</div>
        </OutsideAlerter>
      )}
    </div>
  );
}
