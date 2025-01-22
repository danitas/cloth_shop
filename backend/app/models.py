from pydantic import BaseModel, Field, EmailStr
from typing import Optional, List
from bson import ObjectId

# MongoDB ObjectId Helper
class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid ObjectId")
        return ObjectId(v)

    @classmethod
    def __get_pydantic_json_schema__(cls, schema, handler):
        schema.update(type="string")
        return schema

# Category Model
class Category(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    name: str
    image: Optional[str] = None

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

# Subcategory Model
class Subcategory(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    name: str
    category_id: PyObjectId
    image: Optional[str] = None

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

# Product Model
class Product(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    name: str
    description: str
    price: float
    in_stock: bool
    category_id: PyObjectId
    subcategory_id: PyObjectId
    sizes: Optional[List[str]] = []
    colors: Optional[List[str]] = []
    discount: Optional[str] = None
    is_new: Optional[bool] = False
    is_favorite: Optional[bool] = False
    quantity: Optional[int] = 0
    discounted_price: Optional[float] = None
    has_size: Optional[bool] = True

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}


# User Model
class User(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    user_name: str
    email: EmailStr
    password: str
    is_admin: Optional[bool] = False

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
