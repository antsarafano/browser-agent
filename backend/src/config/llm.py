from langchain_deepseek import ChatDeepSeek
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_openai import ChatOpenAI
from pydantic.types import SecretStr
from starlette.exceptions import HTTPException


def get_llm(model: str, api_key: SecretStr):
    match model:
        case "gemini-2.0-flash":
            llm = ChatGoogleGenerativeAI(model=model, api_key=api_key)
        case "gpt-4o":
            llm = ChatOpenAI(model=model, temperature=0.0, api_key=api_key)
        case "deepseek-chat":
            llm = ChatDeepSeek(
                base_url="https://api.deepseek.com/v1",
                model=model,
                api_key=api_key,
            )
        case _:
            raise HTTPException(400, "This model is not supported.")

    return llm
