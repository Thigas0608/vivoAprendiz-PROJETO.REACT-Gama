import React from "react";
import { ModalStyled } from "./style";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <ModalStyled>
      <div>
        <h2>Atender Solicitação</h2>
        <button onClick={onClose}>Fechar</button>
      </div>
    </ModalStyled>
  );
};

export default Modal;
