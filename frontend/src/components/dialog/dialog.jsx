import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function MenuDialog(props) {
  const [openaiKey, setOpenaiKey] = useState("");
  const [geminiKey, setGeminiKey] = useState("");
  const [deepseekKey, setDeepseekKey] = useState("");

  const handleSave = (openaiKey, geminiKey, deepseekKey) => {
    props.onSave({
      openaiKey: openaiKey,
      geminiKey: geminiKey,
      deepseekKey: deepseekKey,
    });
  };

  return (
    <Dialog
      className="menu-dialog"
      open={props.isOpen}
      onOpenChange={props.onClose}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Paramètres</DialogTitle>
          <DialogDescription>Ajoutez les clés d'API ici</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="name-1">OpenAI</Label>
            <Input
              id="name-1"
              name="openai"
              value={openaiKey}
              placeholder="sk-00000000000000000000000000"
              onChange={(e) => setOpenaiKey(e.target.value)}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="username-1">Gemini</Label>
            <Input
              id="username-1"
              name="gemini"
              value={geminiKey}
              placeholder="AIza0000000000000000000000000"
              onChange={(e) => setGeminiKey(e.target.value)}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="username-1">Gemini</Label>
            <Input
              id="username-1"
              name="username"
              value={deepseekKey}
              placeholder="sk-00000000000000000000000000"
              onChange={(e) => setDeepseekKey(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button
            onClick={() => {
              handleSave(openaiKey, geminiKey, deepseekKey);
              props.onClose();
            }}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
