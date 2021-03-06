import React, { Component } from "react";
import ReactModal from "react-modal";
import { CloseButton } from "./ModalComponents";

function DisplayComponentModal(props) {
  let customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      padding: "0px",
      overflow: "hidden",
      transform: "translate(-50%, -50%)",
      borderRadius: "5px",
      border: "none",
      boxShadow: props.noBoxShadow ? "none" : "0 4px 8px 0 rgba(0,0,0,0.2)",
      background: props.transparentBackground ? "none" : "#fff"
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.6)"
    }
  };
  let {
    overrideStyle,
    shouldCloseOnOverlayClick,
    hide,
    modalIsOpen,
    hideCloseButton,
    closeBtnBackgroundColor,
    closeModal
  } = props;

  shouldCloseOnOverlayClick =
    typeof shouldCloseOnOverlayClick === "undefined" ? false : true;
  // console.log(shouldCloseOnOverlayClick)
  // console.log(customStyles)
  return (
    <ReactModal
      isOpen={modalIsOpen}
      //   onAfterOpen={this.afterOpenModal}
      //   onRequestClose={this.closeModal}
      style={customStyles}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      contentLabel={"NOTIFICATION"} //This is for screen readers for the blind.
    >
      <CloseButton
        onClick={closeModal}
        iconClassName="gb-white-close-btn-background"
        backgroundColor={
          closeBtnBackgroundColor ? closeBtnBackgroundColor : "#fff"
        }
        hideCloseButton={hideCloseButton}
        iconColor={props.transparentBackground ? "#fff" : "#000"}
      />
      <div className="modal-container">{props.children}</div>
    </ReactModal>
  );
}

export default DisplayComponentModal;
