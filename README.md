# Project Management Application

This project contains two parts:
- A **React.js** application (i.e., the frontend SPA)
- A **dummy backend API** to which the React app can communicate (to send and fetch data)

## Setup Instructions

### 1. Install Dependencies

You must run `npm install` in both the frontend and backend project folders.

- Navigate to the `react-frontend` folder and run:
    ```bash
    npm install
    ```

- Then, navigate to the `backend-api` folder and run:
    ```bash
    npm install
    ```

### 2. Running the Servers

After installing the dependencies, you need to start both the backend and frontend servers:

- **Start the dummy backend API**:
    ```bash
    npm start
    ```
    (Inside the `backend-api` folder)

- **Start the React frontend**:
    ```bash
    npm start
    ```
    (Inside the `react-frontend` folder)

### Important

You **MUST** have both servers (backend and frontend) up and running simultaneously for the application to work properly.

## Backend API Details

- The dummy backend API does not use any external database.
- Instead, it saves dummy data to an `events.json` file located inside the backend project folder.

# Challenge / Exercise

## Task Overview

1. **Add five new (dummy) page components** (content can be simple `<h1>` elements)
    - HomePage
    - EventsPage
    - EventDetailPage
    - NewEventPage
    - EditEventPage

2. **Add routing & route definitions for these five pages:**
    - `/` => HomePage
    - `/events` => EventsPage
    - `/events/<some-id>` => EventDetailPage
    - `/events/new` => NewEventPage
    - `/events/<some-id>/edit` => EditEventPage

3. **Add a root layout** that includes the `<MainNavigation>` component above all page components.

4. **Add properly working links** to the MainNavigation.

5. Ensure that the links in **MainNavigation** receive an **"active" class** when active.

6. **Output a list of dummy events** to the EventsPage.
    - Every list item should include a link to the respective EventDetailPage.

7. **Output the ID of the selected event** on the EventDetailPage.

### BONUS
- Add another (nested) layout route that includes the `<EventNavigation>` component above all `/events...` page components.
