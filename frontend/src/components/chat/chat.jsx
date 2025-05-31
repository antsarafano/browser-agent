import { Chat } from "@/components/ui/chat";
import { useState } from "react";
import { toast } from "react-toastify";

export function ChatDemo(props) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        (props.model === "gemini-2.0-flash" &&
          props.apiKeys.geminiKey === "") ||
        (props.model === "gpt-4o" && props.apiKeys.openaiKey === "") ||
        (props.model === "deepseek-chat" && props.apiKeys.deepseekKey === "")
      ) {
        throw new Error("La clé d'API du modèle est vide.");
      }

      let apiKey = "";
      if (props.model === "gemini-2.0-flash") apiKey = props.apiKeys.geminiKey;
      else if (props.model === "gpt-4o") apiKey = props.apiKeys.openaiKey;
      else if (props.model === "deepseek-chat")
        apiKey = props.apiKeys.deepseekKey;
      setInput("");
      setIsLoading(true);
      const newMessage = { role: "user", content: input };
      setMessages([...messages, newMessage]);

      try {
        const response = await fetch("http://localhost:8000/browser-task", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            provider: "gemini",
            model: props.model,
            api_key: apiKey,
            message: input,
          }),
        });

        const data = await response.json();

        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.response },
        ]);
        setIsLoading(false);
      } catch (error) {
        console.error("Erreur:", error);
        setIsLoading(false);
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Chat
      className="chat-ui"
      messages={messages}
      input={input}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      isGenerating={isLoading}
      stop={stop}
    />
  );
}
