import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser } from "../../store/users/UsersSlicer";
import "./About.css";

const AboutMain = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const data = useSelector((state) => state.user);

  return (
    <div className="container p-5">
      <h1>About Our Team</h1>
      <div
        className="list-team py-5 mt-5"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {data.data?.map((value) => (
          <div class="card" style={{ width: "16rem" }}>
            <img
              src={value.avatar}
              style={{ height: "16rem" }}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{value.nama}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMain;
