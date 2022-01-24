import styles from "./NewInput.module.css";
import {
  Plus,
  ListBullets,
  TextItalic,
  TextHOne,
  TextBolder,
  X,
  TextT,
} from "phosphor-react";

import React, { useState, forwardRef, useEffect } from "react";
import Input from "./Input";

const NewInput = forwardRef((props, ref) => {
  const [isHovering, setIsHovering] = useState(false);

  const [contentType, setContentType] = useState("Paragraph");
  const [optionsOpen, setOptionsOpen] = useState(false);

  let paragraphOptionsStyles = styles.paragraphOptions;

  const hoverHandler = (refTrue) => {
    if (refTrue) {
      setIsHovering(true);
    }
  };
  const noHoverHandler = (refTrue) => {
    if (refTrue) {
      setTimeout(() => {
        setIsHovering(false);
      }, 200);
    }
  };
  if (isHovering) {
    paragraphOptionsStyles = styles.paragraphOptionsVisible;
  }
  if (!isHovering) {
    paragraphOptionsStyles = styles.paragraphOptions;
  }

  const optionsHandler = () => {
    setOptionsOpen(true);
  };

  const closeOptionsHandler = () => {
    setOptionsOpen(false);
  };

  // CHANGE CONTENT TYPE

  const insertH1 = () => {
    setContentType("H1");
    setOptionsOpen(false);
    props.setContentType(props.id, "H1");
  };
  const insertBold = () => {
    setContentType("Bold");
    setOptionsOpen(false);
  };
  const insertItalic = () => {
    setContentType("Italic");
    setOptionsOpen(false);
  };
  const insertBulletpoints = () => {
    setContentType("Bullet");
    setOptionsOpen(false);
  };
  const insertParagraph = () => {
    setContentType("Paragraph");
    setOptionsOpen(false);
  };

  useEffect(() => {
    props.setContentType(props.id, contentType);
  }, [contentType]);

  useEffect(() => {
    setContentType(props.contentType);
  }, [props.contentType]);

  return (
    <div className={styles.paragraphBox} id={props.id}>
      <button className={paragraphOptionsStyles} type="button">
        <Plus size={32} className={styles.icon} onClick={optionsHandler} />
      </button>
      {!optionsOpen && (
        <Input
          key={props.id}
          id={props.id}
          contentType={contentType}
          hoverHandler={hoverHandler}
          noHoverHandler={noHoverHandler}
          inputHandler={noHoverHandler}
          enterPressed={props.enterPressed}
          backspacePressed={props.backspacePressed}
          ref={ref}
          setValue={props.setValue}
        />
      )}
      {optionsOpen && (
        <div className={styles.optionsBox}>
          {contentType !== "Paragraph" && (
            <button className={styles.optionButtons} onClick={insertParagraph}>
              <TextT size={32} />
            </button>
          )}
          {contentType !== "H1" && (
            <button className={styles.optionButtons} onClick={insertH1}>
              <TextHOne size={32} />
            </button>
          )}
          {contentType !== "Bold" && (
            <button className={styles.optionButtons} onClick={insertBold}>
              <TextBolder size={32} />
            </button>
          )}
          {contentType !== "Italic" && (
            <button className={styles.optionButtons} onClick={insertItalic}>
              <TextItalic size={32} />
            </button>
          )}
          {contentType !== "Bullet" && (
            <button
              className={styles.optionButtons}
              onClick={insertBulletpoints}
            >
              <ListBullets size={32} />
            </button>
          )}
          <button
            className={styles.optionButtons}
            onClick={closeOptionsHandler}
          >
            <X size={32} />
          </button>
        </div>
      )}
    </div>
  );
});

export default NewInput;
