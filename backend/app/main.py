from app.routes import products, users, categories
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(products.router, prefix='/products', tags=["Products"])
app.include_router(products.router, prefix='/users', tags=["Users"])
app.include_router(categories.router, tags=["Categories and Subcategories"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")

def read_root():
    return {"message":"Welcome"}