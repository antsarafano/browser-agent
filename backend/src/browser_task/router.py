from fastapi import APIRouter

from browser_task.models import TaskPrompt
from browser_task.services import execute_task

router = APIRouter(tags=["Browser Task"])

@router.post("/browser-task")
async def execute_browser_task(prompt: TaskPrompt):
    return await execute_task(prompt)
