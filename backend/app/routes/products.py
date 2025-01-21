from fastapi import APIRouter, HTTPException
from app.models import Product
from app.db import db

router = APIRouter()

def serialize_product(product):
    """
    Converts MongoDB's ObjectId to string and formats the product dictionary.
    """
    product['_id'] = str(product['_id'])
    return product

@router.get("/")
async def get_products():
    products = await db.products.find().to_list(100)
    serialized_products = [serialize_product(product) for product in products]
    return serialized_products

@router.post("/")
async def create_product(product: Product):
    result = await db.products.insert_one(product.dict())
    return {"id": str(result.inserted_id)}

