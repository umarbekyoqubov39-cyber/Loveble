import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import LeftArrow from "../../components/Icons/LeftArrow";
function Dashboard() {
  return (
    <div className="felx gap-5">
      <Link to={"/"}>
        <Button
          variant="danger"
          text={"back to Home"}
          LeftArrow={LeftArrow}
        ></Button>
      </Link>
      Dashboard
    </div>
  );
}

export default Dashboard;
