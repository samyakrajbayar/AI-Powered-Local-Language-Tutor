"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Mic, Send } from "lucide-react"

interface InputAreaProps {
    input: string
    setInput: (value: string) => void
    onSend: () => void
    isRecording: boolean
    toggleRecording: () => void
}

export function InputArea({ input, setInput, onSend, isRecording, toggleRecording }: InputAreaProps) {
    return (
        <div className="border-t bg-background p-4">
            <div className="max-w-3xl mx-auto flex items-end gap-2">
                <Button
                    variant={isRecording ? "destructive" : "outline"}
                    size="icon"
                    onClick={toggleRecording}
                    className="shrink-0 rounded-full h-12 w-12"
                >
                    <Mic className="h-5 w-5" />
                    <span className="sr-only">Toggle microphone</span>
                </Button>
                <div className="relative flex-1">
                    <Textarea
                        placeholder="Type your message..."
                        className="min-h-[3rem] resize-none pr-12 py-3 rounded-2xl"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault()
                                onSend()
                            }
                        }}
                    />
                    <Button
                        onClick={onSend}
                        size="icon"
                        className="absolute right-2 bottom-2 h-8 w-8 rounded-full"
                        disabled={!input.trim()}
                    >
                        <Send className="h-4 w-4" />
                        <span className="sr-only">Send message</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}
