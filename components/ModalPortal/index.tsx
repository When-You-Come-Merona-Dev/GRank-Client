import ReactDOM from "react-dom";
import * as S from "./styled";

interface IModal {
  isShow: boolean;
}

const ModalPortal: React.FC<IModal> = ({ isShow, children }) => {
  return isShow
    ? ReactDOM.createPortal(
        <>
          <S.ModalOverlay />
          {children}
        </>,
        document.body
      )
    : null;
};

export default ModalPortal;
