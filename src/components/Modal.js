import React from "react";
import styled from "styled-components";

const Modal = ({ children, state, changeState }) => {
  return (
    <>
      {state && (
        <Overlay>
          <ModalContainer>
            <ModalHeader>
              <h3>About this project</h3>
            </ModalHeader>
            <CloseButton onClick={() => changeState(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </CloseButton>
            {children}
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

export default Modal;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  opacity: 0.95;

  @media (max-width: 480px) {
    width: 100vw;
  }
`;

const ModalContainer = styled.div`
  width: 500px;
  min-height: 100px;
  background: #f9ddce;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;

  @media (max-width: 480px) {
    width: 350px;
    min-height: 80px;
    right: 5%;
    top: 1%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;

  h3 {
    font-weight: bold;
    font-size: 16px;
    color: #b5838d;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3 ease all;
  border-radius: 5px;
  color: #b5838d;

  &:hover {
    background: #b5838d;
    color: #f9ddce;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
