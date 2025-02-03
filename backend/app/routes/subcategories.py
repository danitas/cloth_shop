from fastapi import APIRouter, HTTPException, Query
from app.models import Subcategory
from app.db import db
from app.utils import serialize_id, validate_category_exists
from bson import ObjectId
from typing_extensions import Optional

router = APIRouter()

### SUBCATEGORY ENDPOINTS ###

@router.get("/")
async def get_subcategories(filter_field: Optional[str] = Query(None), filter_value: Optional[str] = Query(None)):
    """
     Get list of subcategories.
     - `filter_field`: Field to filter on, e.g., `category_id`.
     - `filter_value`: Value to filter by.
     """

    query = {}

    if filter_field and filter_value:
        if filter_field == 'category_id':
            try:
                query[filter_field] = ObjectId(filter_value)
            except:
                raise HTTPException(status_code=400, detail="Invalid ID format")
        else:
            query[filter_field] = filter_value

    subcategories = await db.subcategories.find(query).to_list(100)
    return [serialize_id(subcategory) for subcategory in subcategories]

@router.get("/{subcategory_slug}")
async def get_subcategory(subcategory_slug: str):
    subcategory = await db.subcategories.find_one({"slug": subcategory_slug})
    if not subcategory:
        raise HTTPException(status_code=404, detail="Subcategory not found")
    return serialize_id(subcategory)

@router.post("/")
async def create_subcategory(subcategory: Subcategory):
    await validate_category_exists(subcategory.category_id)
    result = await db.subcategories.insert_one(subcategory.dict(by_alias=True))
    return {"id": str(result.inserted_id)}

@router.put("/{subcategory_slug}")
async def update_subcategory(subcategory_slug: str, subcategory: Subcategory):
    await validate_category_exists(subcategory.category_id)
    result = await db.subcategories.update_one(
        {"slug": subcategory_slug},
        {"$set": subcategory.dict(by_alias=True)}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Subcategory not found")
    return {"message": "Subcategory updated successfully"}

@router.delete("/{subcategory_slug}")
async def delete_subcategory(subcategory_slug: str):
    result = await db.subcategories.delete_one({"slug": subcategory_slug})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Subcategory not found")
    return {"message": "Subcategory deleted successfully"}