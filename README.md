
# To-Do List Application

This project is a simple To-Do list application built with **Express** (backend) and **React** (frontend), with **PostgreSQL** as the database. The app is containerized using **Docker** for easy deployment and scalability.

The app allows users to create, edit, delete, and mark tasks as completed.

---

## Technologies Used

| Technology | Reason for Use |
|------------|----------------|
| **Node.js 23** | The latest version of Node.js is used to run the backend. Node.js is non-blocking and ideal for handling real-time requests in applications like this. |
| **Express** | Express is used to create the REST API for the backend. It simplifies route handling, middleware management, and request processing. |
| **React** | React is used for building the frontend. It enables efficient updates to the UI through a virtual DOM, and its component-based structure helps with reusability and maintainability. |
| **Vite** | Vite is used for fast bundling and HMR (Hot Module Replacement) during development. It’s chosen for its speed and optimization features. |
| **PostgreSQL** | PostgreSQL is used as the relational database to store task data, including task details like title, description, and completion status. |
| **Prisma** | Prisma is used as an ORM to interact with PostgreSQL. It simplifies database queries, helps manage schema migrations, and ensures type-safety. |
| **Docker** | Docker is used to containerize the application, ensuring that it runs consistently across different environments. It simplifies deployment and scaling. |

---

## Project Structure

The project is organized into two main parts: the **backend** and the **frontend**.

```
/project
  /back
    Dockerfile
    package.json
    /src
    /prisma
      schema.prisma
  /front
    Dockerfile
    package.json
    /src
  docker-compose.yml
```

- **Backend**: The backend is built using Express, Node.js, Prisma, and PostgreSQL.
- **Frontend**: The frontend is built using React and Vite.
- **Docker Compose**: Used to manage both the backend and frontend containers along with PostgreSQL.

---

## Database Schema

The application uses PostgreSQL to store task data. The database schema is defined in **`prisma/schema.prisma`**.

### Table: `Task`

| Field       | Type     | Description                        |
|-------------|----------|------------------------------------|
| `id`        | `Int`    | Primary key, auto-incrementing ID. |
| `title`     | `String` | Title of the task.                |
| `description`| `String` | Description of the task.          |
| `completed` | `Boolean`| Status of the task (completed or not). |
| `createdAt` | `DateTime`| Date and time when the task was created. |

```prisma
model Task {
  id          Int      @id @default(autoincrement())
  title       String
  description String
  completed   Boolean  @default(false)
  createdAt   DateTime @default(now())
}
```

### Relationships
The application only has a single table (`Task`) in the database, without any relationships to other tables.

---

## Running the Application

### Without Docker

1. **Clone the repository**:

   ```bash
   git clone https://github.com/GreenLass000/Technical_Challenge.git
   cd Technical_Challenge
   ```

2. **Install dependencies for the backend**:

   ```bash
   cd back
   yarn install
   ```

3. **Install dependencies for the frontend**:

   ```bash
   cd front
   npm install
   ```

4. **Configure the `.env` file**:

   Create a `.env` file in the `back` directory with the following content:

   ```env
   DATABASE_URL=postgresql://postgres:postgres@localhost:5432/todolist?schema=public
   ```

5. **Start PostgreSQL**:

   Make sure PostgreSQL is running locally. You can use Docker or install it natively. If you're using Docker for PostgreSQL:

   ```bash
   docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
   ```

6. **Run the backend**:

   Start the backend server:

   ```bash
   cd back
   yarn start
   ```

7. **Run the frontend**:

   Start the frontend server:

   ```bash
   cd front
   npm start
   ```

### With Docker

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/todolist-app.git
   cd todolist-app
   ```

2. **Build and run the Docker containers**:

   ```bash
   docker-compose up --build
   ```

3. **Access the application**:

   - **Frontend**: Open [http://localhost:3000](http://localhost:3000) in your browser.
   - **Backend**: The API will be available at [http://localhost:4000](http://localhost:4000).
   - **PostgreSQL**: The database will be running at `localhost:5432`.

4. **Stopping the containers**:

   To stop and remove the containers, use:

   ```bash
   docker-compose down
   ```

---

## Application Logic

1. **Frontend (React)**: The React application interacts with the backend API to perform CRUD operations on tasks. Each task has a title, description, completion status, and a creation timestamp. Tasks can be added, deleted, updated, or marked as completed.

2. **Backend (Express)**: The Express backend provides RESTful API endpoints for interacting with the tasks. It handles routes for CRUD operations and communicates with the PostgreSQL database using Prisma ORM.

3. **Database (PostgreSQL)**: PostgreSQL stores all task-related data. The `Task` model has fields for `id`, `title`, `description`, `completed`, and `createdAt`.

4. **Containerization (Docker)**: Both the backend and frontend are containerized using Docker. This ensures that the application runs consistently across different environments. Docker Compose is used to manage the services, including the PostgreSQL database.

---

## Conclusion

This application demonstrates how to build a simple full-stack to-do list application using modern web technologies such as React, Express, PostgreSQL, Prisma, and Docker. It showcases how to build, containerize, and deploy a full-stack application with database support.

Feel free to extend this project by adding more features or optimizing the code. Enjoy building with Docker and modern JavaScript frameworks!
