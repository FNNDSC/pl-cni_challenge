import React from "react";
import Evaluate from "../../assets/evaluate.png";
import { withRouter, RouteComponentProps } from "react-router-dom";

const Main: React.FC<RouteComponentProps> = (props) => {
  return (
    <main className="main-template main-grid">
      <h1 className="page-title">Evaluate your Model</h1>
      <p className="sub-title">
        Submit your Docker Image and find out how your model performs on the
        hidden test set.
      </p>

      <img className="main-image" src={Evaluate} alt="evaluation" />
      <div className="secondary-text">
        <h2 className="section-title">
          The Expected outcome for the challenge:
        </h2>
        <p>
          Evaluate the reliability and performance of different analytical
          strategies for healthy vs disordered connectome classification and
          compare with the challenge results.
        </p>
      </div>

      <div className="main-text">
        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            props.history.push("/404");
          }}
        >
          <label className="fname-label">First Name</label>
          <input className="fname-input" id="fname" type="text" />

          <label className="lname-label">Last Name</label>
          <input className="lname-input" id="lname" type="text" />

          <label className="message-label">Docker Image</label>
          <textarea
            className="message-textarea"
            id="message"
            placeholder="Enter your docker image in the format: {your_Docker_account name/cnichallenge_DockerRepo}"
          ></textarea>

          <button className="btn btn-primary btn-form">Send</button>
        </form>
      </div>
    </main>
  );
};

export default withRouter(Main);
