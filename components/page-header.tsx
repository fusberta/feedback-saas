import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import HeaderMenu from './header-menu'

const PageHeader = () => {
    return (
        <header className='flex h-20 items-center justify-between'>
            <Image 
                src={'/default-monochrome.svg'}
                width={100}
                height={100}
                alt='logo'
            />
            <div className="">
                <SignedOut>
                    <SignInButton>
                        <Button variant={'outline'} className='text-white'>Sign in</Button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <HeaderMenu />
            </div>
        </header>
    )
}

export default PageHeader