"use client";

export default function Controls({ setSearch, setFilter }) {
  return (
    <div className="flex gap-3 my-4">
      <input
        className="flex-1 p-2 bg-gray-800 rounded"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="p-2 bg-gray-800 rounded"
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