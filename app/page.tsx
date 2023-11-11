"use client"
import {ModeToggle} from "../components/toggle-theme";
import {Clock} from "../components/Clock";
import { WorldClock } from "@/components/world-clock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <ModeToggle/>
    <Clock/>
    <WorldClock />
    </main>
  )
}
