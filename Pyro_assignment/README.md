# Todo Application

A full-stack Todo application built with Spring Boot (backend) and React with Vite (frontend). Features a clean, professional UI with white and blue color scheme.

## 🚀 Features

- ✅ Create, Read, Update, and Delete todos
- ✅ Mark todos as completed/pending
- ✅ Filter todos by status (All, Pending, Completed)
- ✅ Form validation
- ✅ Clean, professional white and blue UI design
- ✅ Responsive design
- ✅ H2 in-memory database
- ✅ RESTful API

## 🎨 UI Design

The application features a **simple, formal design** with:
- **White card** on light gray background
- **Blue accent colors** (#2196F3) for buttons and active states
- **Green checkmark icon** in the header
- **Minimal, professional styling**
- Single-line todo input with horizontal layout
- Clean todo list with checkboxes and action buttons

## 📁 Project Structure

```
Pyro_assignment/
├── todo-backend/          # Spring Boot backend
│   ├── .mvn/
│   │   └── wrapper/
│   ├── src/
│   │   └── main/
│   │       ├── java/com/pyro/todo/
│   │       │   ├── TodoApplication.java
│   │       │   ├── config/WebConfig.java
│   │       │   ├── entity/Todo.java
│   │       │   ├── repository/TodoRepository.java
│   │       │   ├── service/TodoService.java
│   │       │   ├── controller/TodoController.java
│   │       │   └── exception/GlobalExceptionHandler.java
│   │       └── resources/
│   │           └── application.properties
│   ├── mvnw.cmd
│   └── pom.xml
│
├── todo-frontend/         # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── TodoItem.jsx
│   │   │   ├── TodoItem.css
│   │   │   ├── TodoForm.jsx
│   │   │   ├── TodoForm.css
│   │   │   ├── EditModal.jsx
│   │   │   └── EditModal.css
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── api.js
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
├── README.md
└── H2_DATABASE_ACCESS.md
```

## 🛠️ Technologies Used

### Backend
- Java 17
- Spring Boot 3.2.0
- Spring Data JPA
- H2 Database
- Maven
- Lombok

### Frontend
- React 18
- Vite 7.3.1
- Axios
- CSS3

## 📋 Prerequisites

- Java 17 or higher
- Node.js 16 or higher
- npm or yarn

## 🔧 Installation & Setup

### Backend Setup

1. Navigate to the backend directory:
```bash
cd todo-backend
```

2. Run the application using Maven wrapper:
```bash
.\mvnw.cmd spring-boot:run
```

The backend server will start on `http://localhost:8080`

> **Note:** Use `.\mvnw.cmd` (with `.\` prefix) in PowerShell, not just `mvnw.cmd`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd todo-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| GET | `/api/todos?completed=true` | Get completed todos |
| GET | `/api/todos?completed=false` | Get pending todos |
| GET | `/api/todos/{id}` | Get todo by ID |
| POST | `/api/todos` | Create new todo |
| PUT | `/api/todos/{id}` | Update todo (title, description, completed) |
| DELETE | `/api/todos/{id}` | Delete todo |

### Example API Responses

**GET /api/todos** - Returns JSON array:
```json
[
  {
    "id": 1,
    "title": "Learn Spring Boot",
    "description": "Complete the tutorial",
    "completed": false,
    "createdAt": "2026-02-18T00:08:30.123456"
  }
]
```

## 🗄️ H2 Database Console

Access the H2 console at: `http://localhost:8080/h2-console`

**Connection Details:**
- **JDBC URL**: `jdbc:h2:mem:testdb`
- **Username**: `sa`
- **Password**: (leave empty)

**Useful SQL Queries:**
```sql
-- View all todos
SELECT * FROM TODOS;

-- View completed todos
SELECT * FROM TODOS WHERE COMPLETED = TRUE;

-- View pending todos
SELECT * FROM TODOS WHERE COMPLETED = FALSE;

-- Count total todos
SELECT COUNT(*) AS TOTAL_TODOS FROM TODOS;
```

For more details, see [H2_DATABASE_ACCESS.md](H2_DATABASE_ACCESS.md)

## ✅ Testing the Application

### Quick Start

1. **Start Backend**:
   ```bash
   cd todo-backend
   .\mvnw.cmd spring-boot:run
   ```
   Wait for: `Started TodoApplication in X seconds`

2. **Start Frontend** (in new terminal):
   ```bash
   cd todo-frontend
   npm run dev
   ```

3. **Open Browser**: http://localhost:5173

### Manual Testing Steps

1. **Add a Todo:**
   - Enter a title in the input field
   - Click "Add Todo" button
   - Todo appears in the list below

2. **Validation Test:**
   - Try adding a todo without a title
   - Should show error: "Title is required"

3. **Filter Todos:**
   - Click "All" button - shows all todos
   - Click "Pending" button - shows only incomplete todos
   - Click "Completed" button - shows only completed todos

4. **Toggle Completion:**
   - Click the checkbox next to a todo
   - Todo gets strikethrough and grayed out when completed

5. **Edit a Todo:**
   - Click "Edit" button on any todo
   - Modal opens with current values
   - Modify title, description, or completion status
   - Click "Save" to update

6. **Delete a Todo:**
   - Click "Delete" button
   - Confirm deletion in the dialog
   - Todo is removed from the list

## 🎨 UI Features

- **Clean Design**: White card on light gray background
- **Blue Accents**: Primary buttons and active states use #2196F3
- **Responsive**: Works on desktop, tablet, and mobile devices
- **Real-time Updates**: Changes reflect immediately via Vite HMR
- **Error Handling**: User-friendly error messages
- **Loading States**: Shows loading indicator while fetching data
- **Empty State**: Helpful message when no todos exist

## 🔍 Troubleshooting

### Backend Issues

**Problem:** Port 8080 already in use
```bash
# Windows PowerShell
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

**Problem:** Maven wrapper not recognized
```bash
# Use .\ prefix in PowerShell
.\mvnw.cmd spring-boot:run
```

### Frontend Issues

**Problem:** CORS errors or 404 errors
- Ensure backend is running on port 8080
- Check that `WebConfig.java` exists with CORS configuration
- Restart both servers

**Problem:** npm install fails
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Problem:** Changes not reflecting
- Vite has hot module replacement, but try hard refresh: `Ctrl + Shift + R`
- Or restart the dev server

## 📊 Viewing Data

### Option 1: Frontend UI
- Open http://localhost:5173
- Visual interface with all CRUD operations

### Option 2: H2 Console
- Open http://localhost:8080/h2-console
- Run SQL queries to view data

### Option 3: REST API (JSON)
- Open http://localhost:8080/api/todos in browser
- Returns JSON array of all todos
- Use Postman or curl for POST/PUT/DELETE operations

## 📝 License

This project is created for educational purposes.

## 👨‍💻 Author

Pyro Assignment - Full Stack Todo Application

---

**Quick Links:**
- Frontend: http://localhost:5173
- Backend API: http://localhost:8080/api/todos
- H2 Console: http://localhost:8080/h2-console
