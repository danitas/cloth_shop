from fastapi import APIRouter, HTTPException
from app.models import Subcategory
from app.db import db
from app.utils import serialize_id, validate_category_exists
from bson import ObjectId

router = APIRouter()

### SUBCATEGORY ENDPOINTS ###

@router.get("/")
async def get_subcategories():
    subcategories = await db.subcategories.find().to_list(100)
    return [serialize_id(subcategory) for subcategory in subcategories]

@router.get("/{subcategory_id}")
async def get_subcategory(subcategory_id: str):
    subcategory = await db.subcategories.find_one({"_id": ObjectId(subcategory_id)})
    if not subcategory:
        raise HTTPException(status_code=404, detail="Subcategory not found")
    return serialize_id(subcategory)

@router.get("/category/{category_id}")
async def get_subcategories_by_category_id(category_id: str):
    """
    Get all subcategories for a given category ID.
    """
    subcategories = await db.subcategories.find({"category_id": ObjectId(category_id)}).to_list(100)
    if not subcategories:
        raise HTTPException(status_code=404, detail="No subcategories found for this category")
    return [serialize_id(subcategory) for subcategory in subcategories]

@router.post("/")
async def create_subcategory(subcategory: Subcategory):
    await validate_category_exists(subcategory.category_id)
    result = await db.subcategories.insert_one(subcategory.dict(by_alias=True))
    return {"id": str(result.inserted_id)}

@router.put("/{subcategory_id}")
async def update_subcategory(subcategory_id: str, subcategory: Subcategory):
    await validate_category_exists(subcategory.category_id)
    result = await db.subcategories.update_one(
        {"_id": ObjectId(subcategory_id)},
        {"$set": subcategory.dict(by_alias=True)}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Subcategory not found")
    return {"message": "Subcategory updated successfully"}

@router.delete("/{subcategory_id}")
async def delete_subcategory(subcategory_id: str):
    result = await db.subcategories.delete_one({"_id": ObjectId(subcategory_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Subcategory not found")
    return {"message": "Subcategory deleted successfully"}