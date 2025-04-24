# Dataset Viewer Web App
A full-stack web application built with **React** (frontend) and **Python FastAPI** (backend) that serves and visualizes a dataset of student lifestyle and academic performance from Kaggle.

---

## Demo

![App Screenshot](./assets/screenshot.png)


---


# Tech Stack

- **Frontend:** [React](https://reactjs.org), [React Router](https://reactrouter.com)
- **Backend:** [Python](https://www.python.org), [FastAPI](https://fastapi.tiangolo.com/)
- **Dataset Source:** [Kaggle Dataset Link](*)
- **Tools:** GitHub Desktop, Visual Studio Code, npm


---


## Features

- Fetches and displays student data from a FastAPI backend
- React Router navigation between multiple pages
- Live data from a Kaggle dataset via backend API
- Clean, styled UI with future plans for charts and data visualizations


---


## Getting Started

### Clone the Repository

```bash
git clone https://github.com/jerichijer/aP.git
cd aP
```

### 2. Install Dependencies

**Frontend:**
```bash
cd frontend
npm install
npm start
```

**Backend:**
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```