import AuthForm from '@/app/components/AuthForm'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <AuthForm type="register" />
    </div>
  )
}