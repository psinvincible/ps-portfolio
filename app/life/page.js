"use client"

import Intro from "@/components/life/Intro"
import LifeCounter from "@/components/life/LifeCounter"
import Link from "next/link"

export default function Life(){
    return (
        <>
            <Intro />
            <LifeCounter />
        </>
    )
}