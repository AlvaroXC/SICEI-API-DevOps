pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker build . -t node-sicei-image'
            }
        }
        stage('Run') {
            steps {
                sh 'docker run -d -p 4000:4000 --name node-sicei-container node-sicei-image'
            }
        }
    }
}