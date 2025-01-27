from fastapi import APIRouter, HTTPException
from app.models import Category
from app.db import db
from app.utils import serialize_id

from bson import ObjectId

router = APIRouter()

### CATEGORY ENDPOINTS ###

@router.get("/")
async def get_categories():
    categories = await db.categories.find().to_list(100)
    return [serialize_id(category) for category in categories]

@router.get("/{category_id}")
async def get_category(category_id: str):
    category = await db.categories.find_one({"_id": ObjectId(category_id)})
    if not category:
        raise HTTPException(status_code=404, detail="Category not found")
    return serialize_id(category)

@router.post("/")
async def create_category(category: Category):
    result = await db.categories.insert_one(category.dict(by_alias=True))
    return {"id": str(result.inserted_id)}

@router.put("/{category_id}")
async def update_category(category_id: str, category: Category):
    result = await db.categories.update_one(
        {"_id": ObjectId(category_id)},
        {"$set": category.dict(by_alias=True)}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Category not found")
    return {"message": "Category updated successfully"}

@router.delete("/{category_id}")
async def delete_category(category_id: str):
    result = await db.categories.delete_one({"_id": ObjectId(category_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Category not found")
    return {"message": "Category deleted successfully"}

