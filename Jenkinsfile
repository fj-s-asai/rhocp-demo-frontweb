pipeline {
  agent {
    node {
      label 'nodejs'
    }
  }
  stages {
    stage("project") {
      steps {
        script {
          openshift.withCluster() {
            openshift.withProject() {
              echo "Using project: ${openshift.project()}"
            }
          }
        }
      }
    }
    stage("build image") {
     steps {
        script {
          openshift.withCluster() {
            openshift.withProject() {
              echo "Build Appliction Image: frontweb"
              def bc = openshift.selector("bc", "frontweb-v10")
              bc.startBuild().logs("-f")
              def bb = bc.narrow("bc").related("builds")
              timeout(10) {
                bb.untilEach(1) {
                  return (it.object().status.phase == "Complete")
                }
              }
            }
          }
        }
      }
    }
    stage('deploy') {
      steps {
        script {
          openshift.withCluster() {
            openshift.withProject() {
              openshift.tag("frontweb:1.0", "frontweb:1.1")
              sleep 10
              openshift.selector('dc', 'frontweb-v10').rollout().1.0();
              def dc = openshift.selector("dc", "frontweb-v10").object()
              while (dc.spec.replicas != dc.status.availableReplicas) {
                sleep 1
              }
            }
          }
        }
      }
    }
  }
}
