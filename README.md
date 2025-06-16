# 📝 Fullstack Todo App (Node.js + MongoDB + Docker + CI/CD)

A fullstack **Todo application** built with **Node.js**, **MongoDB**, and **Express**. Includes **Docker** support and a CI/CD pipeline using **GitHub Actions** to automate testing, Docker image building, and deployment.

## 🚀 Features

- Create, read, update, delete (CRUD) todos
- Status selection (Todo, In Progress, Done)
- Responsive UI with HTML & CSS
- RESTful API with Express
- MongoDB as the data store (via Docker)
- API tests using Postman & Newman
- GitHub Actions for:
  - Linting with ESLint
  - Unit tests with Jest
  - API tests with Newman
  - Docker image build & push

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+)
- Docker & Docker Compose
- npm

### Install dependencies

```bash
npm install

```
## 🎯 Run locally
```bash
npm start
```
Visit: http://localhost:3000

## 🧪 Running Tests
### Lint
```bash
npm run lint
```
### Unit Tests (Jest)
```bash
npm test
```

### API Tests (Newman)
```bash
npm run api-test
```


## 🐳 Docker Setup
### Build Docker image
```bash
docker build -t fullstack-todo-node .
```
### Run the container
```bash
docker run -p 3000:3000 --env MONGO_URL=<your-mongo-url> fullstack-todo-node
```
Replace <your-mongo-url> with your MongoDB URI (e.g., from Docker or MongoDB Atlas).



## ⚙️ CI/CD via GitHub Actions
### This repo includes workflows that:

- Run ESLint

- Execute unit & API tests

- Build Docker image

- Push image to Docker Hub / GitHub Container Registry

---


✨ Happy Coding! ✨



Created with ❤️
📧 bandarairoshana@gmail.com
💼 [LinkedIn - Iroshana Ravishan](https://www.linkedin.com/in/iroshana-ravishan-376706172/)  




