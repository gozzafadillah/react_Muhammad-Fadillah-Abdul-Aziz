import React from "react";

const Footer = () => {
  return (
    <div>
      <section class="footer">
        <div class="p-5">
          <div class="d-flex flex-wrap justify-content-center">
            <div
              class="p-2 mx-4"
              style={{ fontSize: "10px", maxWidth: "18rem" }}
            >
              Jika ingin menghubungi saya silahkan follow sosial media saya
              <div class="medsos" style={{ fontSize: "20px" }}>
                <i class="fa-brands fa-github mx-1"></i>
                <i class="fa-brands fa-instagram mx-1"></i>
                <i class="fa-brands fa-linkedin mx-1"></i>
              </div>
            </div>
            <div class="p-2 mx-4">
              <h3>
                <h3>Fadillah's</h3>
                <p>Developer</p>
              </h3>
            </div>
            <div class="p2 mx-4 address">
              <h5 class="mb-3">Come Say Hello!</h5>
              <p>Sukajadi Bandung</p>
              <p>Jawa Barat</p>
              <p>Indonesia</p>
              <button class="btn btn-outline-danger btn-sm">
                <i class="fa-solid fa-phone"></i> +62895631948686
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
