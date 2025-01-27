from fastapi import APIRouter, HTTPException, Query
from app.models import Product
from app.db import db
from app.utils import serialize_id, validate_category_exists, validate_subcategory_exists, calculate_skip_limit
from bson import ObjectId
from typing_extensions import Optional

router = APIRouter()

async def get_paginated_products(page: int, page_size: int, filter_field: Optional[str] = "", filter_value: Optional[str] = ""):
    """
    Helper function to fetch paginated products by a given filter.
    """

    query = {}

    if filter_field and filter_value:
        try:
            query[filter_field] = ObjectId(filter_value)
        except Exception:
            raise HTTPException(status_code=400, detail="Invalid ID format")


    skip, limit = calculate_skip_limit(page, page_size)
    # Query the database using the filter
    products = await db.products.find(query).skip(skip).limit(limit).to_list(page_size)
    total_count = await db.products.count_documents(query)

    return {
        "total_count": total_count,
        "page": page,
        "page_size": page_size,
        "products": [serialize_id(product) for product in products],
    }

@router.get("/")
async def get_products(filter_field: Optional[str] = Query(None),filter_value: Optional[str] = Query(None), page: int = Query(1, ge=1), page_size: int = Query(10, ge=1, le=100)):
    """
     Get paginated list of products.
     - `filter_field`: Field to filter on, e.g., `category_id` or `subcategory_id`.
     - `filter_value`: Value to filter by.
     - `page`: Page number (default: 1).
     - `page_size`: Number of items per page (default: 10, max: 100).
     """
    return await get_paginated_products(page, page_size, filter_field, filter_value)

@router.get("/{product_id}")
async def get_product(product_id: str):
    product = await db.products.find_one({"_id": ObjectId(product_id)})
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return serialize_id(product)

@router.post("/")
async def create_product(product: Product):
    # Validate category_id
    await validate_category_exists(product.category_id)
    # Validate subcategory_id
    await validate_subcategory_exists(product.subcategory_id)
    result = await db.products.insert_one(product.dict(by_alias=True))
    return {"id": str(result.inserted_id)}

@router.put("/{product_id}")
async def update_product(product_id: str, product: Product):
    # Validate category_id
    await validate_category_exists(product.category_id)
    # Validate subcategory_id
    await validate_subcategory_exists(product.subcategory_id)
    result = await db.products.update_one(
        {"_id": ObjectId(product_id)},
        {"$set": product.dict(by_alias=True)}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Product not found")
    return {"message": "Product updated successfully"}

@router.delete("/{product_id}")
async def delete_product(product_id: str):
    result = await db.products.delete_one({"_id": ObjectId(product_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Product not found")
    return {"message": "Product deleted successfully"}
