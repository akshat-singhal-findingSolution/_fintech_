# Total Items API

The Total Items API provides a way to calculate the total number of items sold in the Marketing department during the last quarter (Q3) of a specified year.

## Endpoint

GET /api//percentage_of_department_wise_sold_items

## Parameters

- `start_date`: The start date of the Q3 quarter in the format `dd-mmm-yyyy hh:mm:ss.s`.
- `end_date`: The end date of the Q3 quarter in the format `dd-mmm-yyyy hh:mm:ss.s`.

## Response

- Returns percentage representing the percentage of sold items department wise

## Setup

1. Install dependencies:
   npm install
2. Start the server:
   npm run dev
3. The server will run on `http://localhost:4000`.
