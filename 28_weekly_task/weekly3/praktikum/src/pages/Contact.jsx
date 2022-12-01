import React from "react";

const Contact = () => {
  function submitData(e) {
    e.preventDefault();
    let nama = e.target[0].value + " " + e.target[1].value;

    !nama
      ? alert("please insert first name, lastn name, and email")
      : alert(`Hello ${nama} \nakun anda terdaftar!`);
  }

  return (
    <div>
      <section className="contact" id="contact" style={{ margin: "12vw 0 " }}>
        <form onSubmit={(e) => submitData(e)}>
          <div className="row justify-content-center text-center align-items-center">
            <div className="col-lg-4 col-sm-12">
              <h3>Contact Us</h3>
            </div>
            <div className="col-lg-8 col-sm-12 row">
              <div
                className="col-lg-8 my-3"
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <label for="nama">First Name</label>
                <input
                  type="text"
                  name="fnama"
                  id="fnama"
                  placeholder="First Name"
                />
              </div>
              <div
                className="col-lg-8 my-3"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                }}
              >
                <label for="nama">Last Name</label>
                <input
                  type="text"
                  name="lnama"
                  id="lnama"
                  placeholder="Last Name"
                />
              </div>
              <div
                className="col-lg-8 my-3"
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <label for="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="example@email.com"
                />
              </div>
              <div className="col-lg-8 my-3">
                <textarea
                  name="keterangan"
                  id="keterangan"
                  rows="10"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="col-lg-6">
                <button type="submit" className="btn btn-outline-danger">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
