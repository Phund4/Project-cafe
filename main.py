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




from server_python.auth import auth_backend
from server_python.database import User
from server_python.manager import get_user_manager
from server_python.schemas import UserRead, UserCreate, UserUpdate

app = FastAPI(
    title="Trading App"
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

current_user = fastapi_users.current_user()

templates = Jinja2Templates(directory="templates")





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
