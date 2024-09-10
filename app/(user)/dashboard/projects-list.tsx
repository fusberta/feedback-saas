import NewProjectBtn from '@/components/new-project'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { projects } from '@/db/schema'
import { InferSelectModel } from 'drizzle-orm'
import Link from 'next/link'
import React from 'react'
import SubscribeBtn from '../payments/subscribe-btn'
import { maxFreeProjects, monthlyPlanId } from '@/lib/payments'
import { Lock } from 'lucide-react'
import { getSubscription } from '@/actions/userSubscriptions'

type Project = InferSelectModel<typeof projects>

type Props = {
    projects: Project[]
    userId: string
}

const ProjectsList = async (props: Props) => {
    const subscribed = await getSubscription({ userId: props.userId })
    return (
        <div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl font-bold'>Your Projects</h1>
                {
                    subscribed !== true && props.projects.length > maxFreeProjects ? null : <NewProjectBtn />
                }

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
                {
                    !subscribed ? (
                        <Card className="max-w-[350px] flex flex-col h-full">
                            <CardHeader className="flex-1">
                                <CardTitle className="flex flex-row text-sm md:text-lg items-center">
                                    <Lock className="h-4 w-4 md:h-6 md:w-6 mr-2" />
                                    <span>Upgrade to Premium</span></CardTitle>
                                <CardDescription className="mt-3">Unlock unlimited projects</CardDescription>
                            </CardHeader>
                            <div className="w-fit mx-auto mb-4">
                                <SubscribeBtn price={monthlyPlanId} />
                            </div>
                        </Card>
                    ) : null
                }
            </ul>
        </div>
    )
}

export default ProjectsList