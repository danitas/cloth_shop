from fastapi import APIRouter, HTTPException
from app.models import User
from app.db import db

router = APIRouter()

@router.get("/")
async def get_users():
    users = await db.users.find().to_list(100)
    return users

@router.post("/")
async def create_user(user: User):
    result = await db.users.insert_one(user.dict())
    return {"id": str(result.inserted_id)}

