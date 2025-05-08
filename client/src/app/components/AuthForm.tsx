'use client'

import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
export default function AuthForm({ type }: { type: 'login' | 'register' }) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('') // Ta zmienna już nie będzie używana, więc ją usuwamy
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
      // Walidacja hasła
      if (type === 'register' && password !== confirmPassword) {
        throw new Error('Hasła nie są identyczne')
      }

      const endpoint = type === 'login' ? 'login' : 'register'
      const response = await fetch(`/api/auth/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          username,  // Zmieniamy z email na username
          password,
          ...(type === 'register' && { 
            name,
          }) 
        }),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Logowanie nie powiodło się')
      
      localStorage.setItem('authToken', data.token)
      router.push('/dashboard')
    } catch (err) {
      setError('Wystąpił błąd podczas logowania')
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
            <>
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
            </>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="username">Nazwa użytkownika</Label>  {/* Zmieniamy na "username" */}
            <Input
              id="username"   
              type="text"
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              required
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
