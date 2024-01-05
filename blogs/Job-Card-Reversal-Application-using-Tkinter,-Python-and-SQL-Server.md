---
title: "Job Card Reversal Application using Tkinter, Python and SQL Server"
description: "Exploring the Versatility of Tkinter, Python, and SQL"
date: "2023-10-08T02:22:34+05:30"
draft: false
categories: ["python", "sql"]
---

## Introduction
In this article, I will share my experience of creating a Job Costing Reversal Desktop Application using Python, the Tkinter library, and SQL Server. The application allows searching for job cards, viewing job card details, and performing reversals on selected job card lines.

## Application Overview
The Job Card Reversal application features:
- **Search for Job Cards:** Enter a search term (Job Card Number) to find matching job cards in a treeview widget.
- **View Job Card Details:** Double-click on a job card to view its transaction lines in another treeview widget.
- **Perform Reversals:** Select a transaction line and modify unit cost, quantity, and warehouse. Clicking the "Update" button updates the database.

## User Interface (Frontend)
The user interface uses the Tkinter library, with components including:
- **Treeview Widgets:** Display job cards and transaction lines.
- **Text Boxes:** Display and modify details of selected transaction lines.
- **Buttons:** For searching job cards and inserting new data.

## Database Connectivity
The application connects to the SQL Server database using the pyodbc library. Connection parameters are provided to establish the connection.

## Implementation Details (Backend)
The application follows a modular structure with key functions:
- `search_job_card()`: Retrieves and populates the first treeview widget with matching job cards.
- `display_corresponding_rows(event)`: Fetches and populates the second treeview widget with transaction lines.
- `display_selected_row_values(event)`: Displays details of the selected transaction line in text boxes.
- `update_amount_entry(*args)`: Calculates and updates the amount based on user input.
- `reduce_fTransQty()`: Updates the transaction line's quantity in the database after modification.
- `insert_data()`: Inserts new transaction lines into the database based on user input, performing validation and updating inventory quantities.

## Challenges
During development, challenges included handling database connectivity and executing SQL queries. Setting up the connection to the SQL Server database and ensuring security required thorough testing and configuration.

## Conclusion
Developing the Job Costing Reversal Desktop Application enhanced my programming skills and provided practical experience with Python, Tkinter, and SQL Server. The application's features make it a valuable tool for managing job costing processes effectively.

