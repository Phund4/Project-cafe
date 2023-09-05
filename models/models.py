from datetime import datetime

from sqlalchemy import MetaData, Table, Column, Integer, String, TIMESTAMP, ForeignKey, JSON, Boolean, Sequence

metadata = MetaData()

role = Table(
    "role",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("name", String, nullable=False),
    Column("permissions", JSON),
)

user = Table(
    "user",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("email", String, nullable=False),
    Column("username", String, nullable=False),
    Column("birthdate", String, nullable=False),
    Column("phone_number", String, nullable=False),
    Column("registered_at", TIMESTAMP, default=datetime.utcnow),
    Column("role_id", Integer, ForeignKey(role.c.id)),
    Column("hashed_password", String, nullable=False),
    Column("is_active", Boolean, default=True, nullable=False),
    Column("is_superuser", Boolean, default=False, nullable=False),
    Column("is_verified", Boolean, default=False, nullable=False),
)

food = Table(
    "food",
    metadata,
    Column("id", Integer, Sequence("my_id_2"), primary_key=True ),
    Column("type", String, nullable=False)
)

products = Table(
    "products",
    metadata,
    Column("id", Integer, Sequence("my_id_1"), primary_key=True),
    Column("name", String, nullable=False),
    Column("price", Integer, nullable=False),
    Column("food_type", Integer, ForeignKey(food.c.id))
)

admins = Table(
    "admins",
    metadata,
    Column("Id", Integer, primary_key=True),
    Column("name", String, nullable=False),
    Column("Password", String, nullable=False)

) 
