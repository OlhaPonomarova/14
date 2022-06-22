/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import PopupClick from "./hooks/PopupClick";
import CardsPopup from "./components/CardsPopup";

import plus from "./img/plus.svg";
import close from "./img/close.svg";

function Popup({ children, isClosePopup }) {
  const { isOpen, isRender, onOpen, onClose } = PopupClick(isClosePopup);

  return (
    <div>
      <button
        onClick={onOpen}
        css={css`
          padding: 0;
          border: none;
          background-color: transparent;
          margin-left: 20px;
          cursor: pointer;
        `}
      >
        <img
          src={plus}
          alt="plus"
          css={css`
            width: 55px;
          `}
        />
      </button>
      {isRender && (
        <CardsPopup isOpen={isOpen}>
          <div
            css={css`
              position: relative;
            `}
          >
            <span
              onClick={onClose}
              css={css`
                position: absolute;
                top: 5px;
                right: 5px;
                cursor: pointer;
              `}
            >
              <img
                src={close}
                alt="close"
                css={css`
                  width: 20px;
                `}
              />
            </span>
            {children}
          </div>
        </CardsPopup>
      )}
    </div>
  );
}

export default Popup;