import React, { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../Context/Context";

const Write = () => {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [file, setFile] = useState("");
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }

    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="write">
      {file && (
        <img
          className="writeImg"
          src={URL.createObjectURL(file)}
          alt="kjkjkkj"
        />
      )}
      <form action="" className="writeform" onSubmit={handleSubmit}>
        <div className="writeformgroup">
          <label htmlFor="fileinput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            name=""
            id="fileinput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            className="writeInput"
            autoFocus={true}
            name=""
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            id=""
          />
        </div>
        <div className="writeformgroup">
          <textarea
            placeholder="Tell your Story...."
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writesubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
