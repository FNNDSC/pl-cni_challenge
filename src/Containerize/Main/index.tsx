import React from "react";
import Connectivity from "../../assets/FNNDSC_logo.png";

const Main: React.FC = () => {
  return (
    <main className="main-template main-grid">
      <h1 className="page-title">Containerize with ChRIS and Docker</h1>
      <p className="sub-title">Let's get started !</p>
      <img className="main-image" src={Connectivity} alt="brain connectivity" />

      <div className="main-text">
        <h2 className="section-title">Classification Output Requirements</h2>
        <span>
          The results from your model should be output into a text file in the
          following format:{" "}
        </span>
        <ul>
          <li> classification labels should be 0 = Controls, 1 = Patient;</li>
          <li>
            {" "}
            Prediction probability or score for each subject is required;
          </li>
          <li>
            {" "}
            The output file should contain comma-separated values and named
            "classification.csv";
          </li>
          <li>
            {" "}
            Each row must contain the subject ID, the classification label, and
            the prediction probability (one row per subject)
          </li>
        </ul>
        eg. <br />
        <pre>
          <span> sub-090,0,0.8111361229380137...</span>
          <span>sub-111,0,0.60761617828937793....</span>
          <span>sub-115,1,0.836589863164504...</span>
        </pre>
        <h2 className="section-title">
          Installation Requirements and Quick Setup
        </h2>
        <ol>
          <li>
            {" "}
            Install <b>Python</b> (3.5+) and <b>pip</b>
          </li>
          <li>
            {" "}
            Create a{" "}
            <a href="https://github.com/">
              <b>GitHub</b> account
            </a>
            , and install it on your machine;
          </li>
          <li>
            {" "}
            Create a{" "}
            <a href="https://hub.docker.com/">
              <b>Docker Hub</b> account
            </a>
            ;
          </li>
          <li>
            {" "}
            Install the latest <b>Docker</b> (17.04.0+) if you want to test your
            plugin's Docker image and containers on your machine. To install on
            Ubuntu 18.04:
            <br />
            <pre>
              apt-get remove docker docker-engine docker.io <br />
              apt install docker.io <br />
            </pre>
            Otherwise, visit{" "}
            <a href="https://docs.docker.com/install/">
              https://docs.docker.com/install/
            </a>{" "}
            for installation directions.
          </li>
          <br />

          <li>
            {" "}
            Fork our wrapper template{" "}
            <b>
              <a href="https://github.com/aichung/pl-cnichallenge_stub">
                pl-cnichallenge_stub
              </a>
            </b>{" "}
            repository to your GitHub.
          </li>
          <li>
            {" "}
            Log onto your Docker Hub account and create a new repository with
            automated build:
            <br />
          </li>
          <ol>
            <li>
              In 'Account Settings' -> 'Linked Accounts', connect your GitHub
              account to your DockerHub account.
            </li>
            <li>
              In your DockerHub home, click the <b>Create Repository+</b>{" "}
              button. The website page will walk you through setting up the
              automated build. When prompted for the GitHub repository that
              you’d like to use for the automated build select the{" "}
              <b>pl-cni_challenge </b>
              repository that you just forked. Name the Docker repository{" "}
              <b>
                <i>{`$\{cnichallenge_DockerRepo}`} </i>
              </b>
              and make it Public.
            </li>

            <li>
              <b>
                ***It is extremely important that you tag your automatically
                built docker image with an appropriate version number based on
                your GitHub tags***.
              </b>
              <br />
              Create a new build rule by clicking the <b>BUILD RULES+</b>{" "}
              button. A good rule is **Source type:** "Tag", **Source:**
              "/^[0-9.]+$/" and **Docker Tag:** "version-{`{sourceref}`}".
            </li>

            <li>
              {" "}
              Click <b>Create & Build</b> button to finish the setup and trigger
              the automated build.
            </li>
            <br />
          </ol>
          <li>
            After this build has completed, the <b>cnichallenge_stub</b> bare
            bones example is now available as a Docker image to be pulled from
            your Docker Hub. The link to it will be
            <i> {`$\{your_Docker_account name/cnichallenge_DockerRepo}`}</i>.
            Use this to <a href="submit">evaluate </a>
            your model on the test set.
          </li>
        </ol>
        <h2 className="section-title">Plugin Wrapper</h2>
        <p>
          We provide a wrapper for your code in a GitHub repo,{" "}
          <a href="https://github.com/aichung/pl-cnichallenge_stub">
            pl-cnichallenge_stub
          </a>
          ,that containerizes your trained model. pl-cnichallenge_stub is an app
          containing a bare bones example which you can edit to include your
          code/package. Although the wrapper is coded in Python, programs in
          other languages can be included.
          <br />
          <br />
          See the pl-cnichallenge_stub README for details on how to execute and
          populate the bare bones example to containerize your model that is
          compatible for use on our evaluation portal.
        </p>
      </div>
    </main>
  );
};

export default Main;
