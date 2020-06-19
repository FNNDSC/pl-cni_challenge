import React from "react";
import challenge_logo from "../../assets/challenge_logo.png";

const Main: React.FC = () => {
  return (
    <main className="main-template main-grid">
      <h1 className="page-title">Challenge Overview</h1>
      <p className="sub-title"></p>
      <img
        className="main-image"
        src={challenge_logo}
        alt="challenge_overview"
        style={{ padding: "2%" }}
      />

      <div className="main-text">
        <p>
          The{" "}
          <a href="http://www.brainconnectivity.net">
            Connectomics in NeuroImaging Challenge
          </a>{" "}
          was held at the Medical Image Computation and Computer Assisted
          Intervention (MICCAI) Conference in 2019. Full details of this
          Challenge can be found at in the corresponding publication <a href="https://arxiv.org/abs/2006.03611"><b>here</b></a>
        </p>
        <p>
          With our free to download training data and the use of our Docker
          framework, you will be able to assess your classification model on our
          hidden test dataset.
        </p>
        <h2 className="section-title">Problem Statement</h2>
        <p style={{ margin: "1.5em" }}>
          <i>
            Using functional connectomics, are we capturing biologically
            relevant and generalizable information about the brain, or are we
            simply overfitting to the data?
          </i>
        </p>
        <p>
          {" "}
          This Challenge addresses the issues of generalizability and clinical
          relevance for functional connectomes. We provide resting-state fMRI
          (rsfMRI) datasets of children with attention deficit hyperactivity
          disorder (ADHD) and neurotypical controls for you to{" "}
          <b>
            design a classNameification framework that can predict subject
            diagnosis based on brain connectivity data
          </b>
          .
        </p>
        <h2 className="section-title">The Data</h2>
        <p>
          With collaborators from the{" "}
          <a href="http://www.kennedykrieger.org/kirby-research-center">
            Kennedy Krieger Institute
          </a>
          , 120 examples of each class are available for
          <a href="https://github.com/mdschirmer/2019_CNI_TrainingRelease">
            training
          </a>{" "}
          (n=100/100) and{" "}
          <a href="https://github.com/mdschirmer/2019_CNI_ValidationRelease">
            validation
          </a>{" "}
          (n=20/20).
          <br />
          For this challenge, we have extracted the mean time courses of the
          preprocessed rs-fMRI data using three standard parcellations: AAL (116
          ROIs), Harvard Oxford (110 ROIs) and Craddock200 (200 ROIs). The data
          for each parcellation is included as a separate timeseries_XXX.csv
          file in corresponding the subject directory. Here, rows correspond to
          parcel number and columns correspond to time samples. Any of this data
          may be used to develop your models.
          <br />
          <br />
          In addition to the rs-fMRI data, we also provide the following
          demographic variables for each subject: Age, Sex, FSIQ, and Edinburgh
          Handedness. This information can be found in the accompanying
          phenotypic.csv file in each subject directory. During training and
          validation, diagnosis (DX) is provided for you to evaluate your model.
          During testing, the DX field will contain "N/A".
          <br />
          <br />
          The test dataset comprises of another 25 subjects for each className,
          and remains unreleased to the public. It is only "accessible" through
          our evaluation portal.
        </p>

        <h2 className="section-title">Evaluation Metrics</h2>
        <p>
          We utilize a total of 16 measures, including: accuracy, error rate,
          sensitivity, specificity, precision, recall, F-Measure,
          Geometric-mean, AUC, and optimized precision.
          <br />
          (cf. Hossin and Sulaiman. A review on evaluation metrics for data
          classNameification evaluations. Int. J. of Data Mining & Knowledge
          Management Process, 5(2):1,2015)
          <br />
          <br />
          Our Challenge portal will report the performance of your model on the
          hidden test set, using the above metrics.
        </p>
        <h2 className="section-title">
          Dockerize and upload your Model for Evaluation
        </h2>
        <p>
          Our Challenge portal employs the{" "}
          <a href="https://chrisproject.org">ChRIS platform</a>, an open source
          framework that utilizes cloud technologies to democratize medical
          analytics application development.
          <br />
          <br />
          To evaluate your model on hidden test data, the following steps are
          required (full details <a href="howto.html">here</a>):
        </p>
        <ol>
          <li>
            {" "}
            Enable your classification model to output its decisions in a .csv
            file as per our <a href="Containerize/Main/index.tsx">requirements</a>;
          </li>
          <li>
            {" "}
            Train your model on our released dataset:
            <ul>
              <li>
                <a href="https://github.com/mdschirmer/2019_CNI_TrainingRelease">
                  Training data
                </a>
              </li>
            </ul>{" "}
          </li>
          <li>
            {" "}
            Validate your model on our released dataset:
            <ul>
              <li>
                <a href="https://github.com/mdschirmer/2019_CNI_ValidationRelease">
                  Validation data
                </a>
              </li>
            </ul>{" "}
          </li>
          <li>
            {" "}
            Populate our <a href="https://github.com/aichung/pl-cnichallenge_stub">wrapper code</a> with your trained model to convert it into
            a containerized plugin that is ChRIS compatible;
          </li>
          <li>
            {" "}
            Upload your containerized plugin to your{" "}
            <a href="https://www.docker.com">Docker Hub</a>;
          </li>
          <li>
            {" "}
            Immedietely evaluate your model on hidden test data by entering the
            Docker image link <a href="Submit/Main/index.tsx">here</a>.
          </li>
        </ol>
      </div>
    </main>
  );
};

export default Main;
