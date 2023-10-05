<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!-- PROJECT LOGO -->
<div align="center">
  <h3 align="center">SWE40006 Deployment Project</h3>

  <p align="center">
    A CI/CD pipeline for SWE40006 - Software Deployment and Evolution.
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#usage">Usage</a></li>
    <li>
      <a href="#contributing">Contributing</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT -->
## About

This repository is linked to our AWS CI/CD pipeline. Once code is tested and pushed to this repository, it automatically notifies the build server to create an artefact.

#### Built With
![AWS][aws]
![GitHub][github]


#### AWS Services
<p>
  Elastic Beanstalk creates the EC2/CloudWatch instances for our application:
</p>

![Elastic Beanstalk][elasticbeanstalk]
![EC2][ec2]
![CloudWatch][cloudwatch]

<p>
  S3 holds our application artefacts:
</p>

![S3][s3]

<p>
  And finally, CodePipeline, CodeBuild and CodeDeploy handles our CI/CD pipeline functionality:
</p>

![CodePipeline][codepipeline]
![CodeDeploy][codedeploy]
![CodeBuild][codebuild]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- FEATURES -->
## Features

- [x] Feature
  - [x] Sub-feature

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE -->
## Usage

Provide instructions on how to run/access the web app.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Provide instructions on how to do a pull request.

### Prerequisites



### Installation



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Img Shields](https://shields.io)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[aws]: https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white
[ec2]: https://img.shields.io/badge/EC2-232F3E?style=for-the-badge&logo=amazonec2&logoColor=white
[cloudwatch]: https://img.shields.io/badge/CloudWatch-232F3E?style=for-the-badge&logo=amazoncloudwatch&logoColor=white
[s3]: https://img.shields.io/badge/S3-569A31?style=for-the-badge&logo=amazons3&logoColor=white
[codepipeline]: https://img.shields.io/badge/CodePipeline-0049AB?style=for-the-badge&logo=amazon-aws&logoColor=white
[codedeploy]: https://img.shields.io/badge/CodeDeploy-0049AB?style=for-the-badge&logo=amazon-aws&logoColor=white
[codebuild]: https://img.shields.io/badge/CodeBuild-0049AB?style=for-the-badge&logo=amazon-aws&logoColor=white
[elasticbeanstalk]: https://img.shields.io/badge/Elastic_Beanstalk-66459B?style=for-the-badge&logo=amazon-aws&logoColor=white
[github]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
