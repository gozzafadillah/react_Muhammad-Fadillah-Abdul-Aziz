import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  let name = useParams().name;
  return (
    <div>
      <div className="container-about">
        <h1>About Author</h1>
        <div className="about-content">
          <p>
            The App was develop by {name}, a self-taught web developer and
            technical writer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
