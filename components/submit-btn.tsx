'use client'

import { Loader2 } from "lucide-react"
import { Button } from "./ui/button"
import { useFormStatus } from "react-dom"

const SubmitButton = () => {
    const { pending } = useFormStatus()

    return (
        <Button variant={'outline'} type='submit' className='bg-accent text-accent-foreground'>
            {pending ? <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />Creating...
            </> : "Create"}
        </Button>
    )
}

export default SubmitButton