"use client";

export default function Controls({ setSearch, setFilter }) {
  return (
    <div className="card flex gap-3 my-6 p-4 items-center">
      <input
        className="flex-1"
        placeholder="🔍 Search notes..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="min-w-30"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option>All</option>
        <option>Work</option>
        <option>Personal</option>
        <option>Ideas</option>
      </select>
    </div>
  );
}