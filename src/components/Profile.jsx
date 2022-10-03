import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";
import Style from "../sass/Profile.module.scss";

function Profile({ avatar, userName, email }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate("/");
    dispatch(reset());
  };

  return (
    <div className="shadow bg-white">
      <img
        src={`${process.env.REACT_APP_PROXY}/files/${avatar}`}
        alt="profile"
        className="w-100"
      />
      <div className={Style.profile}>
        <h3>{userName}</h3>
        <p>Email: {email}</p>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Profile;
