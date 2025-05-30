from browser_use.controller.service import Controller
from fastapi.exceptions import HTTPException
from langchain_google_genai import ChatGoogleGenerativeAI
from browser_use import Agent
from dotenv import load_dotenv

from browser_task.models import TaskPrompt, TaskResponse

load_dotenv()

llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash")

controller = Controller(output_model=TaskResponse)

async def execute_task(prompt: TaskPrompt) -> TaskResponse:
    agent = Agent(
        task=prompt.prompt,
        llm=llm,
    )
    history = await agent.run()
    result = history.final_result()

    if not result:
        raise HTTPException(500, detail="Something went wrong.")

    response = TaskResponse(response=result)
    return response
