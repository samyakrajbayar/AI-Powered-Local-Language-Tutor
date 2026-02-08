import { ScenarioCard } from "@/components/scenario-card"
import { ProgressChart } from "@/components/progress-chart"
import { ShoppingCart, Stethoscope, GraduationCap, Bus, User, MessageSquare } from "lucide-react"

export default function DashboardPage() {
    const scenarios = [
        {
            id: "shopping",
            title: "At the Supermarket",
            description: "Learn how to ask for prices, find items, and pay at the checkout.",
            difficulty: "Beginner" as const,
            icon: <ShoppingCart className="h-6 w-6" />,
        },
        {
            id: "doctor",
            title: "Visiting the Doctor",
            description: "Describe symptoms, ask about medication, and schedule appointments.",
            difficulty: "Intermediate" as const,
            icon: <Stethoscope className="h-6 w-6" />,
        },
        {
            id: "school",
            title: "Parent-Teacher Meeting",
            description: "Discuss your child's progress and ask questions about the curriculum.",
            difficulty: "Advanced" as const,
            icon: <GraduationCap className="h-6 w-6" />,
        },
        {
            id: "transport",
            title: "Public Transport",
            description: "Buy tickets, ask for directions, and understand train announcements.",
            difficulty: "Beginner" as const,
            icon: <Bus className="h-6 w-6" />,
        },
        {
            id: "social",
            title: "Meeting New Friends",
            description: "Introduce yourself, ask about hobbies, and make plans.",
            difficulty: "Beginner" as const,
            icon: <User className="h-6 w-6" />,
        },
        {
            id: "housing",
            title: "Finding an Apartment",
            description: "Ask about rent, utilities, and lease agreements.",
            difficulty: "Advanced" as const,
            icon: <MessageSquare className="h-6 w-6" />,
        }
    ]

    return (
        <div className="container py-10 px-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-2">My Dashboard</h1>
                <p className="text-muted-foreground">Track your learning journey and start new scenarios.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-7">
                <div className="lg:col-span-4 grid gap-6 md:grid-cols-2">
                    {scenarios.map((scenario) => (
                        <ScenarioCard key={scenario.id} {...scenario} />
                    ))}
                </div>
                <div className="lg:col-span-3 space-y-6">
                    <ProgressChart />
                    {/* Placeholder for recent activity or achievements */}
                    <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
                        <h3 className="font-semibold leading-none tracking-tight mb-4">Daily Streak</h3>
                        <div className="flex items-center gap-4">
                            <div className="text-4xl font-bold text-primary">5</div>
                            <div className="text-sm text-muted-foreground">Days in a row!<br />Keep it up!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
