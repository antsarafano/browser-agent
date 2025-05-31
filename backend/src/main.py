from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import browser_task.router as browser_task_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    print("🚀 Application startup... 🚀")
    yield
    print("🛑 Application shutdown 🛑")


app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"message": "The app is running correctly."}


app.include_router(browser_task_router.router)
