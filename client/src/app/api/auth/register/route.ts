import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { email, password, name } = await request.json()

  try {
    const response = await fetch('http://localhost:8080/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { message: data.message || 'Rejestracja nie powiodła się' },
        { status: 400 }
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