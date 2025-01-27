from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import products, users, categories, subcategories

app = FastAPI()

app.include_router(products.router, prefix='/products', tags=["Products"])
app.include_router(users.router, prefix='/users', tags=["Users"])
app.include_router(categories.router, prefix='/categories', tags=["Categories"])
app.include_router(subcategories.router,  prefix='/subcategories',tags=["Subcategories"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")

def read_root():
    return {"message":"Welcome"}