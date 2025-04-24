from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

app = FastAPI()

# Utilizing CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load Kaggle Dataset
df = pd.read_csv('kaggleSet.csv')

@app.get("/api/data")
def get_data():

    #--------------------------------------
    # Tesing
    print(df.loc[0, 'age'])

    print((len)(df))

    # Understanding conditionals within DataFrames
    if df.loc[1, 'exam_score'] > 70:

        if df.loc[1, 'exam_score'] == 100:
            print('aced')
        else:
            print('passed')
    else:
        print('did not pass')
    #---------------------------------------

    # Return to normal programming
    data = df.head(2).to_dict(orient="records")
    return data

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)