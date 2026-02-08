import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Link from "next/link"

interface ScenarioCardProps {
    id: string
    title: string
    description: string
    difficulty: "Beginner" | "Intermediate" | "Advanced"
    icon: React.ReactNode
}

export function ScenarioCard({ id, title, description, difficulty, icon }: ScenarioCardProps) {
    return (
        <Card className="flex flex-col h-full transition-all hover:shadow-lg hover:border-primary/50">
            <CardHeader>
                <div className="flex items-center justify-between mb-2">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                        {icon}
                    </div>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground border">
                        {difficulty}
                    </span>
                </div>
                <CardTitle className="mt-4">{title}</CardTitle>
                <CardDescription className="line-clamp-2">{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                {/* Could add progress bar here later */}
            </CardContent>
            <CardFooter>
                <Button asChild className="w-full">
                    <Link href={`/learn/${id}`}>
                        <Play className="mr-2 h-4 w-4" /> Start Scenario
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
