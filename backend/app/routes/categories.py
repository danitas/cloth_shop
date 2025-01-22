from fastapi import APIRouter, HTTPException
from app.models import Category, Subcategory
from app.db import db
from bson import ObjectId

router = APIRouter()

# Helper to serialize MongoDB documents
def serialize(doc):
    doc["_id"] = str(doc["_id"])
    return doc

### CATEGORY ENDPOINTS ###

@router.get("/categories/")
async def get_categories():
    categories = await db.categories.find().to_list(100)
    return [serialize(category) for category in categories]

@router.get("/categories/{category_id}")
async def get_category(category_id: str):
    category = await db.categories.find_one({"_id": ObjectId(category_id)})
    if not category:
        raise HTTPException(status_code=404, detail="Category not found")
    return serialize(category)

@router.post("/categories/")
async def create_category(category: Category):
    result = await db.categories.insert_one(category.dict(by_alias=True))
    return {"id": str(result.inserted_id)}

@router.put("/categories/{category_id}")
async def update_category(category_id: str, category: Category):
    result = await db.categories.update_one(
        {"_id": ObjectId(category_id)},
        {"$set": category.dict(by_alias=True)}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Category not found")
    return {"message": "Category updated successfully"}

@router.delete("/categories/{category_id}")
async def delete_category(category_id: str):
    result = await db.categories.delete_one({"_id": ObjectId(category_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Category not found")
    return {"message": "Category deleted successfully"}

### SUBCATEGORY ENDPOINTS ###

@router.get("/subcategories/")
async def get_subcategories():
    subcategories = await db.subcategories.find().to_list(100)
    return [serialize(subcategory) for subcategory in subcategories]

@router.get("/subcategories/{subcategory_id}")
async def get_subcategory(subcategory_id: str):
    subcategory = await db.subcategories.find_one({"_id": ObjectId(subcategory_id)})
    if not subcategory:
        raise HTTPException(status_code=404, detail="Subcategory not found")
    return serialize(subcategory)

@router.post("/subcategories/")
async def create_subcategory(subcategory: Subcategory):
    result = await db.subcategories.insert_one(subcategory.dict(by_alias=True))
    return {"id": str(result.inserted_id)}

@router.put("/subcategories/{subcategory_id}")
async def update_subcategory(subcategory_id: str, subcategory: Subcategory):
    result = await db.subcategories.update_one(
        {"_id": ObjectId(subcategory_id)},
        {"$set": subcategory.dict(by_alias=True)}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Subcategory not found")
    return {"message": "Subcategory updated successfully"}

@router.delete("/subcategories/{subcategory_id}")
async def delete_subcategory(subcategory_id: str):
    result = await db.subcategories.delete_one({"_id": ObjectId(subcategory_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Subcategory not found")
    return {"message": "Subcategory deleted successfully"}
