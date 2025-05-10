'use client'

import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'

interface AuthFormProps {
  type: 'login' | 'register'
}

export default function AuthForm(props: AuthFormProps) {
    const { type } = props
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setIsLoading(true)
      setError('')
  
      try {
        if (type === 'register' && password !== confirmPassword) {
          throw new Error('Hasła nie są identyczne')
        }
  
        const response = await axios.post(
          `http://localhost:8080/auth/${type}`,
          {
            username,
            password,
            ...(type === 'register' && { name })
          },
          {
            transformResponse: [data => data],
            validateStatus: () => true
          }
        )
  
        const text = response.data
  
        if (response.status >= 400) {
          let message = 'Wystąpił problem'
          try {
            const errorData = JSON.parse(text)
            message = errorData.message || message
          } catch {}
          throw new Error(message)
        }
  
        const token = text.trim()
        if (!token) throw new Error('Brak tokena w odpowiedzi')
  
        /* 
         * TODO: Zastąpić właściwym rozwiązaniem
         * Bezpieczne opcje:
         * 1. NextAuth.js (https://next-auth.js.org/)
         * 2. HTTP-only cookies + CSRF protection
         * 3. React Context + pamięć sesji
         * 
         * NIEBEZPIECZNE (do usunięcia):
         * localStorage.setItem('authToken', token)
         */
  
        // Tymczasowe przekierowanie po udanym logowaniu
        router.push('/dashboard')
      } catch (err) {
        setError((err as Error).message || 'Wystąpił błąd podczas logowania')
      } finally {
        setIsLoading(false)
      }
    }

  return (
    <Card className="w-full max-w-md mx-4">
      <CardHeader className="text-center space-y-4">
        <CardTitle className="text-2xl">
          {type === 'login' ? 'Witaj ponownie' : 'Załóż konto'}
        </CardTitle>
        <CardDescription>
          {type === 'login'
            ? 'Wprowadź swoje dane, aby się zalogować'
            : 'Wypełnij formularz, aby się zarejestrować'}
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {type === 'register' && (
            <div className="space-y-2">
              <Label htmlFor="name">Imię i nazwisko</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Jan Kowalski"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="username">Nazwa użytkownika</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              minLength={3}
              placeholder="jankowalski123"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Hasło</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              placeholder="••••••••"
            />
          </div>

          {type === 'register' && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Powtórz hasło</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                placeholder="••••••••"
              />
            </div>
          )}

          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>

        <CardFooter className="flex flex-col gap-4 mt-6">
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Przetwarzanie...
              </span>
            ) : type === 'login' ? (
              'Zaloguj się'
            ) : (
              'Zarejestruj się'
            )}
          </Button>

          <div className="text-center text-sm">
            {type === 'login' ? (
              <span>
                Nie masz konta?{' '}
                <Button variant="link" onClick={() => router.push('/register')} className="p-0">
                  Zarejestruj się
                </Button>
              </span>
            ) : (
              <span>
                Masz już konto?{' '}
                <Button variant="link" onClick={() => router.push('/login')} className="p-0">
                  Zaloguj się
                </Button>
              </span>
            )}
          </div>
        </CardFooter>
      </form>
    </Card>
  )
}