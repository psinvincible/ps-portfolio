import { Sparkles, Clock } from "lucide-react";

export default function Intro(){
    return (
        <div className="text-center py-6 relative">
            <div className="absolute inset-0 -z-10 flex justify-center">
                <div className="w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1 mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-gray-300">
            <Clock size={16}/>
            Live Since Birth
            <div className="bg-green-500 h-2 w-2 rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-indigo-400 to via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">My Life Journey!</h1>
            
            <p className="mt-4 text-gray-400 max-w-md mx-auto leading-relaxed">A real-time counter tracking every second of my existence
                <span className="inline-flex ml-2 ">
                    <Sparkles className="text-indigo-400" size={18}></Sparkles>
                </span>
            </p>
        </div>
    )
}