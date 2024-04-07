import React from "react";
import "./input.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface InputProps {
  placeholder: string;
  icon: IconDefinition;
}

function Input(props: InputProps) {
  return (
    <div className="input-box">
      <FontAwesomeIcon icon={props.icon} />
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
}

export default Input;
