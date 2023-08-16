# Todo List Backend Project
This repository contains the backend codebase for the Todo List web application, developed as part of the mockup test for the Binar Academy. The project aims to create a backend API that supports task management and user authentication.

## Demo  
- [Link Demo Project](https://mockuptest-todolist.zeabur.app/)
- [Link Demo API](https://lms-be.zeabur.app/)

Available Account:
- 2345
- 5678

## Authors  
- [@Brahmastabagus](https://github.com/Brahmastabagus)  

# Table of contents  
1. [Tech Stack](#tech-stack)  
2. [Features](#features)
3. [Run Locally](#run-locally)
4. [Environment Variables](#environment-variables)
5. [API Reference](#api-reference)
    1. [User Authentication](#user-authentication)
    2. [Todo Management](#todo-management)
6. [Mockup test answers](#mockup-test-answers)  
    1. [Apakah Kegunaan JSON pada REST API?](#apakah-kegunaan-json-pada-rest-api)
    2. [Jelaskan bagaimana REST api bekerja?](#jelaskan-bagaimana-rest-api-bekerja)  
7. [Feedback](#feedback)  

## Tech Stack  

**Server:** Express JS, Sequelize, PostgreSQL, pg, JSONWebToken

## Features

- API endpoints for task management.
- User authentication.
- CRUD operations for tasks.
- User-specific task management.
- Error Handling.

## Run Locally  

Clone the project  

~~~bash  
  git clone https://github.com/Brahmastabagus/Binar-lms-be.git
~~~

Go to the project directory  

~~~bash  
  cd Binar-lms-be
~~~

Install dependencies  

~~~bash  
npm install
~~~

Setup Sequelize

~~~bash  
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
~~~

Start the server  

~~~bash  
npm run start
~~~

## Environment Variables  

To run this project, you will need to add the following environment variables to your .env file  
`JWT_SIGNATURE_KEY`
`DB_USERNAME`
`DB_PASSWORD`
`DB_NAME`
`DB_HOST`
`DB_PORT`
`PORT`

## API Reference

### User Authentication

#### Get all user

```http
  GET /api/v1/user/
```

#### Login
```http
  POST /api/v1/user/login
```

| Body      | Type          | Description                |
| :-------- | :-------      | :------------------------- |
| `number`  | `integer`     | **Required**. number for login |

### Todo Management

#### Get all todo
```http
  GET /api/v1/todo
```

#### Get todo by user id
```http
  GET /api/v1/todo/user/:id
```

| Parameter | Type          | Description                |
| :-------- | :-------      | :------------------------- |
| `id`      | `integer`     | **Required**. ID user for selecting todo |

#### Create todo
```http
  POST /api/v1/todo
```

| Body      | Type          | Description                |
| :-------- | :-------      | :------------------------- |
| `title`   | `string`      | **Required**   |
| `desc`    | `string`      | **Required**   |
| `date`    | `date`        | **Required**   |
| `priority`| `ENUM`('high', 'medium', 'low')| **Required**   |

#### Update todo
```http
  PUT /api/v1/todo/:id
```

| Parameter | Type          | Description                |
| :-------- | :-------      | :------------------------- |
| `id`      | `integer`     | **Required**               |

#### Delete todo
```http
  DELETE /api/v1/todo/:id
```

| Parameter | Type          | Description                |
| :-------- | :-------      | :------------------------- |
| `id`      | `integer`     | **Required**               |

#### Completed todo
```http
  PUT /api/v1/todo/completed/:id
```

| Parameter | Type          | Description                |
| :-------- | :-------      | :------------------------- |
| `id`      | `integer`     | **Required**. ID todo for checklist completed todo |


# Mockup test answers
Here is the answer to the question provided in the mockup test on the Binar Academy's LMS:

## Apakah Kegunaan JSON pada REST API?
JSON pada REST API berguna sebagai format data untuk melakukan pertukaran informasi dari server ke client atau sebaliknya, dimana JSON ini mudah untuk dibaca oleh manusia maupun dibaca oleh mesin.

## Jelaskan bagaimana REST API bekerja?
Cara kerja dari REST API itu adalah dari client pengirimkan permintaan ke server. Permintaan akan dikirimkan melalui sebuah Endpoint yang sudah tersedia pada REST API yang memiliki operasi HTTP sesuai dengan permintaan. Kemudian, server akan menerima permintaan, mengolah informasi sesuai permintaan, dan mengirimkan kembali ke client dalam bentuk JSON beserta dengan status code.

## Feedback  

If you have any feedback, please reach out to us at brahmastabagus@gmail.com
