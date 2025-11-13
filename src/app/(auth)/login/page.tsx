import LoginForm from '@/features/components/login-form'
import { requireUnAuth } from '@/lib/auth-utils'

const page = async () => {
    await requireUnAuth()
    return (
        <LoginForm />
    )
}

export default page