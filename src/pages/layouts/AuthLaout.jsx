import React from "react";
import { Outlet } from "react-router-dom";
function AuthLaout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default AuthLaout;
