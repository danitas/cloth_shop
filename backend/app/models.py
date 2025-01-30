from pydantic import BaseModel, Field, EmailStr, ConfigDict
from pydantic.functional_validators import BeforeValidator
from typing import Optional, List
from typing_extensions import Annotated, Literal
from bson import ObjectId

# MongoDB ObjectId Helper
PyObjectId = Annotated[str, BeforeValidator(str)]

# Category Model
class Category(BaseModel):
    name: str
    slug: Field(..., pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$")
    image: Optional[str] = None

    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True,
        json_schema_extra={
            "example": {
                "name": "Shoes",
                "image": "https://someimage.com"
            }
        }
    )

# Subcategory Model
class Subcategory(BaseModel):
    name: str
    slug: Field(..., pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$")
    category_id: PyObjectId
    category_slug: Field(..., pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$")
    image: Optional[str] = None

    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True,
        json_encoders={ObjectId: str},
        json_schema_extra={
            "example": {
                "name": "Hiking shoes",
                "category_id": "00000000000000000001",
                "image": "https://someimage.com"
            }
        }
    )

# Product Model
class Product(BaseModel):
    name: str
    description: str
    currency: Optional[Literal["EUR", "USD"]] = 'EUR'
    image: Optional[str] = None
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

    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True,
        json_encoders={ObjectId: str},
        json_schema_extra={
            "example": {
                "name": "Asics",
                "description": "Asics hiking shoes for running",
                "price": 130,
                "in_stock": True,
                "category_id": "00000000000000000001",
                "subcategory_id": "00000000000000000101",
                "sizes": ["S", "M", "L"],
                "colors": ["red", "blue", "white"],
                "discount": '10',
                "is_new": True,
                "is_favorite": False,
                "quantity": 22,
                "discounted_price": 117,
                "has_size": True,
                "image": "https://someimage.com"
            }
        }
    )


# User Model
class User(BaseModel):
    user_name: str
    email: EmailStr
    password: str
    is_admin: Optional[bool] = False


    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True,
        json_encoders={ObjectId: str}
    )
