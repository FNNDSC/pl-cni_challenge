import React from "react";
import { withRouter } from "react-router-dom";

const Main: React.FC = (props) => {
  return (
    <main>
      <section className="hero main-grid">
        <h1 className="hero-title">Connectomics in NeuroImaging Challenge</h1>
        <button
          onClick={() => {
            props.history.push("/submit");
          }}
          className="btn btn-primary"
        >
          Click here to begin
        </button>
      </section>

      <section className="info main-grid">
        <div className="col">
          <h2 className="section-title section-title-center">The Challenge</h2>
          <p>
            Are we capturing biologically relevant and generalizable information
            about the brain using functional connectomics, or are we simply
            overfitting to the data? Leverage a unique resting-state fMRI
            dataset to design a<strong>classification framework</strong> to
            predict patients ADHD diagnosis.
          </p>
        </div>
        <div className="col">
          <h2 className="section-title section-title-center">
            Evaluation Portal
          </h2>
          <p>
            This portal allows you to evaluate your trained model on the hidden
            test set via our Docker wrapper. Receive a summary of evaluation
            statistics to track your performance.
          </p>
        </div>
        <div className="col">
          <h2 className="section-title section-title-center">Get in touch</h2>
          <p>Any questions? Email us:</p>
          <p>
            Markus D. Schirmer:
            <br /> mschirmer1 |at| mgh.harvard.edu
          </p>

          <p>
            Ai Wern Chung:
            <br /> aiwern.chung |at| childrens.harvard.edu
          </p>
        </div>
      </section>

      <section className="main-template">
        <div style={{ margin: "0 5em", textAlign: "justify" }}>
          <p>
            Large, open source datasets, such as the Human Connectome Project
            (HCP) and the Autism Brain Imaging Data Exchange (ABIDE), have
            spurred the development of new and increasingly powerful machine
            learning strategies in brain connectomics. However, one key question
            remains: are we capturing biologically relevant and generalizable
            information about the brain, or are we simply overfitting to the
            data?{" "}
          </p>

          <p>
            For the full details, please visit the{" "}
            <a href="http://brainconnectivity.net">CNI website</a>.
          </p>
        </div>
      </section>
    </main>
  );
};

export default withRouter(Main);
