import Table from "@/components/table"
import { db } from "@/db"
import { projects as dbProjects } from "@/db/schema"
import { eq } from "drizzle-orm"
import { ChevronLeft, Globe } from "lucide-react"
import Link from "next/link"

export default async function Page({ params }: {
    params: {
        projectId: string
    }
}) {
    if (!params.projectId) return <div>Invalid Project ID</div>

    const projects = await db.query.projects.findMany({
        where: (eq(dbProjects.id, +params.projectId)),
        with: {
            feedbacks: true
        }
    })

    if (!projects) return <div>Project Not Found</div>

    console.log(projects)

    const project = projects[0]

    return (
        <div>
            <div className="">
                <Link href='/dashboard' className="flex items-center text-cyan-700 text-lg font-medium hover:underline mb-3">
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    <span className="text-lg">Back to projects</span>
                </Link>
            </div>
            <div className="flex items-start justify-between gap-5">
                <div className="">
                    <h1 className="text-3xl font-bold mb-3">{project.name}</h1>
                    <p className="text-xl mb-2">{project.description}</p>
                </div>
                {project.url &&
                    <Link href={project.url} className="text-cyan-700 text-lg flex gap-1 font-medium items-center hover:underline">
                        <Globe className="h-5 w-5" />Visit site
                    </Link>
                }
            </div>
            <Table data={project.feedbacks} />
        </div>
    )
}
