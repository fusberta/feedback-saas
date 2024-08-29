import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import PageHeader from '@/components/page-header'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <div className="border-b sticky inset-x-0 top-0 z-30 w-full transition-all backdrop-blur-sm">
            <div className="w-full max-w-screen-xl mx-auto px-2.5 relative lg:px-20">
              <PageHeader />
            </div>
          </div>
          <div className="w-full max-w-screen-xl mx-auto px-2.5 py-10 lg:px-20">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
