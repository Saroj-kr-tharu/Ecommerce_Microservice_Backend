# Ecommerce Microservice Backend

**Project Overview**
- **Purpose:** A small e-commerce backend implemented as multiple Node.js microservices (API Gateway, core ecommerce/auth service, remainder/notification service, payment service), designed for containerized deployment with Docker and local development using `nodemon`.
- **Location:** This repository root contains service folders: `01_ApiGateway`, `02_Ecomerce`, `03_RemainderMicroService`, and `05_Payment_microservice`.

**Architecture**
- **API Gateway:** `01_ApiGateway` — routes, logging and rate-limiting, and proxies requests to underlying microservices.
- **Ecommerce / Auth Service:** `02_Ecomerce` — core domain logic (products, users, orders, carts), controllers, services, Sequelize models, migrations and seeders.
- **Remainder / Notification Service:** `03_RemainderMicroService` — scheduled jobs, email/notification workers and cron-based tasks.
- **Payment Service:** `05_Payment_microservice` — payment integration (Stripe present in dependencies) and payment-related models and flows.
- **Messaging / Queueing:** Several services include `amqplib` as a dependency indicating RabbitMQ (or AMQP) usage for asynchronous messaging between services.

**Repository Layout (top-level)**
- **`01_ApiGateway/`**: API Gateway project (Express + http-proxy-middleware).
- **`02_Ecomerce/`**: Main e-commerce service with `src/` (controllers, services, models, migrations, seeders, utils).
- **`03_RemainderMicroService/`**: Notification/remainder microservice.
- **`05_Payment_microservice/`**: Payment microservice (Stripe dependency present).
- **`docker-compose.yml`**, **`docker_remote.yml`**: Compose files to orchestrate multi-container setups.

**How to Run Locally (per-service)**
- **Install dependencies:**

```bash
cd 01_ApiGateway
npm install
cd ../02_Ecomerce
npm install
cd ../03_RemainderMicroService
npm install
cd ../05_Payment_microservice
npm install
```

- **Start a service in development (examples):**

```bash
# API Gateway
cd 01_ApiGateway
npm run start

# Ecommerce / Auth
cd ../02_Ecomerce
npm run start

# Remainder / Notification
cd ../03_RemainderMicroService
npm run start

# Payment
cd ../05_Payment_microservice
npm run start
```

Notes: several services use `nodemon` in their `start` script (hot reload). Adjust `PORT`, database and message broker env vars before starting.

**Docker / Compose**
- The repository contains `docker-compose.yml` and `docker_remote.yml`. Use those to spin up the full stack (services, database, message broker).

Example (compose up):

```bash
docker-compose up --build
```

**Database, Migrations & Seeders**
- The `02_Ecomerce` service uses Sequelize with migrations and seeders located under `src/migrations/` and `src/seeders/`. Run migrations inside the service container or locally using `sequelize-cli` configured in `src/config/`.

Typical commands (from the service directory):

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

**Environment Variables**
- Each service reads environment variables (see `src/config/` or `.env` usage). Common variables to set:
	- **`PORT`**: service listen port
	- **`NODE_ENV`**: development | production
	- **`DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME`**: database connection
	- **`RABBITMQ_URL`** / **`AMQP_URL`**: message broker URL (if used)
	- **`STRIPE_SECRET_KEY`**: payment secret for payment microservice
	- **`EMAIL_HOST`, `EMAIL_USER`, `EMAIL_PASS`**: for sending emails

Refer to each service's `src/config/` folder for exact variable names and default configurations.

**Logging & Monitoring**
- `morgan` is used in the API Gateway for HTTP access logs; services often use console logs. For production, route logs to a centralized logger (e.g., winston + external log store) and configure proper log levels.

**Testing**
- There are no automated test scripts defined in `package.json` files. Add unit and integration tests (Jest/Mocha) per service and include `npm test` scripts.

**Development Workflow & Conventions**
- Services follow a controller → service → repository (Sequelize model) pattern.
- Migrations and seeders are managed with `sequelize-cli`.
- Asynchronous tasks use AMQP (`amqplib`) and cron scheduling (`node-cron`) in the remainder service.

**Troubleshooting**
- If a service fails to connect to the DB: verify env vars and that the DB container is healthy in Docker Compose.
- If message passing fails: ensure RabbitMQ (or configured broker) is reachable and credentials match.

**Next Steps / Improvements**
- Add a top-level `.env.example` listing environment variables for all services.
- Add container healthchecks and a small Makefile or npm scripts at repo root to orchestrate common tasks (migrate, seed, up, down).
- Add CI pipeline and automated tests.

**Contact / Maintainers**
- For questions or contributions, open an issue or contact the repository owner.

----
Generated and validated against the repository package manifests and folder layout.
