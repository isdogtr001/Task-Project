🚀 Task Manager – Fullstack CRUD Application

A modern fullstack Task Management application built with:

Frontend: React + TypeScript + Tailwind CSS + Zustand

Backend: Node.js + Express + SQLite

Architecture: Clean structure with API layer and state management

✨ Features
🔹 Backend

RESTful CRUD API

SQLite database

Status filtering (To Do / In Progress / Done)

Basic validation

Proper error handling

CORS configuration

🔹 Frontend

Card-based task layout

Create new tasks

Update task status

Delete tasks

Filter by status

Zustand state management

Strict TypeScript (no any)

ESLint clean

📂 Project Structure
task-manager/
│
├── task-backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── database.ts
│   │   └── app.ts
│
├── task-frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── store/
│   │   ├── types/
│   │   └── App.tsx
🛠 Installation & Setup
1️⃣ Clone Repository
git clone <your-repo-url>
cd task-manager
2️⃣ Backend Setup
cd task-backend
npm install
npm run dev

Backend runs on:

http://localhost:3000
3️⃣ Frontend Setup
cd task-frontend
npm install
npm run dev

Frontend runs on:

http://localhost:5173
🌐 API Endpoints
Method	Endpoint	Description
GET	/tasks	Get all tasks
GET	/tasks?status=Done	Filter tasks
POST	/tasks	Create task
PUT	/tasks/:id	Update task
DELETE	/tasks/:id	Delete task
🧠 Technical Highlights

Clean separation of concerns (API / Store / Components)

Strict TypeScript configuration

Type-only imports (import type)

No unsafe any

Proper CORS configuration

Modern React hooks pattern

ESLint compliant

🔒 CORS Configuration (Backend)
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
🎯 Future Improvements

Loading & Error states

Toast notifications

Optimistic updates

Environment variables (.env)

Authentication (JWT)

Dockerization

Deployment (Render / Railway / Vercel)

📜 License

MIT License

👨‍💻 Author

Jatuporn Jaturapol
Fullstack Developer