# Sprint 3: Prototyp Aplikacji (2 tygodnie)  
**Cel**: Dostarczyć działający prototyp pokazujący kluczowe funkcje aplikacji.  

---

## 🎯 **Główne Elementy Prototypu**  
1. **Autentykacja użytkowników** (logowanie/rejestracja).  
2. **Tworzenie zespołu i dodawanie zadań** z punktami.  
3. **Integracja z GitHubem** (linkowanie zadań do PR).  
4. **Leaderboard zespołów** (podgląd punktów).  
5. **Podstawowy UI** (strony: logowanie, dashboard, formularze).  

---

## 📅 **Plan Tygodniowy**  
### **Tydzień 1: Core Functionality**  
| Zadanie | Opis | Technologie | Assignee |  
|---------|------|-------------|----------|  
| **1. Backend: Autentykacja** | Endpointy logowania/rejestracji + JWT. | Spring Boot/Python + PostgreSQL | @Michał @Fabian |  
| **2. Backend: Zadania i zespoły** | CRUD dla zespołów i zadań. Relacja User-Team-Task. | Spring Boot/Python | @Michał @Fabian |  
| **3. Frontend: Logowanie/Dashboard** | Strona logowania + podstawowy dashboard z listą zadań. | Next.js + Redux | @Piotrek @Nazar |  


### **Tydzień 2: Integracja i UI**  
| Zadanie | Opis | Technologie | Assignee |  
|---------|------|-------------|----------|  
| **1. Leaderboard** | Wyświetlanie punktów zespołów na dashboardzie. | Next.js + Recharts | @Piotrek |  
| **2. Stylowanie UI** | Responsywne formularze i kolorystyka (Tailwind). | TailwindCSS + ShadCN | @Nazar |  
| **3. Testowanie** | Sprawdzenie przepływu: od logowania do leaderboardu. | Manualne + Postman | Wszyscy |  

---

## 🛠️ **Technologie (Potwierdzone)**  
- **Frontend**:  
  - Next.js + TypeScript  
  - Redux Toolkit do zarządzania stanem  
  - ShadCN dla komponentów UI (np. `<Button>`, `<Card>`)  
- **Backend**:  
  - Spring Boot (Java) 
  - PostgreSQL (tabele: `users`, `teams`, `tasks`)  
- **Komunikacja**:  
  - REST API między frontendem a backendem  

---

## 🎨 **Wireframe Prototypu**  
### Strona logowania:  
- Pola: Email, Hasło  
- Przycisk "Zaloguj się"/"Zarejestruj"  

### Dashboard:  
- Lista zadań (Tytuł, Status, Punkty)  
- Formularz dodawania zadania (tytuł, opis, link do PR)  
- Sekcja "Mój zespół" z nazwą i członkami  
- Leaderboard (Top 3 zespoły)  

---

## 📦 **Wymagane Deliverables**  
1. **Działające endpointy**:  
   - `POST /api/login`  
   - `POST /api/teams` (tworzenie zespołu)  
   - `POST /api/tasks` (dodawanie zadania)  
2. **Frontend**:  
   - Logowanie + przekierowanie do dashboardu  
   - Formularz dodawania zadania z linkiem do PR  
   - Wyświetlenie leaderboardu  
3. **Demo Scenariusz**:  
   - Szef firmy zakłada organizajcę → dodaje użytkowników do organizacji → Nadaje role "Team Leader" → Team Leader tworzy projekt → Team leader dodaje użytkowników do projektu → dodaje zadanie z punktami → przypisuje użytkowników do zadań → Po zamknięciu zadania przez team leadera użytkownik otrzymuje punkty.

## 📝 **Instrukcja Demo dla Prowadzącego**  
1. **Rejestracja**: Wejdź na `/register`, wprowadź email i hasło.  
2. **Tworzenie zespołu**: Na dashboardcie kliknij "Create Team".  
3. **Dodaj zadanie**: Wypełnij formularz tytułem i linkiem do PR (np. `https://github.com/.../pull/1`).  
4. **Symulacja zamknięcia PR**: W backendzie ręcznie zmień status zadania na "Done".  
5. **Sprawdź leaderboard**: Punkty zespołu powinny wzrosnąć.  

---
