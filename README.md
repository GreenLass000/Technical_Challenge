
# To-Do List Application

This project is a To-Do list application built with **Express** (backend) and **React** (frontend), with **PostgreSQL** as the database. The backend and frontend are containerized using **Docker** for easy deployment. This README provides a complete guide on the technologies used, how the app works, and how to run the application both locally and in Docker containers.

---

## Technologies Used

### 1. **Node.js 23 (Backend)**

- **Why Node.js?**  
  Node.js is used for the backend because it's a powerful JavaScript runtime environment that allows us to use JavaScript on the server-side. It's known for its non-blocking, event-driven architecture, making it ideal for real-time applications like to-do lists.
  
- **Why Node.js version 23?**  
  The project is using Node.js 23 to take advantage of the latest performance improvements, features, and security updates that come with the latest release of Node.js.

### 2. **Express (Backend Framework)**

- **Why Express?**  
  Express is a lightweight and flexible web framework for Node.js, making it easy to build REST APIs. It helps to manage routes, request handling, middleware, and other HTTP functionalities, speeding up the development of the backend.

### 3. **React (Frontend)**

- **Why React?**  
  React is a popular JavaScript library for building user interfaces. It is used for creating dynamic, responsive UIs with reusable components. React’s virtual DOM makes updates faster and more efficient, which is perfect for applications with frequent UI changes like a to-do list.

- **Why Vite?**  
  Vite is used as the build tool for the React application. It provides fast hot module replacement (HMR), fast builds, and optimizations out of the box. Vite is chosen for its speed and efficiency, especially during development.

### 4. **PostgreSQL (Database)**

- **Why PostgreSQL?**  
  PostgreSQL is a robust, open-source relational database system. It supports complex queries and ensures data integrity and reliability. It’s used here to store the tasks in the to-do list application.

### 5. **Prisma (ORM)**

- **Why Prisma?**  
  Prisma is an ORM (Object-Relational Mapping) tool used to interact with PostgreSQL. It simplifies database access and helps to write cleaner, type-safe database queries. It also manages schema migrations easily.

### 6. **Docker (Containerization)**

- **Why Docker?**  
  Docker is used to containerize the application for easy deployment and consistency across different environments. By using Docker, we ensure that the application runs the same way on any system, regardless of the local configuration.

---

## Project Structure

The project is divided into two main parts: the **backend** and the **frontend**.

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

## Running the Application

### Without Docker

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/todolist-app.git
   cd todolist-app
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

## Logic Followed

1. **Frontend (React)**: The React application interacts with the backend API to perform CRUD operations on tasks. Each task has a title, description, completion status, and a creation timestamp. Tasks can be added, deleted, updated, or marked as completed.

2. **Backend (Express)**: The Express backend provides RESTful API endpoints for interacting with the tasks. It handles routes for CRUD operations and communicates with the PostgreSQL database using Prisma ORM.

3. **Database (PostgreSQL)**: PostgreSQL stores all task-related data. The `Task` model has fields for `id`, `title`, `description`, `completed`, and `createdAt`.

4. **Containerization (Docker)**: Both the backend and frontend are containerized using Docker. This ensures that the application runs consistently across different environments. Docker Compose is used to manage the services, including the PostgreSQL database.

---

## Conclusion

This application demonstrates how to build a simple full-stack to-do list application using modern web technologies such as React, Express, PostgreSQL, Prisma, and Docker. It showcases how to build, containerize, and deploy a full-stack application with database support.

Feel free to extend this project by adding more features or optimizing the code. Enjoy building with Docker and modern JavaScript frameworks!

