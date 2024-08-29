import NewProjectBtn from '@/components/new-project'
import { db } from '@/db'
import { projects } from '@/db/schema'
import React from 'react'
import { auth, currentUser } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'
import ProjectsList from './projects-list'

export default async function Page() {
    const { userId } = auth()
    if (!userId) return null

    const userProjects = await db.select().from(projects).where(eq(projects.userId, userId))

    return (
        <>
            <ProjectsList projects={userProjects} />
        </>
    )
}