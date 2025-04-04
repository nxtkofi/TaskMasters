API Documentation

Authentication & Authorization

1. Login

Method: POST URL: /auth/loginAuthorization 
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

Method: POSTURL: /auth/registerAuthorization 

Request Format:

{
  "name": "Jan Kowalski",
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

3. Refresh

Method: POSTURL: /auth/refreshAuthorization 

Request Format:

Refresh Token : Sent as HTTP-only Secure Cookie .
Response format (success):

Access Token : Sent as HTTP-only Secure Cookie .
Refresh Token: Returned as HTTP-only Secure Cookie ._in": 3600

Status Codes:

200 OK – Token refreshed successfully

401 Unauthorized – Invalid refresh token

500 Internal Server Error – Server error

Team Management

4. Creating Team

Method: POSTURL: /teamsAuthorization

Request Format:

{
  "name": "Team Alpha",
  "description": "Development team"
}

Response Format (Success):

{
  "id": "team_id_here",
  "name": "Team Alpha",
  "description": "Development team"
}

Status Codes:

201 Created – Team created successfully

400 Bad Request – Invalid input

401 Unauthorized – Unauthorized

500 Internal Server Error – Server error

5. Get All Teams

Method: GETURL: /teamsAuthorization 

Response Format (Success):

[
  {
    "id": "team_id_1",
    "name": "Team Alpha",
    "description": "Development team"
  },
  {
    "id": "team_id_2",
    "name": "Team Beta",
    "description": "Design team"
  }
]

Status Codes:

200 OK – Teams retrieved successfully

401 Unauthorized – Unauthorized

500 Internal Server Error – Server error

Task Lifecycle

6. Create a New Task

Method: POSTURL: /tasksAuthorization 
Request Format:

{
  "title": "Implement feature X",
  "description": "Add a new feature to the application",
  "status": "todo",
  "teamId": "team_id_here"
}

Response Format (Success):

{
  "id": "task_id_here",
  "title": "Implement feature X",
  "description": "Add a new feature to the application",
  "status": "todo",
  "teamId": "team_id_here"
}

Status Codes:

201 Created – Task created successfully

400 Bad Request – Invalid input

401 Unauthorized – Unauthorized

500 Internal Server Error – Server error

7. Update Task Status

Method: PUTURL: /tasks/:taskId/statusAuthorization 

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

8. Delete a Task

Method: DELETEURL: /tasks/:taskIdAuthorization 

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

9. Get Team Scoreboard

Method: GETURL: /teams/:teamId/scoreboardAuthorization 

Response Format (Success):

{
  "teamId": "team_id_here",
  "totalPoints": 150,
  "members": [
    {
      "userId": "user_id_1",
      "points": 75
    },
    {
      "userId": "user_id_2",
      "points": 75
    }
  ]
}

Status Codes:

200 OK – Scoreboard retrieved successfully

401 Unauthorized – Unauthorized

404 Not Found – Team not found

500 Internal Server Error – Server error

10. Award Points to a User

Method: POSTURL: /users/:userId/award-pointsAuthorization Required: ✅ Yes
Request Format:

{
  "points": 10
}

Response Format (Success):

{
  "message": "Points awarded successfully"
}

Status Codes:

200 OK – Points awarded successfully

400 Bad Request – Invalid points value

401 Unauthorized – Unauthorized

404 Not Found – User not found

500 Internal Server Error – Server error