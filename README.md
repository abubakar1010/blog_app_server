# Blog App Server

Welcome to the Blog App Server! This project is a backend server for a blog application, providing APIs for user authentication, blog management, and admin functionalities.

## Live URL

The live application can be accessed at: [live link]([https://your-live-url.com](https://blog-app-server-seven-mu.vercel.app)

## Features

- User Registration and Login
- JWT-based Authentication
- Blog Creation, Update, and Deletion
- Admin functionalities to manage users and blogs
- Error handling and validation
- Role-based access control

## Technology Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **TypeScript**: Typed superset of JavaScript
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling tool
- **JWT**: JSON Web Tokens for authentication
- **Zod**: TypeScript-first schema declaration and validation library
- **Bcrypt**: Library to hash passwords
- **ESLint**: Linting utility for JavaScript and TypeScript
- **Prettier**: Code formatter

## Setup Instructions

1. **Clone the repository:**

    ```sh
    
    git clone https://github.com/your-username/blog-app-server.git
    cd blog-app-server
    
    ```

2. **Install dependencies:**

    ```sh
    
    npm install
    
    ```

3. **Create a .env file:**

    Use the example.env file as a reference and create a .env file in the root directory. Fill in the required environment variable

4. **Build the project:**

    ```sh
    
    npm run build
    
    ```

5. **Run the project:**

    ```sh
    
    npm run dev
    
    ```

6. **Lint the project:**

    ```sh
    
    npm run lint
    
    ```

7. **Format the code:**

    ```sh
    npm run format
    ```

    

    ## API Endpoints

   ##### Base Url: ` https://blog-app-server-seven-mu.vercel.app/api `

     ***Authentication***
      - POST: `/auth/register: Register a new user`
      - POST: `/auth/login: Login user
    Blogs`

    ***Admin***
      - PATCH: `/admin/:id - Block a user`
      - DELETE: `/admin/blog/:id - Delete a blog`

   ***Blog***
      - POST: `/blogs - Create a new blog`
      - update: `/blogs/:id - Update a blog`
      - DELETE: `/blogs/:id - Delete a blog`
      - GET: `/blogs - Get all blogs`
