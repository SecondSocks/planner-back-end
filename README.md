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

1.  Clone the repository:

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

        DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE_NAME

4.  Add in the .env file JWT_SECRET key:

        JWT_SECRET=""

5.  Run database migrations:

        yarn prisma migrate dev

6.  Running the Application
    • Development mode:

        yarn start:dev

• Production mode:

        yarn start:prod

7.  Running Tests
    • Unit tests:

        yarn test

• End-to-end tests:

        yarn test:e2e

• Test coverage:

        yarn test:cov

### Docker

The easiest way to run the application is with Docker Compose, which starts both the API and a PostgreSQL database.

1.  Build and start the services:

    ```bash
    docker compose up --build
    ```

    The API will be available at `http://localhost:4200`.

2.  Run in the background (detached):

    ```bash
    docker compose up -d
    ```

3.  Stop the services:

    ```bash
    docker compose down
    ```

4.  Stop the services and remove the database volume:

    ```bash
    docker compose down -v
    ```

#### Configuration

The Compose file provides sensible defaults. Override them by editing `docker-compose.yml` or by setting environment variables:

- `DATABASE_URL`: PostgreSQL connection string (defaults to `postgresql://planner:planner@db:5432/planner`).
- `JWT_SECRET`: Secret used to sign JSON Web Tokens.

### Manual Docker Deployment

To build and run the image without Docker Compose:

1.  Build the Docker image:

    ```bash
    docker build -t planner-backend .
    ```

2.  Run the Docker container:

    ```bash
    docker run -p 4200:4200 \
      -e DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE_NAME \
      -e JWT_SECRET=your-secret \
      planner-backend
    ```

Ensure that the database connection settings are correctly configured for the production environment. The container automatically applies pending Prisma migrations before starting the server.

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
