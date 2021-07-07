import React, { useState } from "react";

import Router from "next/router";

import { AdminApplyView } from "../../components";
import useModal from "../../hooks/useModal";
import AdminAPI from "../../lib/apis/Admin/AdminAPI";

const AdminApplyContainer: React.FC = () => {
  const { removeModal } = useModal();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = e => {
    setUsername(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleAdminLogin = async () => {
    console.log(username, password);
    await AdminAPI.adminLogin(username, password)
      .then(res => {
        if (res.status === 200) {
          sessionStorage.setItem("admin_token", res.data.token);
          alert("관리자 페이지로 이동합니다.");
          Router.push({ pathname: "/admin" });
        }
      })
      .catch(err => {
        const { status } = err.response;
        if (status === 400) {
          alert("접근이 불가한 계정입니다.");
        }
      });
  };
  return <AdminApplyView username={username} password={password} setUsername={handleChangeUsername} setPassword={handleChangePassword} adminLogin={handleAdminLogin} removeModal={removeModal} />;
};

export default AdminApplyContainer;
