import React from "react";

const Skills = () => {
  return (
    <div>
      <section className="skills my-5" id="skills">
        <div className="container">
          <h1 className="text-center my-3">Skills</h1>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="card mx-4" style={{ width: "18rem" }}>
              <img
                src="https://source.unsplash.com/720x460/?Software"
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
                src="https://source.unsplash.com/720x460/?Computer"
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
