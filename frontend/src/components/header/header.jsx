import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Header(props) {
  const handleChange = (e) => {
    props.setModel(e);
  };

  return (
    <header className="header">
      <div className="header-left">
        <p className="app-name">Jarvis</p>
        <Select value={props.model} onValueChange={handleChange}>
          <SelectTrigger className="header-select">
            <SelectValue placeholder="AI Model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gemini-2.0-flash">Gemini 2.0 Flash</SelectItem>
            <SelectItem value="gpt-4o">OpenAI GPT 4o</SelectItem>
            <SelectItem value="deepseek-chat">Deepseek V3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <button className="menu-button" onClick={props.onMenuClick}>
        <img
          className="menu-icon"
          src="./src/assets/open-menu.png"
          alt="Menu"
        />
      </button>
    </header>
  );
}
