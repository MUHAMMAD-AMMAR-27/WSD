import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingPagePlaceholder from "../components/ui_kit/LoadingPagePlaceholder.jsx";
import { useAppSelector, useAppDispatch } from "../src/app/hooks.js";
import {
  selectAlternativeUser,
  selectAuthenticatedUser,
  setAlternativePlusAuthenticatedUser,
} from "../src/features/authenticated_user/authenticatedUserSlice.js";

const SplashPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const authenticatedUser = useAppSelector(selectAuthenticatedUser);
  const alternativeUser = useAppSelector(selectAlternativeUser);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (authenticatedUser !== undefined || alternativeUser !== undefined) {
        dispatch(setAlternativePlusAuthenticatedUser({
          user: undefined, // This Primary User who has Signed In Properly.
          alternativeUser: undefined, // The secondary user who hasn't signed in, the admin might be using his account.
        }));
      }

      const data = window.localStorage.getItem("user");

      if (!data) {
        navigate("/login", { replace: true });
        return;
      }

      let user = null;
      try {
        user = JSON.parse(data);
      } catch (e) {
        navigate("/login", { replace: true });
        return;
      }

      const requiredFields = [
        "id",
        "uid",
        "role",
      ];

      // Check all required fields
      const isValid = requiredFields.every((field) => user[field]);

      if (!isValid) {
        window.localStorage.removeItem("user");
        navigate("/login", { replace: true });
        return;
      }

      // Role-based navigation
      switch (user.role) {
        case "ADMIN":
        case "EMPLOYEE":
          navigate("/dashboard", { replace: true });
          break;

        case "APPLICANT_REF":
          navigate(`/dashboard/applicant_ref/${user.uid}`, { replace: true });
          break;

        case "DEMAND_REF":
          navigate(`/dashboard/demand_ref/${user.uid}`, { replace: true });
          break;

        default:
          navigate("/login", { replace: true });
          break;
      }
    }, 800); // small delay for splash visual

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <LoadingPagePlaceholder />
  );
};

export default SplashPage;
