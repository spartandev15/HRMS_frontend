import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IsToast } from "../store/actions";

const Toast = () => {
  const dispatch = useDispatch();
  const message = useSelector((s) => s.is_toast);
  useEffect(() => {
    if (message != "") {
      const timer = setTimeout(() => {
        dispatch(IsToast(""));
      }, 3000); // 3 seconds

      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);
  return (
    <div className={`toast-container ${message === "" ? "d-none" : ""}`}>
      {message}
    </div>
  );
};

export default Toast;
