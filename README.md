# Eye Reporter – Backend (Node.js & Express)
________________________________________________________________________________
# Progressive Updates 2nd sprint

**1. Make sure front-end and backend are well communicating**
**2. make sure the each report has a severity level or category**
**3. Add a functionality for users to upvote/downvote the reported issue**
**1. Add a route to upload a video**

_______________________________________________________________________________


## 1. Project Overview

The **Eye Reporter Backend** is a REST API that receives reports from users and returns submitted reports to the frontend.  
This backend does **not use a database**. All data is stored temporarily in memory.

The purpose of this backend is to help students understand:

- Backend application structure
- REST API concepts
- Separation of concerns
- How frontend communicates with backend services

---

## 2. Backend Responsibilities

The backend is responsible for:

- Starting an HTTP server
- Accepting requests from the frontend
- Validating incoming report data
- Temporarily storing reports in memory
- Returning reports to the frontend

---

## 3. Technology Stack

- **Node.js** – Runtime environment  
- **Express.js** – Web framework  
- **CORS** – Allows frontend–backend communication  

---

## 4. Project Structure

eye-reporter-backend/
│
├── src/
│ ├── controllers/
│ │ └── Handles application logic
│ │
│ ├── routes/
│ │ └── Defines API endpoints
│ │
│ ├── data/
│ │ └── Stores reports in memory (array)
│ │
│ ├── app.js
│ │ └── Application configuration and middleware
│ │
│ └── server.js
│ └── Starts the backend server
│
└── package.json



---

## 5. Application Flow

1. Server starts and listens for requests  
2. Frontend sends a request to submit a report  
3. Backend validates the request data  
4. Backend stores the report in memory  
5. Frontend requests all reports  
6. Backend returns stored reports as JSON  

---

## 6. API Endpoints

| Method | Endpoint        | Description              |
|------|-----------------|--------------------------|
| POST | `/api/reports`  | Submit a new report      |
| GET  | `/api/reports`  | Retrieve all reports     |

---

## 7. Data Storage Explanation

- Reports are stored in a JavaScript array
- Data is **not persistent**
- Restarting the server clears all reports

📌 **Learning Point:**  
This demonstrates why production systems use databases.

---

## 8. Validation Rules

Each report must contain:

- Title
- Description
- Category
- Location

Requests missing any required field should be rejected.

---

## 9. Expected Learning Outcomes

Students should be able to:

- Explain REST APIs
- Describe backend folder structure
- Understand in-memory data storage
- Explain how controllers and routes work together
