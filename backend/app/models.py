from pydantic import BaseModel, Field
from typing import Optional
from bson import ObjectId

class Product(BaseModel):
    name: str
    description: str
    price: float
    in_stock: bool

class User(BaseModel):
    user_name: str
    email: str
    password: str
    is_admin: Optional[bool] = False