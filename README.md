# Vertice AI SWE Test Project

## Background:

First Credit Union is gearing up for their annual company review meetings, where they reflect and score their past year's performance. The CEO envisions a dashboard that amalgamates all their data into a single, easily sharable interface across the organization.

The organization utilizes a custom-built analytics and data warehouse system, configured to accumulate and maintain comprehensive credit union data in a structured format.

## Task:

### Frontend

- **Dataset JSON File:** `test_project_data.json`
- **Objective:** Develop a single-page React application incorporating Material UI and a chart library of your choice.
  - Display the provided data using three distinct charts, selecting the types you deem most suitable.
  - Implement functionality to toggle between datasets (e.g., Levels, CurrentProducts, PropensityToMoveUp, etc.) for each chart. Note that each chart should display only one dataset at a time.
  - Ensure that the application is responsive across various screen widths, from mobile to desktop.
  - The design and layout of the components are up to you, but aim for a functional and visually appealing user experience.

### Backend

- **Objective:** Create a REST API using Node.js, hosted on AWS AppRunner, exposing an endpoint `/getData` to return the dataset in JSON format.
  - The data can be hardcoded or retrieved directly from a JSON file on the server; there’s no necessity to fetch it externally.

### Additional Features

- Calculate and display the total product count and total member count. This can be achieved by summing `CurrentProducts` for product count and `YData` in Levels for member count.

### Emphasis on Clean Code and Error Handling

- Try to make your code clean, well-organized, and modular. This will allow us to assess your ability to create a maintainable and scalable codebase.
- Implement comprehensive error handling on both the front end and the back end. Ensure that errors are logged appropriately and that the user is informed when something goes wrong.

### Submission

- Commit your project to a GitHub repository that you can share with us. Don’t worry about committing small and often; we won’t review it until you inform us that you’ve concluded.
- Demonstrate your skills and creativity! Feel free to add any additional features or elements that you believe would impress us.

### Note:

- There is no requirement to host the application; running it on localhost is sufficient.

## Show Us What You Can Do!

We are excited to see how quickly you can learn and adapt. This project is not just a test of your current abilities but also an opportunity for you to showcase your potential as a developer. We're particularly interested in understanding your architectural thinking and your approach to thinking wholistically. Good luck!
