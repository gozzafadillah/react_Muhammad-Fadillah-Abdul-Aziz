import React from "react";
import "../assets/css/font.css";
import "../assets/css/style.css";

const Skills = () => {
  return (
    <div>
      <section className="skills my-5" id="skills">
        <div className="container">
          <h1 className="text-center my-3">Skills</h1>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="card mx-4" style={{ width: "18rem" }}>
              <img
                src="https://media.istockphoto.com/id/1218017051/photo/profile-side-photo-of-concentrated-skilled-web-expert-afro-american-girl-sit-evening-desk-use.jpg?s=612x612&w=0&k=20&c=dQJAXyU20JuCfY594PIBgl3RgMHnDyEWC9VF6vOFBkg="
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p
                  className="card-text text-center"
                  style={{ fontSize: "14px" }}
                >
                  Software
                </p>
              </div>
            </div>
            <div className="card mx-4" style={{ width: "18rem" }}>
              <img
                src="data:image/jpeg;base64,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"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p
                  className="card-text text-center"
                  style={{ fontSize: "14px" }}
                >
                  Hardware
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;