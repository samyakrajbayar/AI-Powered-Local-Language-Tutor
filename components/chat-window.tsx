"use client"

import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export interface Message {
    id: string
    role: "user" | "assistant"
    content: string
}

interface ChatWindowProps {
    messages: Message[]
}

export function ChatWindow({ messages }: ChatWindowProps) {
    const scrollRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [messages])

    return (
        <ScrollArea className="flex-1 p-4 h-[500px]">
            <div className="space-y-4 max-w-3xl mx-auto">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={cn(
                            "flex w-full items-start gap-4",
                            message.role === "user" ? "flex-row-reverse" : "flex-row"
                        )}
                    >
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={message.role === "assistant" ? "/bot-avatar.png" : "/user-avatar.png"} />
                            <AvatarFallback>{message.role === "assistant" ? "AI" : "ME"}</AvatarFallback>
                        </Avatar>
                        <div
                            className={cn(
                                "rounded-lg px-4 py-3 max-w-[80%]",
                                message.role === "user"
                                    ? "bg-primary text-primary-foreground shadow-sm"
                                    : "bg-muted text-foreground shadow-sm"
                            )}
                        >
                            {message.content}
                        </div>
                    </div>
                ))}
                <div ref={scrollRef} />
            </div>
        </ScrollArea>
    )
}
