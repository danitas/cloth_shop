from fastapi import APIRouter, HTTPException
from app.models import User
from app.db import db
from app.utils import serialize_id
from bson import ObjectId


router = APIRouter()

@router.get("/")
async def get_users():
    users = await db.users.find().to_list(100)
    return [serialize_id(user) for user in users]

@router.get("/{user_id}")
async def get_user(user_id: str):
    user = await db.users.find_one({"_id": ObjectId(user_id)})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return serialize_id(user)

@router.post("/")
async def create_user(user: User):
    result = await db.users.insert_one(user.dict(by_alias=True))
    return {"id": str(result.inserted_id)}

@router.put("/{user_id}")
async def update_user(user_id: str, user: User):
    result = await db.users.update_one(
        {"_id": ObjectId(user_id)},
        {"$set": user.dict(by_alias=True)}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": "User updated successfully"}

@router.delete("/{user_id}")
async def delete_user(user_id: str):
    result = await db.users.delete_one({"_id": ObjectId(user_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": "User deleted successfully"}
