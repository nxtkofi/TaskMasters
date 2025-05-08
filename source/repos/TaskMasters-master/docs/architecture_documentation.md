# Specyfikacja Architektury Systemu

## 1. Architektura systemu

System opiera się na architekturze klient-serwer z jasnym podziałem na frontend, backend i bazę danych. Komunikacja pomiędzy warstwami odbywa się przez REST API oraz (opcjonalnie) WebSockety.

### Warstwa frontend (klient)

- **Next.js (React + TypeScript)** – obsługuje UI, routing i renderowanie.
- **Tailwind CSS** – stylowanie interfejsu użytkownika.
- Komunikuje się z backendem przez REST API.
- Obsługuje autentykację, dashboard, zadania, ranking, powiadomienia itd.

### Warstwa backend (serwer aplikacji)

- **Spring Boot (Java)** – odpowiada za logikę biznesową, operacje na danych, autoryzację i integracje z GitHub API.
- Uwierzytelnianie przy pomocy JWT.
- Obsługuje przyznawanie punktów, akceptację zadań, zarządzanie zespołami i historią użytkownika.
- (Opcjonalnie) WebSockety – informowanie o zmianach w czasie rzeczywistym (np. nowe zadanie, punkty, odznaka).

### Warstwa bazy danych

- **PostgreSQL** – główna baza danych do przechowywania użytkowników, zespołów, projektów, zadań, rankingów.

---

## 2. Technologie i narzędzia

| Komponent              | Technologia                      |
|------------------------|----------------------------------|
| Frontend               | Next.js, React, TypeScript       |
| Stylowanie             | Tailwind CSS                     |
| Backend                | Spring Boot (Java)               |
| Baza danych relacyjna  | PostgreSQL                       |      
| Powiadomienia          | WebSockets (np. Socket.IO)       |
| Autentykacja           | JWT                              |
| Integracje zewnętrzne  | REST API                         |

---

## 3. Zasady projektowe

- **Modularność** – każdy komponent systemu (zadania, ranking, powiadomienia) stanowi odrębną część możliwą do rozwijania osobno.
- **Bezpieczeństwo** – JWT, autoryzacja ról, bezpieczna komunikacja.
- **Skalowalność** – architektura umożliwia rozwój i wdrażanie dodatkowych mikroserwisów.
- **Czytelność** – oddzielenie warstwy prezentacji od logiki biznesowej.
- **Wydajność** – zoptymalizowane zapytania SQL, responsywny interfejs.
- **Użyteczność** – projektowany z myślą o motywacji użytkownika, przyjaznym UX i estetyce.
