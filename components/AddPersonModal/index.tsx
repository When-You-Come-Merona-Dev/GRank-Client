import React from "react";
import * as S from "./styled";

interface IAddPersonModal {
  name: string;
  githubId: string;
  setName: (e: any) => void;
  setGithubId: (e: any) => void;
  addPerson: () => void;
  removeModal: () => void;
}

const AddPersonModal: React.FC<IAddPersonModal> = ({ name, githubId, setGithubId, setName, addPerson, removeModal }) => {
  return (
    <S.Positioner>
      <S.TitleWrapper>랭킹 인원 추가</S.TitleWrapper>
      <S.AddPersonFormWrapper>
        <div>
          <span>이름</span>
          <span>Github ID</span>
        </div>
        <div>
          <input type="text" placeholder="이름을 입력하세요" value={name} onChange={setName} />
          <input type="text" placeholder="Github ID를 입력하세요" value={githubId} onChange={setGithubId} />
        </div>
      </S.AddPersonFormWrapper>
      <S.AddPersonBtnWrapper>
        <S.AddPersonBtn onClick={addPerson}>추가하기</S.AddPersonBtn>
        <S.AddPersonBtn cancel onClick={removeModal}>
          취소하기
        </S.AddPersonBtn>
      </S.AddPersonBtnWrapper>
    </S.Positioner>
  );
};

export default React.memo(AddPersonModal);
