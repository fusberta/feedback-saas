import NewProjectBtn from '@/components/new-project'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { projects } from '@/db/schema'
import { InferSelectModel } from 'drizzle-orm'
import Link from 'next/link'
import React from 'react'

type Project = InferSelectModel<typeof projects>

type Props = {
    projects: Project[]
}

const ProjectsList = (props: Props) => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl font-bold'>Your Projects</h1>
                <NewProjectBtn />
            </div>
            <ul className='grid grid-cols-1 md:grid-cols-3 m-5 p-4 gap-4'>
                {
                    props.projects.map((project: Project) => (
                        <li key={project.id}>
                            <Card className='max-w-[350px] flex flex-col h-full'>
                                <CardHeader className='flex-1'>
                                    <CardTitle>
                                        {project.name}
                                    </CardTitle>
                                    <CardDescription>
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Link href={`/projects/${project.id}`}>
                                        <Button variant={'outline'}> View Project</Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProjectsList