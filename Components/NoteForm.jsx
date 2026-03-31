"use client";

import { useState, useEffect } from "react";

export default function NoteForm({ addNote }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("Work");
    const [theme, setTheme] = useState("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Only run on client
        setMounted(true);
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        }
    }, []);

    useEffect(() => {
        if (!mounted) return;
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme, mounted]);

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
        <>
            <div className="flex justify-end mb-2">
                {mounted && (
                    <button
                        type="button"
                        aria-label="Toggle dark/light mode"
                        className="theme-toggle px-3 py-1 rounded shadow text-sm font-semibold border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#232136] text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#393053] transition"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
                    </button>
                )}
            </div>
            <form onSubmit={handleSubmit} className="card space-y-4 p-6 mb-6">
                <input
                    className="w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                />

                <textarea
                    className="w-full min-h-[60px]"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Description"
                    required
                />

                <select
                    className="w-full"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option>Work</option>
                    <option>Personal</option>
                    <option>Ideas</option>
                </select>

                <button className="bg-linear-to-r from-purple-600 to-pink-500 px-4 py-2 rounded w-full text-lg text-white shadow-md hover:from-purple-500 hover:to-pink-400 transition">
                    ➕ Add Note
                </button>
            </form>
        </>
    );
}