import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faCircleNodes } from "@fortawesome/free-solid-svg-icons";
function Technologies() {
  return (
    <div className="tech-bc">
      <h1> Technologies </h1>
      <div className="tech-div grid-container">
        <div className="tech-item grid-item">
          <span className="tech-icon">
            <FontAwesomeIcon icon={faCode} />
          </span>
          <h4>Back-end Software development</h4>
          <p>
            .NET + ASPMVC, .NET Core, Entity/Dapper, Java, Spring, Hibernate,
            Oracle DB
          </p>
        </div>
        <div className="tech-item grid-item">
          <span>
            <FontAwesomeIcon icon={faDesktop} />
          </span>
          <h4>Front-end Software Development</h4>
          <p>JavaScript, React/Redux, Angular, Vue</p>
        </div>
        <div className="tech-item grid-item">
          <span>
            <FontAwesomeIcon icon={faMobileScreenButton} />
          </span>
          <h4>Mobile Software Development</h4>
          <p>Kotlin, Swift, RWD, React Native, Flutter, PWA</p>
        </div>
        <div className="tech-item grid-item">
          <span>
            <FontAwesomeIcon icon={faBrain} />
          </span>
          <h4>AI</h4>
          <p>
            Data Science/Machine Learning, Deep Learning, NLP, Tensor Flow,
            Keras, Pyro.ai, Infer.NET, Probablistic programming
          </p>
        </div>

        <div className="tech-item grid-item">
          <span>
            <FontAwesomeIcon icon={faListCheck} />
          </span>
          <h4>Test Automation</h4>
          <p>Selenium, Cucumber, MSpec, SpecFlow, SoapUI</p>
        </div>
        <div className="tech-item grid-item">
          <span>
            <FontAwesomeIcon icon={faAtom} />
          </span>
          <h4>Big Data</h4>
          <p>Hadoop, Spark, HBase, Neo4j</p>
        </div>
        <div className="tech-item grid-item">
          <span>
            <FontAwesomeIcon icon={faLayerGroup} />
          </span>
          <h4>DevOps</h4>
          <p>
            Azure,AWS,GoogleCS MultiCloud / Cloud native, Docker TerraForm
            Octopus/Puppet Bamboo/Jenkins/TFS Kubernetes
          </p>
        </div>
        <div className="tech-item grid-item">
          <span>
            <FontAwesomeIcon icon={faCircleNodes} />
          </span>
          <h4>Other</h4>
          <p>
            RabbitMQ, Kafka, Cammel, REVA, Hazelcast, Workflow/BPM, Real-time
            a/v streaming
          </p>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
