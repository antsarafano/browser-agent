import { useState } from "react";
import "./App.css";
import { ChatDemo } from "./components/chat/chat";
import { Header } from "./components/header/header";
import { MenuDialog } from "./components/dialog/dialog";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [model, setModel] = useState("gemini-2.0-flash");

  const [apiKeys, setApiKeys] = useState({
    openaiKey: "",
    geminiKey: "",
    deepseekKey: "",
  });

  return (
    <>
      <Header
        onMenuClick={() => setIsModalOpen(true)}
        model={model}
        setModel={setModel}
      />
      <MenuDialog
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={setApiKeys}
      />
      <ChatDemo model={model} apiKeys={apiKeys} />
      <ToastContainer />
    </>
  );
}

export default App;
