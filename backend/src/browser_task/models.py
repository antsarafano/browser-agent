from pydantic import BaseModel

class TaskPrompt(BaseModel):
    prompt: str

class TaskResponse(BaseModel):
    response: str | None
