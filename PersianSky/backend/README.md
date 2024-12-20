# PersianSky Backend

## Overview
PersianSky is a Yellow Pages-like application that connects users with various service providers. This backend is built using NestJS and MongoDB Atlas, providing a robust and scalable solution for managing users, listings, and authentication.

## Features
- User authentication and authorization
- Role-based access control
- CRUD operations for service listings
- User profile management
- Data validation using DTOs

## Folder Structure
```
backend
├── src
│   ├── app.module.ts          # Root module of the application
│   ├── main.ts                # Entry point of the application
│   ├── common
│   │   ├── decorators          # Custom decorators for role-based access control
│   │   └── guards              # Guards for authorization logic
│   ├── modules
│   │   ├── auth
│   │   │   ├── auth.controller.ts  # Handles authentication routes
│   │   │   ├── auth.module.ts       # Auth module encapsulating logic
│   │   │   ├── auth.service.ts      # Business logic for authentication
│   │   │   └── dto                  # DTOs for authentication
│   │   ├── users
│   │   │   ├── users.controller.ts  # Handles user-related routes
│   │   │   ├── users.module.ts       # Users module encapsulating logic
│   │   │   ├── users.service.ts      # Business logic for user management
│   │   │   └── dto                  # DTOs for user-related data
│   │   ├── listings
│   │   │   ├── listings.controller.ts  # Handles service-related routes
│   │   │   ├── listings.module.ts       # Listings module encapsulating logic
│   │   │   ├── listings.service.ts      # Business logic for listings
│   │   │   └── dto                    # DTOs for listing-related data
│   └── schemas
│       ├── user.schema.ts            # Mongoose schema for User model
│       └── listing.schema.ts         # Mongoose schema for Listing model
├── package.json                      # npm configuration file
├── nest-cli.json                     # NestJS CLI configuration
├── tsconfig.json                     # TypeScript configuration
└── README.md                         # Documentation for the backend project
```

## Getting Started
1. Clone the repository.
2. Navigate to the `backend` directory.
3. Install dependencies:
   ```
   npm install
   ```
4. Set up your MongoDB Atlas connection string in the environment variables.
5. Start the application:
   ```
   npm run start
   ```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.