"use client"

import * as React from "react"
import { useParams, useRouter } from "next/navigation"
import { ChatWindow, Message } from "@/components/chat-window"
import { InputArea } from "@/components/input-area"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

// Mock data to simulate API response
const scenarios = {
    shopping: {
        title: "At the Supermarket",
        initialMessage: "Hello! Welcome to the supermarket. How can I help you find something today?",
    },
    doctor: {
        title: "Visiting the Doctor",
        initialMessage: "Good morning. What brings you in today?",
    },
    school: {
        title: "Parent-Teacher Meeting",
        initialMessage: "Hi, thanks for coming. I wanted to discuss your child's progress in mathematics.",
    },
    transport: {
        title: "Public Transport",
        initialMessage: "Ticket inspection. Can I see your ticket please?",
    },
    social: {
        title: "Meeting New Friends",
        initialMessage: "Hi! I'm new here. Can I sit with you?",
    },
    housing: {
        title: "Finding an Apartment",
        initialMessage: "Hello, calling about the apartment for rent. Is it still available?",
    }
}

export default function LearnPage() {
    const params = useParams()
    const router = useRouter()
    // Handle potential array or undefined params safely
    const scenarioId = Array.isArray(params?.scenarioId) ? params.scenarioId[0] : params?.scenarioId

    // Default to a fallback or handle loading state if scenarioId is missing
    const scenario = scenarioId && scenarios[scenarioId as keyof typeof scenarios]

    const [messages, setMessages] = React.useState<Message[]>([])
    const [input, setInput] = React.useState("")
    const [isRecording, setIsRecording] = React.useState(false)

    React.useEffect(() => {
        if (scenario) {
            setMessages([
                {
                    id: "1",
                    role: "assistant",
                    content: scenario.initialMessage,
                },
            ])
        }
    }, [scenario])

    const handleSend = () => {
        if (!input.trim()) return

        const newMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: input,
        }

        setMessages((prev) => [...prev, newMessage])
        setInput("")

        // Simulate AI response
        setTimeout(() => {
            const aiResponse: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: "That's great! Try asking more questions.",
            }
            setMessages((prev) => [...prev, aiResponse])
        }, 1000)
    }

    const toggleRecording = () => {
        setIsRecording(!isRecording)
        if (!isRecording) {
            // Simulate recording start
            setTimeout(() => {
                setInput("Simulated voice input...")
                setIsRecording(false)
            }, 2000)
        }
    }

    if (!scenarioId || !scenario) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh]">
                <h2 className="text-xl font-bold">Scenario Not Found</h2>
                <Button onClick={() => router.back()} className="mt-4">Go Back</Button>
            </div>
        )
    }

    return (
        <div className="flex flex-col h-[calc(100vh-3.5rem)] bg-background">
            <header className="flex items-center p-4 border-b bg-background sticky top-0 z-10">
                <Button variant="ghost" size="icon" onClick={() => router.back()} className="mr-2">
                    <ArrowLeft className="h-4 w-4" />
                </Button>
                <div>
                    <h1 className="text-lg font-semibold">{scenario.title}</h1>
                    <p className="text-xs text-muted-foreground">AI Tutor Session</p>
                </div>
            </header>
            <ChatWindow messages={messages} />
            <InputArea
                input={input}
                setInput={setInput}
                onSend={handleSend}
                isRecording={isRecording}
                toggleRecording={toggleRecording}
            />
        </div>
    )
}
