'use client'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Clipboard } from "lucide-react";
import { useState } from "react";


const CopyBtn = ({ text }: { text: string }) => {
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Copied')
        })
    }
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button onClick={() => copyToClipboard(text)} className="text-foreground p-2 hover:text-neutral-400 transition-all duration-200 absolute top-2 right-2">
                        <Clipboard size={20} />
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Copy</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default CopyBtn