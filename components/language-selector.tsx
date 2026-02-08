"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const languages = [
    {
        id: "en",
        name: "English",
        flag: "🇬🇧",
        greeting: "Hello",
    },
    {
        id: "de",
        name: "German",
        flag: "🇩🇪",
        greeting: "Hallo",
    },
    {
        id: "fr",
        name: "French",
        flag: "🇫🇷",
        greeting: "Bonjour",
    },
    {
        id: "es",
        name: "Spanish",
        flag: "🇪🇸",
        greeting: "Hola",
    },
]

export function LanguageSelector() {
    const [selected, setSelected] = React.useState<string | null>(null)
    const router = useRouter()

    const handleStart = () => {
        if (selected) {
            // In a real app, save selection to context/localstorage
            console.log(`Selected language: ${selected}`)
            router.push("/dashboard")
        }
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 w-full max-w-4xl">
            {languages.map((lang) => (
                <Card
                    key={lang.id}
                    className={cn(
                        "cursor-pointer transition-all hover:border-primary hover:shadow-md",
                        selected === lang.id ? "border-primary ring-2 ring-primary" : ""
                    )}
                    onClick={() => setSelected(lang.id)}
                >
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-4xl">{lang.flag}</CardTitle>
                        {selected === lang.id && (
                            <Check className="h-4 w-4 text-primary" />
                        )}
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{lang.name}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            {lang.greeting}, welcome!
                        </p>
                    </CardContent>
                </Card>
            ))}
            <div className="col-span-full flex justify-center mt-8">
                <Button
                    disabled={!selected}
                    size="lg"
                    className="w-full md:w-auto text-lg px-8 py-6"
                    onClick={handleStart}
                >
                    Start Learning
                </Button>
            </div>
        </div>
    )
}
