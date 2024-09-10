import NewProjectBtn from '@/components/new-project'
import { db } from '@/db'
import { projects } from '@/db/schema'
import React from 'react'
import { auth, currentUser } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'
import ProjectsList from './projects-list'
import { getSubscription } from '@/actions/userSubscriptions'

export default async function Page() {
    const { userId } = auth()
    if (!userId) return null

    const userProjects = await db.select().from(projects).where(eq(projects.userId, userId))

    const subscribed = await getSubscription({ userId })

    return (
        <>
            {!subscribed ?
                <ProjectsList projects={userProjects} userId={userId} /> : null
            }
        </>
    )
}