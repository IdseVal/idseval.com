import styles from "./Input.module.css";
import { Fragment, forwardRef, useEffect } from "react";

import TextareaAutosize from "react-textarea-autosize";

const Input = forwardRef((props, ref) => {
  const contentType = props.contentType;

  const id = props.id;

  const inputRef = ref;

  const backspaceHandler = (event) => {
    if (event.key === "Backspace" && inputRef.current.value.length > 0) {
      return;
    }
    if (event.key === "Backspace" && inputRef.current.value.length === 0) {
      props.backspacePressed(event, id, inputRef, contentType);
    }
  };

  const enterPressed = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      props.enterPressed(event, id, inputRef, contentType);
    }
  };

  const hoverHandler = (event) => {
    props.hoverHandler(true);
  };
  const noHoverHandler = (event) => {
    props.noHoverHandler(true);
  };

  useEffect(() => {
    inputRef.current.value = props.setValue;
  }, [props.setValue, inputRef]);

  return (
    <Fragment>
      {contentType === "Paragraph" && (
        <TextareaAutosize
          key={props.id}
          onClick={hoverHandler}
          onFocus={hoverHandler}
          onBlur={props.noHoverHandler}
          className={`${styles.paragraph} ${styles.input}`}
          type="text"
          id="paragraph"
          placeholder="Paragraph"
          onChange={props.hoverHandler}
          onKeyPress={enterPressed}
          onKeyDown={backspaceHandler}
          ref={ref}
        />
      )}
      {contentType === "H1" && (
        <TextareaAutosize
          key={props.id}
          onClick={hoverHandler}
          onFocus={hoverHandler}
          onBlur={noHoverHandler}
          className={`${styles.h1} ${styles.input}`}
          type="text"
          id="header"
          placeholder="Subheading"
          onChange={props.inputHandler}
          onKeyPress={enterPressed}
          onKeyDown={backspaceHandler}
          ref={inputRef}
        />
      )}
      {contentType === "Bold" && (
        <TextareaAutosize
          key={props.id}
          onClick={hoverHandler}
          onFocus={hoverHandler}
          onBlur={noHoverHandler}
          className={`${styles.bold} ${styles.input}`}
          type="text"
          id="bold"
          placeholder="bold"
          onChange={props.inputHandler}
          onKeyPress={enterPressed}
          onKeyDown={backspaceHandler}
          ref={ref}
        />
      )}
      {contentType === "Italic" && (
        <TextareaAutosize
          key={props.id}
          onClick={hoverHandler}
          onFocus={hoverHandler}
          onBlur={noHoverHandler}
          className={`${styles.italic} ${styles.input}`}
          type="text"
          id="italic"
          placeholder="italic"
          onChange={props.inputHandler}
          onKeyPress={enterPressed}
          onKeyDown={backspaceHandler}
          ref={ref}
        />
      )}
      {contentType === "Bullet" && (
        <TextareaAutosize
          key={props.id}
          onClick={hoverHandler}
          onFocus={hoverHandler}
          onBlur={noHoverHandler}
          className={`${styles.bullet} ${styles.input}`}
          type="text"
          id="bullet"
          placeholder="List"
          onChange={props.inputHandler}
          onKeyPress={enterPressed}
          onKeyDown={backspaceHandler}
          ref={ref}
        />
      )}
    </Fragment>
  );
});

export default Input;
