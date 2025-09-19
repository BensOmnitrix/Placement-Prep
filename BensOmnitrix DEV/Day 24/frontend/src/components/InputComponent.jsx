import React from "react";
import { useCallback } from "react";
import { useEffect, useRef, useState } from "react";

function InputComponent() {
  const [name, setName] = useState("");
  const [interests, setInterests] = useState([]);
  const [links, setLinks] = useState({});

  const nameRef = useRef("");
  const interestsRef = useRef([]);
  const linksRef = useRef({});

  const postData = useCallback(() => {
    fetch("http://localhost:5000/card/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        interests: interests,
        links: links,
      }),
    });
  }, [name, interests, links]);

  const updateData = useCallback(() => {
    fetch(`http://localhost:5000/card/update?name=${name}&interests=${interests}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        interests,
        links,
      }),
    });
  }, [name, interests, links]);

  return (
    <>
      <input
        type="text"
        placeholder="Enter Name and Description (,)"
        ref={nameRef}
        onChange={(e) => {
          const name = e.target.value.split(",");
          clearTimeout(nameRef.current);
          nameRef.current = setTimeout(() => {
            setName(name);
          }, 500);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter interests (,)"
        ref={interestsRef}
        onChange={(e) => {
          const interests = e.target.value.split(",");
          clearTimeout(interestsRef.current);
          interestsRef.current = setTimeout(() => {
            setInterests(interests);
          }, 500);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="LinkedIn"
        onChange={(e) => {
          const temp = {
            LinkedIn: e.target.value,
          };
          clearTimeout(linksRef.current);
          linksRef.current = setTimeout(() => {
            setLinks({ ...links, ...temp });
          }, 700);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Twitter"
        onChange={(e) => {
          const temp = {
            Twitter: e.target.value,
          };
          clearTimeout(linksRef.current);
          linksRef.current = setTimeout(() => {
            setLinks({ ...links, ...temp });
          }, 700);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Github"
        onChange={(e) => {
          const temp = {
            Github: e.target.value,
          };
          clearTimeout(linksRef.current);
          linksRef.current = setTimeout(() => {
            setLinks({ ...links, ...temp });
          }, 700);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Leetcode"
        onChange={(e) => {
          const temp = {
            Leetcode: e.target.value,
          };
          clearTimeout(linksRef.current);
          linksRef.current = setTimeout(() => {
            setLinks({ ...links, ...temp });
          }, 700);
        }}
      />
      <br />
      <br />
      <button onClick={postData}>Make Business Card</button>
      <button onClick={updateData}>Update Business Card</button>
      <br />
      <br />
    </>
  );
}

export default InputComponent;
