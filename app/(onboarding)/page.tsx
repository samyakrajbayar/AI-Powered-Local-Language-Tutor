import { LanguageSelector } from "@/components/language-selector"

export default function OnboardingPage() {
    return (
        <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] py-10 text-center px-4">
            <div className="space-y-4 mb-10">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Welcome to LinguaBridge
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Select the language you want to learn. We'll simulate real-world scenarios like shopping, doctor visits, and school to help you practice with confidence.
                </p>
            </div>
            <LanguageSelector />
        </div>
    )
}
