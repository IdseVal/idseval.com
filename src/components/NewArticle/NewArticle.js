import styles from "./NewArticle.module.css";
import AuthContext from "../../store/auth-context";
import { useContext, useState, useRef, useEffect } from "react";
import React from "react";
import NewInput from "./NewInput";
import { storage } from "../../firebase/firebase";
import { ref, uploadBytes } from "@firebase/storage";

import TextareaAutosize from "react-textarea-autosize";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewArticle = (props) => {
  const authContext = useContext(AuthContext);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showSideBar, setShowSideBar] = useState(false);
  const [enterHeight, setEnterHeight] = useState(0);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const [inputs, setInputs] = useState([
    {
      id: 0,
      ref: React.createRef(),
      value: "",
      type: "Paragraph",
    },
  ]);

  const langRef = useRef("");
  const descriptionRef = useRef("");
  const tag1Ref = useRef("");
  const tag2Ref = useRef("");
  const tag3Ref = useRef("");
  const publisherRef = useRef("");
  const externalLinkRef = useRef("");

  const token = authContext.token;

  const transformedTitle = title.replaceAll(" ", "_");

  const submitHandler = async (event) => {
    event.preventDefault();

    const storageRef = ref(storage, `/images/${transformedTitle}`);
    await uploadBytes(storageRef, image);

    const textArray = inputs.map((input, index) => ({
      id: index,
      value: input.ref.current.value,
      type: input.type,
    }));

    const sideData = {
      language: langRef.current.value,
      description: descriptionRef.current.value,
      tag1: tag1Ref.current.value,
      tag2: tag2Ref.current.value,
      tag3: tag3Ref.current.value,
      publisher: publisherRef.current.value,
      link: externalLinkRef.current.value,
    };

    const url = `https://idsevalblog-default-rtdb.europe-west1.firebasedatabase.app/articles.json?auth=${token}`;
    setIsSubmitting(true);
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        id: transformedTitle,
        title: title,
        text: textArray,
        sideData: sideData,
        date: new Date(),
      }),
    });

    setIsSubmitting(false);
  };

  const inputHandler = (event) => {
    setTitle(event.target.value);
  };

  // Keymapping

  const enterPressed = (event, id, inputRef, contentType) => {
    if (event.key === "Enter") {
      event.preventDefault();

      let idExists = inputs.length > id + 1;

      const firstHalf = inputs.filter((input, index) => index <= id);
      const stepFirstHalf = firstHalf.map((input, index) => ({
        id: index,
        ref: input.ref,
        value: input.ref.current.value,
        type: input.type,
      }));
      const newFirstHalf = [
        ...stepFirstHalf,
        {
          id: id + 1,
          ref: React.createRef(),
          value: "",
          type: contentType,
        },
      ];

      const secondHalf = inputs.filter((input, index) => index > id);
      const newSecondHalf = secondHalf.map((input, index) => ({
        id: input.id + 1,
        ref: input.ref,
        value: input.ref.current.value,
        type: input.type,
      }));

      const finalNewArray = newFirstHalf.concat(newSecondHalf);

      if (!idExists) {
        const newIndex = id + 1;
        setInputs([
          ...inputs,
          {
            id: newIndex,
            ref: React.createRef(),
            value: "",
            type: contentType,
          },
        ]);
        setEnterHeight(id + 1);
      }
      if (idExists) {
        setInputs(finalNewArray);
        inputs[id + 1].ref.current.focus();
      }
    }
  };

  const backspacePressed = (event, id, inputRef, contentType) => {
    if (event.key === "Backspace") {
      event.preventDefault();
      if (inputs.length > 1 && id !== 0) {
        let idIsLast = inputs.length === id + 1;

        const firstHalf = inputs.filter((input, index) => index < id);
        const lastItemFirstHalf = firstHalf[firstHalf.length - 1].id;

        const secondHalf = inputs.filter((input, index) => index > id);
        const newSecondHalf = secondHalf.map((input, index) => ({
          id: lastItemFirstHalf + index + 1,
          ref: React.createRef(),
          value: input.ref.current.value,
          type: input.type,
        }));

        const finalNewArray = firstHalf.concat(newSecondHalf);

        if (!idIsLast) {
          setInputs(finalNewArray);
          inputs[id - 1].ref.current.focus();
        }
        if (idIsLast) {
          const newInputs = inputs.filter((input) => input.id !== id);
          setInputs(newInputs);
          inputs[id - 1].ref.current.focus();
        }
      }
    }
  };

  useEffect(() => {
    if (enterHeight > 0) {
      console.log(inputs[enterHeight]);
      inputs[enterHeight].ref.current.focus();
    }
  }, [enterHeight]);

  const setContentType = (id, contentType) => {
    const changedInput = inputs.find((input) => input.id === id);

    const firstHalf = inputs.filter((input, index) => index < id);
    const newFirstHalf = [
      ...firstHalf,
      {
        id: id,
        ref: React.createRef(),
        value: changedInput.value,
        type: contentType,
      },
    ];

    const secondHalf = inputs.filter((input, index) => index > id);

    const finalNewArray = newFirstHalf.concat(secondHalf);
    setInputs(finalNewArray);
  };

  const showSideBarHandler = () => {
    setShowSideBar(true);
  };
  const hideSideBarHandler = () => {
    setShowSideBar(false);
  };

  const imageHandler = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={submitHandler}>
        {isSubmitting && (
          <div className={styles.spinner}>
            <LoadingSpinner />
          </div>
        )}
        <div className={styles.inputBoxes}>
          {/* Image */}
          <div className={styles.imageInputBox}>
            <input
              className={`${styles.fileImage}`}
              type="file"
              accept=".jpeg, .jpg"
              placeholder="Image"
              id="image"
              onChange={imageHandler}
            />
          </div>
          {/* Title */}
          <TextareaAutosize
            autoFocus
            style={styles.textInput}
            placeholder={"Title"}
            className={`${styles.title} ${styles.input}`}
            type="text"
            id="title"
            onChange={inputHandler}
          />
          {/* Contents */}
          {inputs.map((input, index) => (
            <NewInput
              key={index}
              id={index}
              enterPressed={enterPressed}
              backspacePressed={backspacePressed}
              ref={input.ref}
              setValue={input.value}
              setContentType={setContentType}
              contentType={input.type}
            />
          ))}
        </div>
        <div className={styles.submit}>
          <button onClick={showSideBarHandler} type="button">
            Show sidebar
          </button>

          {showSideBar && (
            <div className={styles.submit}>
              <button onClick={hideSideBarHandler} type="button">
                Hide sidebar
              </button>
              <label>Language</label>
              <select ref={langRef} placeholder="ENG">
                <option>ENG</option>
                <option>NL</option>
              </select>
              <label>Description</label>
              <input ref={descriptionRef} placeholder="Description"></input>
              <label>Tag 1</label>
              <input ref={tag1Ref} placeholder="Tag 1"></input>
              <label>Tag 2</label>
              <input ref={tag2Ref} placeholder="Tag 2"></input>
              <label>Tag 3</label>
              <input ref={tag3Ref} placeholder="Tag 3"></input>
              <label>Publisher(optional)</label>
              <input ref={publisherRef} placeholder="Publisher"></input>
              <label>externalLink(optional)</label>
              <input
                ref={externalLinkRef}
                placeholder="Bitcoinmagazine.com"
              ></input>
              <button type="submit">Submit</button>
            </div>
          )}
        </div>
      </form>
    </main>
  );
};

export default NewArticle;
