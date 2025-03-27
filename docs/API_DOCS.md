API Documentation

Authentication & Authorization

1. User Login

Method: POST URL: /auth/loginAuthorization Required: ❌ No

Request Format:

{
  "email": "user@example.com",
  "password": "securepassword"
}

Response Format (Success):

{
  "token": "jwt_token_here",
  "expires_in": 3600
}

Status Codes:

200 OK – Successful login

401 Unauthorized – Invalid credentials

500 Internal Server Error – Server error

2. User Registration

Method: POSTURL: /auth/registerAuthorization Required: ❌ No

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

3. Token Refresh

Method: POSTURL: /auth/refreshAuthorization Required: ✅ Yes

Request Format:

{
  "refresh_token": "refresh_token_here"
}

Response Format (Success):

{
  "token": "new_jwt_token_here",
  "expires_in": 3600
}

Status Codes:

200 OK – Token refreshed successfully

401 Unauthorized – Invalid refresh token

500 Internal Server Error – Server error

Team Management

4. Create a New Team

Method: POSTURL: /teamsAuthorization Required: ✅ Yes

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

Method: GETURL: /teamsAuthorization Required: ✅ Yes

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

Method: POSTURL: /tasksAuthorization Required: ✅ Yes

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

Method: PUTURL: /tasks/:taskId/statusAuthorization Required: ✅ Yes

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

Method: DELETEURL: /tasks/:taskIdAuthorization Required: ✅ Yes

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

Method: GETURL: /teams/:teamId/scoreboardAuthorization Required: ✅ Yes

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