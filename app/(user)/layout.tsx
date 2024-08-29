import { Suspense } from "react"
import Loading from "./loading"

export default function UserLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="overflow-hidden">
            <Suspense fallback={<Loading />}>
                {children}
            </Suspense>
        </div>
    )
}