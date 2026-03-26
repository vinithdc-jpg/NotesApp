"use client";

export default function NoteCard({ note, deleteNote, togglePin, editNote }) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow">
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p className="text-sm text-gray-300">{note.desc}</p>
      <small className="text-purple-400">{note.category}</small>

      <div className="flex gap-2 mt-3">
        <button
          onClick={() => togglePin(note.id)}
          className="bg-yellow-500 px-2 py-1 rounded"
        >
          {note.pinned ? "Unpin" : "Pin"}
        </button>

        <button
          onClick={() => editNote(note)}
          className="bg-blue-500 px-2 py-1 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => deleteNote(note.id)}
          className="bg-red-500 px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}