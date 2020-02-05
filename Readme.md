### CNI-Challenge.

Participants will be asked to design a classifcation framework that can predict subject diagnosis based on brain connectivity data. Submissions are accepted as containerised Docker images.
The cni_challenge.py app is a wrapper for you to add your code/package which is then containerised by Docker. While this is coded in Python and currently contains a bare bones example also in Python, other languages are possible.

### CNI Challenge 2019 Submission Template

1. Create a form in the UI with the following fields.

a. Author Names
b. Team name (optional)
c. Affiliations
d. Short Description of the submitted method
e. The Link to your docker container on Dockerhub
f. Any specific instructions to execute your Docker image.

### Create a Login Portal for the user to submit their docker images.

A sample Login Page.

A sample Registration Page.

### Workflow.

CNI challenge accepts solutions as Docker images. We have a provided a wrapper for your code in a Github repo (add a link in the UI to this repo) which can be linked in Docker to containerize your solution.

The user will have a generated link once he has built his docker image. The link to it will be ${your_Docker_account name}/${cni_challenge_DockerRepo}

The cni_challenge.py app is a wrapper for you to add your code/package which is then containerised by Docker. cni_challenge.py is a ChRIS-based application.

There are some technical requirements to be met before submitting your application.

### Run the app.

This plugin can be run in two modes: natively as a python package or as a containerized Docker image.

Using Docker Run.

```docker
docker pull ${your_Docker_account name}/${cni_challenge_DockerRepo}
```

To run using docker, be sure to assign the input directory to /incoming and the output directory to /outgoing. Make sure that the \$(pwd)/outputdir directory is world writable! These directories must be named inputdir and outputdir. For the bare bones example, copy the expected input files (rotation_matrices.txt and vectors.txt) from the GitHub repo and place it in inputdir.

Input and output directories are named inputdir and outputdir, respectively. Your code should expect to read in data from inputdir as is structured in the pl-cni*challenge repo as this is how our test data will be structured.
Output should be \_two* text files in outputdir called classification.txt and scores.txt. classification.txt should contain the classification label for each subject with one subject per row (a single column of values). Labels should be 0 = Control, and 1 = Patient. scores.txt should contain the prediction probability/score for each subject, also with one subject per row.

Do not include the Challenge training or validation data in your Docker image.
The code to evaluate the performance of your submission is pl-cni_challenge/cni_challenge/evaluation/

```python
classification_metrics.py -p classification.txt -g ${goundtruth_file} -o ${output_file}
```

There are some performance evaluation criterias (http://miccai.brainconnectivity.net/challenge_eval.html)
