'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MoreHorizontal, LogOut } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'

export default function Dashboard() {
  const [user, setUser] = useState<{ name: string; username: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken')
        if (!token) {
          throw new Error('Brak tokena autoryzacyjnego')
        }

        const mockUser = {
          name: 'TestUser',
          username: 'TestUser'
        }
        
        setUser(mockUser)
      } catch (error) {
        router.push('/login')
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    router.push('/login')
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Skeleton className="h-8 w-[200px]" />
          <Skeleton className="h-10 w-[100px]" />
        </div>
        <Skeleton className="h-[500px] w-full" />
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Witaj, {user.name}</h1>
          <p className="text-muted-foreground">@{user.username}</p>
        </div>
        <Button variant="outline" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Wyloguj się
        </Button>
      </div>

      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Moje Zadania i Projekty</CardTitle>
            <CardDescription>Lista Twoich aktualnych zadań i ich status</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nazwa zadania</TableHead>
                  <TableHead>Projekt</TableHead>
                  <TableHead>Punkty</TableHead>
                  <TableHead>Termin</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Akcje</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Ukończenie panelu</TableCell>
                  <TableCell>Redesign strony</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>2023-12-15</TableCell>
                  <TableCell>
                    <Badge variant="default">W trakcie</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Naprawa błędu logowania</TableCell>
                  <TableCell>Autentykacja</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>2023-12-10</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Oczekujące</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Moje Osiągnięcia</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Pierwsze ukończone zadanie</span>
              <Badge variant="outline">10</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Współtwórca projektu</span>
              <Badge variant="outline">10</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Powiadomienia</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-muted/50 rounded-md">
              <p className="text-sm font-medium">Nowe zadanie</p>
              <p className="text-sm text-muted-foreground">2 godziny temu</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
