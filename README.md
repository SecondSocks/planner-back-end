# Planner Back-End

This repository contains the back-end service for the Planner application, designed to manage and support comprehensive planning functionalities.

## Description

The Planner Back-End is built with [NestJS](https://nestjs.com/), a progressive Node.js framework for building efficient and scalable server-side applications. It utilizes [Prisma ORM](https://www.prisma.io/) for database management, providing a robust foundation for the Planner application.

## Features

- **Event Management**: Create, update, and delete events.
- User Authentication: Secure user registration and login.
- Group Management: Manage user groups and permissions.
- Messaging: Facilitate communication between users.
- Dashboard: Provide users with a comprehensive overview of their activities.

## Technologies Used

- Node.js: JavaScript runtime environment.
- NestJS: Framework for building efficient server-side applications.
- Prisma ORM: Database toolkit for TypeScript and Node.js.
- PostgreSQL: Relational database management system.
- Docker: Containerization platform for deploying applications.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version <!-- TODO: Specify version -->)
- [Yarn](https://yarnpkg.com/) (version <!-- TODO: Specify version -->)
- [Docker](https://www.docker.com/) (for containerized deployment)

### Installation

1.  planning functionalities.

    ```bash
    git clone https://github.com/SecondSocks/planner-back-end.git
    cd planner-back-end
    ```

2.  Install dependencies:

    ```bash
    yarn install
    ```

3.  Set up the database:
    • Ensure PostgreSQL is installed and running.
    • Create a new database for the application.
    • Configure the database connection in the .env file:

        ```env
        DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE_NAME
        ```

4.  Run database migrations:

        ```bash
        yarn prisma migrate dev
        ```

5.  Running the Application
    • Development mode:

        ```bash
        yarn start:dev
        ```

        • Production mode:

        ```bash
        yarn start:prod
        ```

6.  Running Tests
    • Unit tests:

        ```bash
        yarn test
        ```

        • End-to-end tests:

        ```bash
        yarn test:e2e
        ```

        • Test coverage:
        ```bash
        yarn test:cov
        ```

### Deployment

To deploy the application using Docker:

1.  Build the Docker image:

        ```bash
        docker build -t planner-backend .
        ```

2.  Run the Docker container:

        ```bash
        docker run -p 3000:3000 planner-backend
        ```

Ensure that the database connection settings in the .env file are correctly configured for the production environment.

### Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch: git checkout -b feature/your-feature-name.
3.  Make your changes.
4.  Commit your changes: git commit -m 'Add some feature'.
5.  Push to the branch: git push origin feature/your-feature-name.
6.  Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

• NestJS
• Prisma ORM
• PostgreSQL
• Docker

## Contact

**GitHub**: https://github.com/SecondSocks

For any inquiries or issues, please open an issue on the GitHub repository.

This template provides a comprehensive overview of your project, including setup instructions, technologies used, and contribution guidelines.
