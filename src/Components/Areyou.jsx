import React from "react";
import "./Areyou.css";

function Areyou() {
  return (
   <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="form-container">
        <form className="form">
          <div className="form-group">
            <label htmlFor="email">Your name</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">How Can We Help You?</label>
            <textarea id="textarea" name="textarea" rows="6" required></textarea>
          </div>
          <button className="form-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Areyou;
