"use client";

export default function NoteCard({ note, deleteNote, togglePin, editNote }) {
  return (
    <div className="card p-6 mb-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-extrabold text-purple-300 drop-shadow-sm">{note.title}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${note.category === 'Work' ? 'bg-blue-900 text-blue-200' : note.category === 'Personal' ? 'bg-pink-900 text-pink-200' : 'bg-green-900 text-green-200'}`}>{note.category}</span>
      </div>
      <p className="text-base text-gray-200 mb-3 min-h-12">{note.desc}</p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => togglePin(note.id)}
          className={`px-3 py-1 bg-yellow-400/90 text-yellow-900 hover:bg-yellow-300 shadow-sm`}
          title={note.pinned ? "Unpin note" : "Pin note"}
        >
          {note.pinned ? "📌 Unpin" : "📌 Pin"}
        </button>
        <button
          onClick={() => editNote(note)}
          className="px-3 py-1 bg-blue-500/90 text-white hover:bg-blue-400 shadow-sm"
          title="Edit note"
        >
          ✏️ Edit
        </button>
        <button
          onClick={() => deleteNote(note.id)}
          className="px-3 py-1 bg-red-500/90 text-white hover:bg-red-400 shadow-sm"
          title="Delete note"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}