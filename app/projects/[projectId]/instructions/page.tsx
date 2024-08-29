import CopyBtn from "@/components/copy-btn"

export default function Page(
    { params }: {
        params: { projectId: string }
    }
) {
    if (!params.projectId) return <div>Invalid Project ID</div>
    if (!process.env.WIDGET_URL) return <div>Missing Widget URL</div>
    return (
        <div className="">
            <h1 className="text-3xl font-bold mb-4">Start collecting feedback</h1>
            <p className="text-lg text-secondary-foreground">Embed the code in your site:</p>
            <div className="bg-zinc-950 p-6 mt-3 rounded-lg relative">
                <code className="text-foreground flex">
                    {`<my-widget project='${params.projectId}'></my-widget>`}
                    <br/>
                    {`<script src='${process.env.WIDGET_URL}'></script>`}
                </code>
                <CopyBtn text={`<my-widget project='${params.projectId}'></my-widget>\n<script src='${process.env.WIDGET_URL}'></script>`} />
            </div>
        </div>
    )
}
