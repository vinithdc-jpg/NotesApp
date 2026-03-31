"use client";

import { useEffect, useState } from "react";
import NoteForm from "@/Components/NoteForm";
import NoteCard from "@/Components/NoteCard";
import Controls from "@/Components/Controller";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add Note
  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  // Delete Note
  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  // Toggle Pin ✅ FIXED
  const togglePin = (id) => {
    setNotes(
      notes.map((n) =>
        n.id === id ? { ...n, pinned: !n.pinned } : n
      )
    );
  };

  // Edit Note ✅ ADDED
  const editNote = (note) => {
    deleteNote(note.id);
  };

  // Filter + Search + Sort ✅ ADDED
  const filteredNotes = notes
    .filter(
      (n) =>
        n.title.toLowerCase().includes(search.toLowerCase()) ||
        n.desc.toLowerCase().includes(search.toLowerCase())
    )
    .filter((n) =>
      filter === "All" ? true : n.category === filter
    )
    .sort((a, b) => b.pinned - a.pinned);

  return (
    <main className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">Smart Notes</h1>

      <NoteForm addNote={addNote} />

      <Controls setSearch={setSearch} setFilter={setFilter} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredNotes.length === 0 ? (
          <p className="text-center col-span-2 text-gray-400">
            No notes found
          </p>
        ) : (
          filteredNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              togglePin={togglePin}
              editNote={editNote}
            />
          ))
        )}
      </div>
    </main>
  );
}

export function ThemeToggle() {
  const [theme, setTheme] = useState("light"); // Default for SSR

  useEffect(() => {
    // Only runs on client
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}