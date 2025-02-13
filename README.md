![Pabau CRM Logo](https://www.pabau.com/wp-content/uploads/elementor/thumbs/download-pq3fsnaitgyylurbfryzighm46y9be58loymts4eok.png)

# Pabau Kosovo L.L.C - Tasklist for internship April 2024

In this repository, you will find a project split between Backend and Frontend folders:

- **Backend:** Express.js with a MySQL database.
- **Frontend:** Next.js.

This project uses a `docker-compose.yml` file to launch the local environment. Ensure Docker is installed and running before starting work: [Download Docker Here](https://www.docker.com/products/docker-desktop/)

## Instructions to start the local environment

1. **Establish a GitHub account.**
2. **Ensure your Git name is:** `Name Surname`.
3. **Make sure your Git email matches** your internship application.
4. **Clone the repo** `dev-tasklist`.
5. **Ensure Docker is running.**
6. **Open a bash terminal,** navigate to the cloned repo (`dev-tasklist`), and start the local environment with:

    ```bash
    docker-compose up --build
    ```

   This command launches services for MySQL, backend, frontend, and phpMyAdmin. Your backend API is accessible at port 5000 via `http://host.docker.internal:5000`.

7. **Once services are running,** visit `localhost:3000` to view the frontend and begin the tasks.

## Task requirements

### Task 1: (read)

Create a component to list all bookings as separate links:

- Display each booking as **"A Booking on [date] starting at [start_time]"**.
- Clicking a link navigates to `/booking/[id]`.
- On `/booking/[id]`, display:
  - **"This Booking is with [doctor_name] For [service] and it ends on [end_time]"**.
  - Include a **Back button** to return to the homepage.

### Task 2: (write)

Create a page allowing users to make a POST request to `/api/bookings`:

- Form fields: **service, doctor_name, start_time, end_time, date**.
- Successful booking redirects to the main page listing all bookings.
- Display human-readable errors if booking fails.

- TypeScript strictness is false, but type-safe solutions receive maximum points.

- UI/Design implementations count as bonus points.

## Solution Summary

### Task 1: (read)

1. Implemented `BookingList.js` to list bookings as clickable cards.
2. Each card displays booking details: date, start time, doctor name, service, end time.
3. Clicking a card navigates to `/booking/[id]`.
4. On `/booking/[id]`, detailed booking information is shown with a Back button.

### Task 2: (write)

1. Created `create-booking.js` with a form for POST requests to `/api/bookings`.
2. Form includes fields for service, doctor name, start time, end time, date.
3. Successful booking redirects to the main bookings page.
4. Errors during booking display in a user-friendly format.

### Design and UI Enhancements

- Styled components with CSS modules.
- Implemented card-based layout for bookings.
- Added transitions for enhanced user experience.
- Utilized a modern, visually appealing font.

## Warning

- Docker is required for local environment setup.
- Changes to the frontend require restarting services:

    ```bash
    docker-compose down -v
    docker-compose up --build
    ```

- For any issues with Docker or equipment, contact the recruiter to arrange an in-office interview in Prishtina.
