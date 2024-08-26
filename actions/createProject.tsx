'use server'
import { db } from '@/db'
import { projects } from '@/db/schema'
import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export async function createProject(formData: FormData) {
    const user = await currentUser()
    const userId = user?.id

    if (!userId) {
        throw new Error("User not authenticated")
    }

    const project = {
        name: formData.get('name') as string,
        description: formData.get('description') as string,
        url: formData.get('url') as string,
        userId: userId,
    }

    console.log(`Creating new project with data: ${JSON.stringify(project)}`)

    const [newProject] = await db.insert(projects).values(project).returning({ insertedId: projects.id })

    console.log(`Project created with id ${newProject.insertedId}`)

    redirect(`/projects/${newProject.insertedId}/instructions`)
}