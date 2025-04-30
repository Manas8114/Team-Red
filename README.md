### Team Red 

## Installation Steps

### Backend

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your MongoDB connection string:
    ```
    MONGO_URI=mongodb://localhost:27017/studentteam
    ```

4. Start the backend server:
    ```bash
    node server.js
    ```

### Frontend

1. Navigate to the `my-react-app` directory:
    ```bash
    cd my-react-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the frontend application:
    ```bash
    npm start
    ```

## API Endpoints

- **POST /api/members**: Add a new member.
  - Request Body: `{ name, role, email, contact, image }`
  - Example:
    ```json
    {
  "_id": {
    "$oid": "6811ef3f8addbb5346303ee6"
  },
  "name": "Manas Sharma",
  "role": "Backend Developer",
  "email": "ms9508@srmist.edu.in",
  "contact": "6265586868",
  "image": "1746005823150.jpg",
  "__v": 0
    }
    ```

- **GET /api/members**: Get all members.
  - Response:
    ```json
    [
      {
  "_id": {
    "$oid": "6811ef3f8addbb5346303ee6"
  },
  "name": "Manas Sharma",
  "role": "Backend Developer",
  "email": "ms9508@srmist.edu.in",
  "contact": "6265586868",
  "image": "1746005823150.jpg",
  "__v": 0
    },
      ...
    ]
    ```

- **GET /api/members/:id**: Get details of a specific member.
  - Response:
    ```json
    {
  "_id": {
    "$oid": "6811ef3f8addbb5346303ee6"
  },
  "name": "Manas Sharma",
  "role": "Backend Developer",
  "email": "ms9508@srmist.edu.in",
  "contact": "6265586868",
  "image": "1746005823150.jpg",
  "__v": 0
    }
    ```

## How to Run the App

1. Start the backend server:
    ```bash
    cd backend
    node server.js
    ```

2. Start the frontend application:
    ```bash
    cd my-react-app
    npm start
    ```

## Contributing

Manas8114 (https://github.com/manas8114) ,Chetan (https://github.com/Chetanvikas1), Goverdhan (https://github.com/Goverdhan)
