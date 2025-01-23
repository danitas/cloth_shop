from fastapi import APIRouter, HTTPException, Query
from app.models import Product
from app.db import db
from app.utils import serialize_id, validate_category_exists, validate_subcategory_exists, calculate_skip_limit
from bson import ObjectId

router = APIRouter()

@router.get("/")
async def get_products(page: int = Query(1, ge=1), page_size: int = Query(10, ge=1, le=100)):
    """
     Get paginated list of products.
     - `page`: Page number (default: 1).
     - `page_size`: Number of items per page (default: 10, max: 100).
     """
    skip, limit = calculate_skip_limit(page, page_size)
    products = await db.products.find().skip(skip).limit(limit).to_list(page_size)
    total_count = await db.products.count_documents({})
    return {
        "total_count": total_count,
        "page": page,
        "page_size": page_size,
        "products": [serialize_id(product) for product in products],
    }

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
