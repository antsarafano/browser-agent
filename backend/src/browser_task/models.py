
from pydantic import BaseModel
from pydantic.types import SecretStr


class TaskPrompt(BaseModel):
    model: str
    api_key: SecretStr
    message: str


class TaskResponse(BaseModel):
    response: str | None
