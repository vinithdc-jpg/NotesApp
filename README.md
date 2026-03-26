# 🧠 Smart Notes App (Next.js)

A modern, responsive **Smart Notes Application** built using **Next.js (App Router)** and **Tailwind CSS**.
This app allows users to create, manage, and organize notes efficiently with powerful features like search, filtering, pinning, and local storage persistence.

---

## 🚀 Features

* 📝 **Create Notes** — Add notes with title, description, and category
* 📌 **Pin Notes** — Highlight important notes at the top
* 🔍 **Search Notes** — Real-time search by title or description
* 🏷️ **Category Filter** — Filter notes by Work, Personal, or Ideas
* ✏️ **Edit Notes** — Update existing notes easily
* 🗑️ **Delete Notes** — Remove unwanted notes
* 💾 **Local Storage** — Data persists even after page refresh
* 🎨 **Responsive UI** — Clean and modern design using Tailwind CSS

---

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS
* **State Management:** React Hooks (`useState`, `useEffect`)
* **Storage:** Browser LocalStorage

---

## 📁 Project Structure

```
app/
 ├── components/
 │    ├── NoteForm.jsx
 │    ├── NoteCard.jsx
 │    └── Controls.jsx
 │
 ├── page.js
 ├── globals.css
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/notes-app.git
cd notes-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Open in browser

```
http://localhost:3000
```

---

## 🧠 How It Works

* Notes are stored in **localStorage**
* On app load:

  * Data is fetched from localStorage
* On every update:

  * Notes are saved back automatically
* Notes are:

  * 🔍 Filtered by search input
  * 🏷️ Filtered by category
  * 📌 Sorted with pinned notes first

---

## ✨ Future Improvements

* 🌙 Dark / Light mode toggle
* 🎬 Animations (Framer Motion)
* 🔄 Drag & Drop functionality
* 🔐 Authentication (NextAuth)
* ☁️ Backend integration (MongoDB / API routes)
* 🤖 AI-powered note summarization

---

## 📸 Screenshots

> (Add screenshots here for better presentation)

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork this repo and submit a pull request.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Vinith**
Full Stack Developer 🚀

---

⭐ If you like this project, consider giving it a star!
