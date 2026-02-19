"use client";

import { useRef } from "react";
import classes from "./image-picker.module.css";
function ImagePicker({ label, name }) {
  const imageInput = useRef();
  const handlePickerClick = () => {
    imageInput.current.click();
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          id={name}
          type="file"
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickerClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
