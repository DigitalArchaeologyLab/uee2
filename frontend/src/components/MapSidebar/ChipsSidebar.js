import React, { useState, useEffect } from "react";
import BackButton from "../../elements/Buttons/BackButton";
import ResetButton from "../../elements/Buttons/ResetButton";

import "./ChipsSidebar.css";

function ChipsSidebar(props) {
  return (
    <div>
      <span className="chipsNav">
        <BackButton />
        <ResetButton />
      </span>
      <p>I'm a chip!</p>
    </div>
  );
}

export default ChipsSidebar;
