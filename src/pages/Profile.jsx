import React from "react";
import { authStore } from "../store/authStore";

const Profile = () => {
  const { authUser } = authStore();
  return <div>Profile</div>;
};

export default Profile;
