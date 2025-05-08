# Wymagania Niefunkcjonalne

## 1. Wydajność
- **Czas odpowiedzi**: System powinien odpowiadać na zapytania użytkowników w ciągu maksymalnie 2 sekund.
- **Wydajność przy obciążeniu**: System musi być w stanie obsłużyć jednocześnie co najmniej 100 aktywnych użytkowników.

## 2. Skalowalność
- **Horyzontalna skalowalność**: Aplikacja musi umożliwiać rozbudowę w celu obsługi większej liczby użytkowników przez dodanie nowych instancji serwera.
- **Zwiększenie zasobów**: Aplikacja powinna automatycznie dostosowywać się do zmieniających się potrzeb, np. poprzez skalowanie bazy danych.

## 3. Bezpieczeństwo
- **Szyfrowanie danych**: Wszystkie dane przesyłane pomiędzy klientem a serwerem muszą być szyfrowane.
- **Autentykacja**: System będzie używać tokenów JWT do bezpiecznej autentykacji użytkowników.
- **Haszowanie haseł**: Hasła użytkowników muszą być przechowywane w formie haszowanej.

## 4. Użyteczność
- **Interfejs użytkownika**: System powinien mieć prosty i intuicyjny interfejs użytkownika.
- **Dostępność**: Aplikacja powinna być dostępna w różnych przeglądarkach internetowych.

## 5. Utrzymanie
- **Monitoring systemu**: System musi być monitorowany pod kątem dostępności oraz wydajności.
- **Dokumentacja**: Pełna dokumentacja systemu powinna być dostępna dla deweloperów, w tym dokumentacja API, instrukcje instalacyjne i operacyjne.

## 6. Wsparcie techniczne
- **Pomoc techniczna**: System powinien zapewniać dostęp do wsparcia technicznego w godzinach roboczych.
