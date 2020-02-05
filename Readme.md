### CNI-Challenge. (Connectomics in NeuroImaging)

Participants will be asked to design a classifcation framework that can predict subject diagnosis based on brain connectivity data. Submissions are accepted as containerised Docker images.
The cni_challenge.py app is a wrapper for you to add your code/package which is then containerised by Docker. While this is coded in Python and currently contains a bare bones example also in Python, other languages are possible.

### Workflow.

CNI challenge accepts solutions as Docker images. We have a provided a wrapper for your code in a Github repo (add a link in the UI to this repo) which can be linked in Docker to containerize your solution.

The user will have a generated link once he has built his docker image. The link to it will be ${your_Docker_account name}/${cni_challenge_DockerRepo}

The cni_challenge.py app is a wrapper for you to add your code/package which is then containerised by Docker. cni_challenge.py is a ChRIS-based application.

There are some technical requirements to be met before submitting your application (https://github.com/aichung/pl-cni_challenge)

### Run the app.

This plugin can be run in two modes: natively as a python package or as a containerized Docker image.

**_Using Docker Run_**

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

### Mockups to draw inspiration from

### Create a Login Portal for the user to submit their docker images.

A sample Registration Page.

![CNI_Register](https://user-images.githubusercontent.com/15992276/73865933-0349c980-4812-11ea-97ec-31978c945367.png)

A sample Login Page.

![CNI_Login](https://user-images.githubusercontent.com/15992276/73865931-02b13300-4812-11ea-8754-dbb20835bf3b.png)

Landing Page.

![Landing Page](https://user-images.githubusercontent.com/15992276/73867794-448fa880-4815-11ea-8a6c-050af683f814.png)

Different Facets of the CNI Challenge.

1. Transfer Learning Challenge (http://miccai.brainconnectivity.net/challenge.html)

2. Workshop (http://miccai.brainconnectivity.net/workshop.html)

3. ChRIS

The website needs to be a one-stop hub for the entire challenge. Together with the CNI workshop, the challenge presents a necessary step toward reproducible research in the field.
An accepted challenge submission must be accompanied by at least one author registered to the CNI-TL Challenge through the MICCAI satellite events registration.

4. CNI Challenge 2019 Submission Template (http://www.brainconnectivity.net/challenge_subm.html)

Create a form in the UI with the following fields.

1. Author Names
2. Team name (optional)
3. Affiliations
4. Short Description of the submitted method
5. The Link to your docker container on Dockerhub
6. Any specific instructions to execute your Docker image.

7. An Example of a CSV file would like this:

![csv](https://user-images.githubusercontent.com/15992276/73888384-8b909480-483b-11ea-8222-fdc9dcae8f7b.png)
