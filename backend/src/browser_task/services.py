from browser_use import Agent
from fastapi.exceptions import HTTPException

from browser_task.models import TaskPrompt, TaskResponse
from config.llm import get_llm


async def execute_task(prompt: TaskPrompt) -> TaskResponse:
    if prompt.api_key == "":
        raise HTTPException(400, "The API Key is empty.")
    llm = get_llm(model=prompt.model, api_key=prompt.api_key)

    agent = Agent(
        task=prompt.message,
        llm=llm,
    )
    history = await agent.run()
    result = history.final_result()

    if not result:
        raise HTTPException(500, detail="Something went wrong.")

    response = TaskResponse(response=result)
    return response
