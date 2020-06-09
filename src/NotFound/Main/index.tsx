import React from "react";
import { withRouter } from "react-router-dom";
import PageNotFound from "../../assets/404.jpg";

const Main: React.FC = (props) => {
  return (
    <>
      <div className="not-found">
        <h3
          className="page-title"
          style={{
            marginLeft: "-5em",
          }}
        >
          The Page you are looking for is under development.
        </h3>
        <img src={PageNotFound} alt="page not found" />
      </div>
    </>
  );
};

export default withRouter(Main);
