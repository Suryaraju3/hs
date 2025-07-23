### PROJECT REPORT
on Hospital

Developed using ReactJS

Submitted by:

Name: Surya R

Designation: Frontend Developer

Company: Workcohol

### Introduction

* This project is a web-based Hospital Management System frontend, built using ReactJS. It helps hospitals manage patients, doctors, and appointments via a user-friendly UI.

### Objective

* To develop a scalable and reusable frontend UI that interacts with a Django REST API backend using Axios and handles authentication using JWT.

### Features Implemented

* User login using access token (JWT)
* Responsive UI using Tailwind
* Protected frontend routes



#  Hospital Management System using Django

### Introduction

* This project is a Hospital Management System built using Django. It allows hospital staff to manage patients, doctors, appointments, and billing. The system provides authentication, role-based access, and RESTful APIs to integrate with frontend frameworks like ReactJS.

### Technology

* Backend- Django REST Framework 
* Database- mysql
* Frontend- ReactJS 
* Auth- JWT
* Tools- Git,GitHub, Postman

### Authentication 
* JWT-based login and token refresh functionality is implemented using SimpleJWT.

### Requirements

* asgiref==3.9.1
* Django==5.2.4
* django-cors-headers==4.7.0
* django-phonenumber-field==8.1.0
* djangorestframework==3.16.0
* djangorestframework_simplejwt==5.5.0
* mysqlclient==2.2.7
* phonenumbers==9.0.9
* PyJWT==2.9.0
* sqlparse==0.5.3
* tzdata==2025.2


### API endpoints

* POST-api/token/ login(JWT)
* POST-Patientdetails Create patients
* Get- Patientdetails List all patients
* Delete- Patientdetails List 

### Security

* JWT Token-based authentication

* Roll based access (admin).

* CORS protection enabled.

### Challenges

* I Faced challenges in connecting Django backend with ReactJS frontend and handling JWT expiration. 