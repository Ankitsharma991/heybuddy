import Image from "next/image"
import Link from "next/link"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10'>
            <div className='flex w-full max-w-sm flex-col gap-6'>
                <Link href="/" className='flex items-center gap-2 self-center font-medium'>
                    <Image src="/logos/logo2.svg" alt='HeyBuddy' width={150} height={25} />
                </Link>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout