API Documentation
Authentication & Authorization
1. Login
Method: POST
URL: /auth/login
Request Format:

{
  "email": "user@example.com",
  "password": "securepassword"
}
Status Codes:

200 OK – Successful login

401 Unauthorized – Invalid credentials

500 Internal Server Error – Server error

2. Registration
Method: POST
URL: /auth/register
Request Format:

{
  "username": "jan_kowalski",
  "email": "jan.kowalski@example.com",
  "password": "securepassword"
}
Response Format (Success):

{
  "message": "User registered successfully"
}
Status Codes:

201 Created – User successfully registered

400 Bad Request – Invalid input

500 Internal Server Error – Server error

3. Refresh Token
Method: POST
URL: /auth/refresh
Request Format:

Refresh Token: Sent as an HTTP-only secure cookie.

Response Format (Success):

Access Token: Sent as an HTTP-only secure cookie.

Refresh Token: Returned as an HTTP-only secure cookie.

Status Codes:

200 OK – Token refreshed successfully

401 Unauthorized – Invalid refresh token

500 Internal Server Error – Server error

Organization & Team Management
4. Create an Organization
Method: POST
URL: /organizations
Request Format:

{
  "name": "Dev Organization",
  "description": "Software development organization"
}
Response Format (Success):


{
  "id": 1,
  "name": "Dev Organization",
  "description": "Software development organization"
}
Status Codes:

201 Created – Organization created successfully

400 Bad Request – Invalid input

401 Unauthorized – Unauthorized

500 Internal Server Error – Server error

5. Get All Organizations
Method: GET
URL: /organizations
Response Format (Success):

[
  {
    "id": 1,
    "name": "Dev Organization",
    "description": "Software development organization"
  },
  {
    "id": 2,
    "name": "Design Organization",
    "description": "UI/UX Design organization"
  }
]
Status Codes:

200 OK – Organizations retrieved successfully

401 Unauthorized – Unauthorized

500 Internal Server Error – Server error

Project & Task Management

6. Create a New Project
Method: POST
URL: /projects
Request Format:


{
  "name": "Project Alpha",
  "description": "A new project",
  "organization_id": 1
}
Response Format (Success):

{
  "id": 1,
  "name": "Project Alpha",
  "description": "A new project",
  "organization_id": 1
}
Status Codes:

201 Created – Project created successfully

400 Bad Request – Invalid input

401 Unauthorized – Unauthorized

500 Internal Server Error – Server error

7. Create a New Task
Method: POST
URL: /tasks
Request Format:

{
  "title": "Implement feature X",
  "description": "Add a new feature to the application",
  "difficulty": "medium",
  "category": "development",
  "status": "todo",
  "points": 10,
  "project_id": 1,
  "assigned_to": 2
}
Response Format (Success):

{
  "id": 1,
  "title": "Implement feature X",
  "description": "Add a new feature to the application",
  "status": "todo",
  "points": 10,
  "project_id": 1,
  "assigned_to": 2
}
Status Codes:

201 Created – Task created successfully

400 Bad Request – Invalid input

401 Unauthorized – Unauthorized

500 Internal Server Error – Server error

8. Update Task Status
Method: PUT
URL: /tasks/:taskId/status
Request Format:

{
  "status": "in_progress"
}
Response Format (Success):

{
  "message": "Task status updated successfully"
}
Status Codes:

200 OK – Status updated successfully

400 Bad Request – Invalid status

401 Unauthorized – Unauthorized

500 Internal Server Error – Server error

9. Delete a Task
Method: DELETE
URL: /tasks/:taskId
Response Format (Success):

{
  "message": "Task deleted successfully"
}
Status Codes:

200 OK – Task deleted successfully

401 Unauthorized – Unauthorized

404 Not Found – Task not found

500 Internal Server Error – Server error

Scoring System
10. Get Project Rankings
Method: GET
URL: /projects/:projectId/rankings
Response Format (Success):

{
  "project_id": 1,
  "rankings": [
    {
      "user_id": 1,
      "points": 100,
      "rank": 1
    },
    {
      "user_id": 2,
      "points": 80,
      "rank": 2
    }
  ]
}
Status Codes:

200 OK – Rankings retrieved successfully

401 Unauthorized – Unauthorized

404 Not Found – Project not found

500 Internal Server Error – Server error

11. Award Points to a User
Method: POST
URL: /users/:userId/award-points
Request Format:

{
  "task_id": 1,
  "points": 10,
  "reason": "Task completion"
}
Response Format (Success):

{
  "message": "Points awarded successfully"
}
Status Codes:

200 OK – Points awarded successfully

400 Bad Request – Invalid points value

401 Unauthorized – Unauthorized

404 Not Found – User or task not found

500 Internal Server Error – Server error