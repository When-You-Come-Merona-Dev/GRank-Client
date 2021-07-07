import React from "react";
import * as S from "./styled";

interface IAdminApplyViewModal {
  username: string;
  password: string;
  setUsername: (e: any) => void;
  setPassword: (e: any) => void;
  adminLogin: () => void;
  removeModal: () => void;
}

const AdminApplyView: React.FC<IAdminApplyViewModal> = ({ username, password, setUsername, setPassword, adminLogin, removeModal }) => {
  return (
    <S.Positioner>
      <S.TitleWrapper>Admin 로그인</S.TitleWrapper>
      <S.AdminLoginFormWrapper>
        <div>
          <span>username</span>
          <span>password</span>
        </div>
        <div>
          <input type="text" placeholder="username을 입력하세요" value={username} onChange={setUsername} />
          <input type="text" placeholder="패스워드를 입력하세요" value={password} onChange={setPassword} />
        </div>
      </S.AdminLoginFormWrapper>
      <S.AdminLoginBtnWrapper>
        <S.AdminLoginBtn onClick={adminLogin}>로그인</S.AdminLoginBtn>
        <S.AdminLoginBtn cancel onClick={removeModal}>
          취소하기
        </S.AdminLoginBtn>
      </S.AdminLoginBtnWrapper>
    </S.Positioner>
  );
};

export default AdminApplyView;
