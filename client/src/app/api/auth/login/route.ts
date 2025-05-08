import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { username, password } = await request.json()

  try {
    const response = await fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { message: data.message || 'Nieprawidłowe dane logowania' },
        { status: 401 }
      )
    }

    return NextResponse.json({ token: data.token })
  } catch (error) {
    return NextResponse.json(
      { message: 'Błąd serwera' },
      { status: 500 }
    )
  }
}