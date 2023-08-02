import React, { useEffect } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

export default function SerchHeader() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const { keyword } = useParams();
  const handlechange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);
  return (
    <header className="mb-4 flex w-full border-b border-zinc-600 p-4 text-2xl">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="ml-2 text-3xl font-bold">Broken Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="flex w-full justify-center">
        <input
          className="w-7/12 bg-black p-2 text-gray-50 outline-none"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={handlechange}
        />
        <button className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
