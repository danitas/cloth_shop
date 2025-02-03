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

    for category in categories:
        subcategories = await db.subcategories.find({"category_id": category["_id"]}).to_list(100)
        category['subcategories'] = [serialize_id(sub) for sub in subcategories]

    return [serialize_id(category) for category in categories]

@router.get("/{category_slug}")
async def get_category(category_slug: str):
    category = await db.categories.find_one({"slug": category_slug})
    subcategories = await db.subcategories.find({"category_id": category['_id']}).to_list(100)

    if not category:
        raise HTTPException(status_code=404, detail="Category not found")

    category['subcategories'] = [serialize_id(sub) for sub in subcategories]

    return serialize_id(category)

@router.post("/")
async def create_category(category: Category):
    existing_category = await db.categories.find_one({"slug": category.slug})
    if existing_category:
        raise HTTPException(status_code=400, detail="Slug already exists")

    result = await db.categories.insert_one(category.dict(by_alias=True))
    return {"id": str(result.inserted_id)}

@router.put("/{category_slug}")
async def update_category(category_slug: str, category: Category):
    result = await db.categories.update_one(
        {"slug": category_slug},
        {"$set": category.dict(by_alias=True)}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Category not found")
    return {"message": "Category updated successfully"}

@router.delete("/{category_slug}")
async def delete_category(category_slug: str):
    result = await db.categories.delete_one({"slug": category_slug})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Category not found")
    return {"message": "Category deleted successfully"}

