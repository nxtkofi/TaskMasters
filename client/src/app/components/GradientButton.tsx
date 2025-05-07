'use client'

interface GradientButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function GradientButton({
  children,
  onClick,
  disabled = false,
  type = 'button'
}: GradientButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-full p-3 text-white font-medium rounded-lg bg-gradient-to-r from-red-500 to-pink-500 hover:from-purple-600 hover:to-blue-600 transition-all disabled:opacity-50"
    >
      {children}
    </button>
  )
}