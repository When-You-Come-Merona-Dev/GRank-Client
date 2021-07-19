import React from "react";
import Image from "next/image";

import * as S from "./styled";

interface IRankItem {
  id: number;
  username: string;
  avatar_url: string;
  commit_count: number;
  is_approved: boolean;
  groups: Array<any>;
}

interface IAddPersonModal {
  name: number | null;
  githubId: string;
  userinfo: IRankItem;
  setName: (e: any) => void;
  setGithubId: (e: any) => void;
  addPerson: () => void;
  removeModal: () => void;
}

const AddPersonModal: React.FC<IAddPersonModal> = ({ name, githubId, userinfo, setGithubId, setName, addPerson, removeModal }) => {
  return (
    <S.Positioner>
      <S.Wrapper>
        <S.TitleWrapper>
          <div>
            <Image src={"/githubIcon.png"} width={40} height={40} />
            <span>GitHub</span>
          </div>
        </S.TitleWrapper>
        <S.AddPersonFormWrapper>
          <S.ProfileWrapper>
            <S.ProfileImage src={userinfo.avatar_url} width={180} height={180} />
            <span>{userinfo.username}</span>
          </S.ProfileWrapper>
          <S.AddPersonForm>
            <input type="text" placeholder="학년을 입력하세요" value={name} onChange={setName} />
            {/* <S.UserGroupListWrapper>
              <span>속한 그룹</span>
              <div>
                <S.GroupItem>
                  <span>SHA</span>
                  <button>x</button>
                </S.GroupItem>
              </div>
            </S.UserGroupListWrapper> */}
          </S.AddPersonForm>
        </S.AddPersonFormWrapper>
        <S.AddPersonBtnWrapper>
          <S.CancelBtn cancel onClick={removeModal}>
            취소
          </S.CancelBtn>
          <S.AddPersonBtn onClick={addPerson}>등록</S.AddPersonBtn>
        </S.AddPersonBtnWrapper>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default React.memo(AddPersonModal);
