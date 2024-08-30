# Sitemate-challenge

Welcome to the Sitemate Challenge! This project contains two separate applications: a Node.js server and an API client. Below you'll find instructions on how to get started with both applications.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Applications](#running-the-applications)
- [Improvements](#improvement)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. **Clone the Repository**

   Clone the repository to your local machine:

   ```
   git clone https://github.com/khengquanlim/Sitemate-challenge.git
   ```

2. **Installation of Dependencies**
    Navigate to nodejs-server
    ```npm install```
    Navigate to api-client
    ```npm install```

## Running the Applications
Navigate to the Node.js Server Directory

```cd nodejs-server```

Start the Server

```node server.js```

The server should now be running at http://localhost:5001

Navigate to the API Client Directory

```cd api-client```

Start the Server

```npm start```

The server should now be running at http://localhost:3000

## Improvements

1. Improving error validations - For security concerns as well as aesthetics, utility of error message prompts and required prompts from React Hook Forms can be further improved.
2. Better modularization for frontend application - Currently, component is only separated via services and components. For better maintainability and code cleanliness, each component should have its own directory e.g. CreateItem folder with CreateItem.jsx and CreateItem.css. _Pages_ folder can also be introduced to effectively call from the components to improve better segregation of concerns where pages are able to run independently.
3. Improving security - Authentication and authorization can be implemented on the backend to protect the server while inputs can be sanitized with the addition of security headers should be utilized to improve frontend security.
4. Frontend Improvements - There is much work to further improve the users' experience such as being able to search for the items, view more details of each items, table formatting to compartmentalize each items, mobile friendliness optimization
