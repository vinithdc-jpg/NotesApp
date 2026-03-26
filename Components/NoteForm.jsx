"use client";

import { useState } from "react";

export default function NoteForm({ addNote }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("Work");

    const handleSubmit = (e) => {
        e.preventDefault();

        addNote({
            id: Date.now(),
            title,
            desc,
            category,
            pinned: false,
        });

        setTitle("");
        setDesc("");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <input
                className="w-full p-2 bg-gray-800 rounded"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
            />

            <textarea
                className="w-full p-2 bg-gray-800 rounded"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Description"
                required
            />

            <select
                className="w-full p-2 bg-gray-800 rounded"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option>Work</option>
                <option>Personal</option>
                <option>Ideas</option>
            </select>

            <button className="bg-purple-600 px-4 py-2 rounded w-full">
                Add Note
            </button>
        </form>
    );
}