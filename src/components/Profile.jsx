import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";

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
      />
      <h3>{userName}</h3>
      <p>{email}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Profile;
