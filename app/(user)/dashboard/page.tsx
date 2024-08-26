import NewProjectBtn from '@/components/new-project'
import { db } from '@/db'
import { projects } from '@/db/schema'
import React from 'react'
import { auth, currentUser } from '@clerk/nextjs/server'

export default async function Page() {
    const allProjects = await db.select().from(projects)

    const user = await currentUser()

    console.log(user)

    return (
        <NewProjectBtn />
    )
}