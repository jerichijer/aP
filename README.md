# aP
This application utilizes a kaggle dataset for student habit vs academic performance. The data set is simulated to explore how lifestyle habits affect academic performance.

# Stack
## Backend
Python utilizing FastAPI
## Dataset
Student Habits vs Academic Performance on Kaggle
## Frontend
React

### Workflow
1. Python backend loads and processes the Kaggle dataset (using pandas)
2. Backend exposes REST API endpoints using FastAPI
3. React frontend fetches data from those API endpoints
4. Frontend displays data visually

### Dev Notes : Run
1. Run the uvicorn backend with uvicorn main:app --reload
2. Run the React frontend with npm start
3. Check for 200 in backend terminal
