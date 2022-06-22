/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const CardsPopup = ({ children, isOpen }) => (
    <div
        css={css`
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      background: #dfd3df94;
      justify-content: center;
      align-items: center;
      transition: 1s;
      opacity: ${isOpen ? "1" : "0"};
    `}
    >
        {children}
    </div>
);

export default CardsPopup;