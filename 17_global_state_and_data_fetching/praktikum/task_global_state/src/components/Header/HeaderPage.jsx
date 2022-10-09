import React from "react";
import "../../css/header.css";

function HeaderPage() {
  return (
    <div className="Navbar">
      <h1
        style={{
          color:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(224,228,25,1) 35%, rgba(44,162,186,1) 100%)",
        }}
      >
        todos
      </h1>
    </div>
  );
}

export default HeaderPage;
