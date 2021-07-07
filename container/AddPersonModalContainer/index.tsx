import React, { useState } from "react";
import { AddPersonModal } from "../../components";
import useModal from "../../hooks/useModal";
import RankAPI from "../../lib/apis/Rank/RankAPI";

interface IAddPersonModal {
  name: string;
  githubId: string;
  setName: (e: any) => void;
  setGithubId: (e: any) => void;
  addPerson: () => void;
  removeModal: () => void;
}

const AddPersonModalContainer: React.FC = () => {
  const { removeModal } = useModal();

  const [name, setName] = useState("");
  const [githubId, setGithubId] = useState("");

  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeGithubId = e => {
    setGithubId(e.target.value);
  };

  const handleAddPerson = async () => {
    await RankAPI.addPersonRank(githubId)
      .then(res => {
        if (res.status === 201) {
          alert("등록에 성공하였습니다. 승인 후 랭킹에서 확인이 가능합니다.");
        }
        removeModal();
      })
      .catch(error => {
        const { status } = error.response;
        switch (status) {
          case 404:
            alert("존재하지 않는 Github 유저입니다.");
            break;
          case 400:
            alert("이미 등록되어 있는 유저입니다.");
            break;
        }
        setName("");
        setGithubId("");
        removeModal();
      });
  };

  return <AddPersonModal name={name} githubId={githubId} setName={handleChangeName} setGithubId={handleChangeGithubId} addPerson={handleAddPerson} removeModal={removeModal} />;
};

export default AddPersonModalContainer;
