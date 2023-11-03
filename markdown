
API Endpoints

### User Authentication


**Endpoint:** POST /user/signup
**Request Body:**

{
  "username": email,
  "password": password
}

Response:

Success (Status: 200 OK)

{
  "message": "successfully registered",
  
}
Failure (Status: 500 Unauthorized)

{
  message: err
}

user

**Endpoint:** POST /user/login

**Request Body:**

{
  "username": email,
  "password": password
}
Response:

Success (Status: 200 OK)
json
Copy code
{
  "message": "you are logged in successfully",
  Token: accessToken
}
Failure (Status: 401 Unauthorized)
json
Copy code
{
  "message":  "something went wrong, try again later"
}
Course Enrollment
Endpoint: POST /enrollment/enroll

Request Body:

{
  "studentId": 1,
  "courseId": 101
}
Response:

Success (Status: 200 OK)
json
Copy code
{
  "message": "Enrolled in the course successfully"
}
Failure (Status: 500 Bad Request)
json
Copy code
{
  "error": "Failed to enroll in the course"
}
User Information Retrieval
Endpoint: GET /user_retrieval/users/:id

Response:

Success (Status: 200 OK)
json
Copy code
{
  "id": 1,
  "username": "example_user",
  "email": "user@example.com"
}
Failure (Status: 404 Not Found)

{
  "message": "An error occurred"
}