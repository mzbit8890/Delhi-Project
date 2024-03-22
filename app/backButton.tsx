"use client"
import { useRouter } from "next/navigation"

const {back} = useRouter()
function Back () {
    return back()
}