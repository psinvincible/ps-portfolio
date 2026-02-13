"use client"

import Intro from "@/components/life/Intro"
import LifeCounter from "@/components/life/LifeCounter"
import Link from "next/link"

export default function Life(){
    return (
        <div className="min-h-screen ">
            <div>
                <Link href="/" className=" m-2 p-3 rounded bg-blue-300 text-black">Home</Link>
            </div>
            <Intro />
            <LifeCounter />
        </div>
    )
}