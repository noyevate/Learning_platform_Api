# Learning_platform_Api

# Learning_platform_Api
Welcome to the API project for user authentication, course enrollment, and user information retrieval. This project provides a set of APIs that allow users to perform various actions, including user registration and authentication, enrolling in courses, and retrieving user information


# Table of Contents

User Authentication
Course Enrollment
User Information Retrieval
Api Endpoint

# User Authentication
Signup User: Allows users to register for an account.
Login: Provides user authentication by generating a JWT token upon successful login.

# Course Enrollment
Enroll in Course: Allows users to enroll in a course.
List Enrolled Courses: Retrieves the list of courses a user is currently enrolled in.
User Information Retrieval
Get User Profile: Fetches user profile information including username, email, and other details.
Get User Courses: Retrieves the courses a user is enrolled in.
Getting Started
Follow these instructions to get the project up and running on your system.

# Prerequisites
Node.js installed on your system.
Myql database for storing user and course data.
A code editor of your choice (e.g., Visual Studio Code).


# API Endpoints

 **User Authentication**


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

{
  "message": "you are logged in successfully",
  Token: accessToken
}
Failure (Status: 401 Unauthorized)
json

{
  "message":  "something went wrong, try again later"
}

**Course Enrollment**
**Endpoint:** POST /enrollment/enroll

Request Body:

{
  "studentId": 1,
  "courseId": 101
}
Response:

Success (Status: 200 OK)
json

{
  "message": "Enrolled in the course successfully"
}
Failure (Status: 500 Bad Request)
json

{
  "error": "Failed to enroll in the course"
}


**User Information Retrieval**

**Endpoint:** GET /user_retrieval/users/:id

**Response:**

Success (Status: 200 OK)
json

{
  "id": 1,
  "username": "example_user",
  "email": "user@example.com"
}
Failure (Status: 404 Not Found)

{
  "message": "An error occurred"
}
