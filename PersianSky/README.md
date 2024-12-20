# PersianSky

PersianSky is a Yellow Pages-like application that connects users with various service providers. This project consists of a frontend built with Next.js, Tailwind CSS, and Flowbite UI, and a backend powered by NestJS with MongoDB Atlas.

## Features

- **User Authentication**: Secure login and registration for users.
- **User Roles**: Different roles for users to manage access and permissions.
- **Service Listings**: Users can browse, create, and manage service listings.
- **Responsive Design**: A mobile-friendly interface using Tailwind CSS.

## Technologies Used

- **Frontend**:
  - Next.js
  - Tailwind CSS
  - Flowbite UI
  - TypeScript

- **Backend**:
  - NestJS
  - MongoDB Atlas
  - TypeScript

## Project Structure

```
PersianSky
├── backend
│   ├── src
│   ├── package.json
│   ├── nest-cli.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── pages
│   ├── components
│   ├── styles
│   ├── public
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB Atlas account

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/PersianSky.git
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd PersianSky/backend
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

### Running the Application

- Start the backend server:
  ```
  cd backend
  npm run start
  ```

- Start the frontend application:
  ```
  cd frontend
  npm run dev
  ```

Visit `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.