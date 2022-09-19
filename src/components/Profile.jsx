import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";

function Profile() {
  const { userName, email } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate("/");
    dispatch(reset());
  };

  return (
    <div>
      <h3>{userName}</h3>
      <p>{email}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Profile;
