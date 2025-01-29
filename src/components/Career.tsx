import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Started College!</h4>
                <h5>KiiT</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
             Started with my Web Development journey and learned a lot of new things. Made a few projects participated
             in various hackathons and got to know about the tech industry.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Joined First Society</h4>
                <h5>IOT LABS</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Joined IOT Labs and started learning new technologies like Typescript, Express and Docker. 
              Hosted few events, and made various projects and learned a lot.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>KiiT Fest 8.0 OC</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Due to my gsap knbowledge and frontend skills, I was selected as the Frontend Developer for KiiT Fest 8.0 OC.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
