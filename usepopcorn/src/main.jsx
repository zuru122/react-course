import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from './App.jsx'
import StarRating from "./StarRating";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating defaultRating={3} />
    <StarRating
      defaultRating={3}
      size={24}
      color="red"
      className="test"
      messages={["Terrible", "Bad", "Good", "Okay", "Amazing"]}
    />
  </StrictMode>
);
