import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <>
      <div className="col-xl-4 col-md-6 col-sm-12  my-2 ">
        <div className="card btn-grad  d-flex align-items-center  h-100 justify-content-between">
          <img
            className="rounded-circle"
            style={{ width: "160px", height: "160px" }}
            alt="50x50"
            src={avatar}
          />
          <div className="text-center text-white mb-0  ">
            <p className="fs-2 text-break" style={{ margin: "10px 0px" }}>
              {name}
            </p>
            <p className="fs-6 text-break fw-bolder mb-0">
              {status} {company && <span> at {company}</span>}
            </p>
            {/* <p className="my-1">{location}</p> */}
          </div>
          <ul className="skills my-2">
            {skills.slice(0, 5).map((skill, index) => (
              <li
                key={index}
                className="d-inline-block bg_pink rounded-pill"
                style={{
                  textTransform: "capitalize",
                  padding: "5px 10px",
                  margin: "5px",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                {skill}
              </li>
            ))}
          </ul>
          <Link
            to={`/profile/${_id}`}
            className="text-white card_button bg_light_blue w-50"
          >
            View Profile
          </Link>
        </div>
      </div>
    </>
  );
};

// means we requires these props
ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
