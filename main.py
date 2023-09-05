from datetime import datetime
from enum import Enum
from typing import List, Optional, Union

from fastapi_users import fastapi_users, FastAPIUsers
from pydantic import BaseModel, Field

from fastapi import FastAPI, Request, status, Depends
from fastapi.encoders import jsonable_encoder
from fastapi.exceptions import ValidationError
from fastapi.responses import JSONResponse
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi import APIRouter, Request, Depends
from fastapi.middleware.cors import CORSMiddleware
from config import DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER

from server_python.auth import auth_backend
from models.models import food, admins, products
from server_python.database import User
from server_python.manager import get_user_manager
from server_python.schemas import UserRead, UserCreate, UserUpdate, ProductsRead

from sqlalchemy import Column, String, Boolean, Integer, TIMESTAMP, ForeignKey, create_engine, select
from sqlalchemy.ext.asyncio import AsyncSession 
from sqlalchemy.ext.declarative import DeclarativeMeta, declarative_base
from sqlalchemy.orm import sessionmaker, Session

app = FastAPI(
    title="Trading App"
)

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://127.0.0.1:5173'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


fastapi_users = FastAPIUsers[User, int](
    get_user_manager,
    [auth_backend],
)

app.include_router(
    fastapi_users.get_auth_router(auth_backend),
    prefix="/auth",
    tags=["auth"],
)

app.include_router(
    fastapi_users.get_users_router(UserRead, UserUpdate),
    prefix="/users",
    tags=["users"],
)

app.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/auth/jwt",
    tags=["auth"],
)

app.include_router(
    fastapi_users.get_reset_password_router(),
    prefix="/auth",
    tags=["auth"],
)

current_user = fastapi_users.current_user()

templates = Jinja2Templates(directory="templates")


DATABASE_URL = f"postgresql://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

engine = engine = create_engine(DATABASE_URL)

session = Session(bind=engine)



@app.get("/notes")
def protected_route(request: Request, user: User = Depends(current_user)):
    if not(user):
        return templates.TemplateResponse("login.html", {"request": request})
    return templates.TemplateResponse("index.html", {"request": request})
    
@app.get("/login")
def unprotected_route(request: Request):
    return templates.TemplateResponse("login.html", {"request": request})

@app.get("/registration")
def unprotected_route(request: Request):
    return templates.TemplateResponse("registration.html", {"request": request})

@app.get("/burger")
def get_burgers():
    query = select(products).where(products.c.food_type == 3)
    result = session.execute(query)
    S = {}
    for i in result.all():
        S[str(i[1])] = str(i[2])
    return S

@app.get("/pizza")
def get_pizza():
    query = select(products).where(products.c.food_type == 4)
    result = session.execute(query)
    S = {}
    for i in result.all():
        S[str(i[1])] = (i[2])
    return S
    
    

@app.get("/beer")
def get_beer():
    query = select(products).where(products.c.food_type == 5)
    result = session.execute(query)
    S = {}
    for i in result.all():
        S[str(i[1])] = str(i[2])
    return S