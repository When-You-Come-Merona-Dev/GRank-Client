import React from "react";
const HeaderContainer: React.FC = () => {
  return <Header isLogged={isLogged} handleLogout={handleLogout} username={handleUserInfo()} userGithubLogin={handleGithubLogin} showAdminLinkModal={showAdminLinkModal} />;
};
export default HeaderContainer;
