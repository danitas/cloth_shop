from bson import ObjectId
from fastapi import HTTPException

from app.db import db


def serialize_id(product):
    # Recursively convert ObjectId to string for all fields
    for key, value in product.items():
        if isinstance(value, ObjectId):
            product[key] = str(value)
        elif isinstance(value, list):
            product[key] = [
                str(item) if isinstance(item, ObjectId) else item for item in value
            ]
        elif isinstance(value, dict):
            product[key] = serialize_id(value)
    return product

async def validate_category_exists(category_id: str):
    if not ObjectId.is_valid(category_id):
        raise HTTPException(status_code=400, detail="Invalid category ID format")
    category = await db.categories.find_one({"_id": ObjectId(category_id)})
    if not category:
        raise HTTPException(status_code=404, detail="Category does not exist")

async def validate_subcategory_exists(subcategory_id: str):
    if not ObjectId.is_valid(subcategory_id):
        raise HTTPException(status_code=400, detail="Invalid subcategory ID format")
    subcategory = await db.subcategories.find_one({"_id": ObjectId(subcategory_id)})
    if not subcategory:
        raise HTTPException(status_code=404, detail="Subcategory does not exist")

# Helper function for pagination calculations
def calculate_skip_limit(page: int, page_size: int):
    if page < 1:
        raise HTTPException(status_code=400, detail="Page number must be greater than or equal to 1")
    if page_size < 1 or page_size > 100:
        raise HTTPException(status_code=400, detail="Page size must be between 1 and 100")
    skip = (page - 1) * page_size
    return skip, page_size