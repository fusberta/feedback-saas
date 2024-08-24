import NewProjectBtn from '@/components/new-project'
import { db } from '@/db'
import { projects } from '@/db/schema'
import React from 'react'

export default async function Page() {
    const allProjects = await db.select().from(projects)
    console.log(allProjects)
    
    return (
        <NewProjectBtn />
    )
}