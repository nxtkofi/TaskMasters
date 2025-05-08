# User Stories

## 1. Rejestracja i logowanie użytkownika

**Jako** użytkownik, **chcę** się zarejestrować i zalogować, **aby** dołączyć do zespołu.

#### Kryteria akceptacji:
- **Given** że użytkownik jest na stronie rejestracji,  
  **When** użytkownik wprowadza poprawny adres e-mail i hasło,  
  **Then** użytkownik zostaje pomyślnie zarejestrowany i przekierowany do panelu logowania.
  
- **Given** że użytkownik jest na stronie logowania,  
  **When** użytkownik wprowadza poprawne dane logowania,  
  **Then** użytkownik jest zalogowany i przekierowany na swój panel użytkownika.

#### Techniczne:
- Prosta autentykacja przy użyciu **JWT**.

#### Endpointy:
- **POST /api/register** – Rejestracja użytkownika.
- **POST /api/login** – Logowanie użytkownika.

---

## 2. Tworzenie zespołu

**Jako** lider zespołu, **chcę** stworzyć zespół i zaprosić członków, **aby** razem wykonywać zadania.

#### Kryteria akceptacji:
- **Given** że lider jest zalogowany,  
  **When** lider kliknie „Utwórz zespół” i wprowadzi nazwę zespołu,  
  **Then** zespół jest utworzony, a lider otrzymuje link zaproszenia do podzielenia się z innymi członkami.

- **Given** że lider posiada zespół,  
  **When** lider wprowadzi nazwiska członków do zespołu,  
  **Then** członkowie zostaną zaproszeni i dołączą do zespołu.

#### Techniczne:
- Tabela **teams** i **users_teams** w bazie danych.

#### Endpointy:
- **POST /api/teams** – Tworzenie nowego zespołu.
- **POST /api/teams/invite** – Zapraszanie członków do zespołu.

---

## 3. Dodawanie zadania

**Jako** członek zespołu, **chcę** dodać zadanie z terminem i punktami, **aby** zdobywać punkty dla drużyny.

#### Kryteria akceptacji:
- **Given** że członek zespołu jest na stronie „Zadania”,  
  **When** użytkownik wprowadzi tytuł, opis, deadline i punkty zadania,  
  **Then** zadanie zostanie przesłane do Team Lidera do akceptacji.

- **Given** że zadanie zostało przypisane,  
  **When** zadanie jest wykonane,  
  **Then** punkty zostaną przyznane i wyświetlone w rankingu zespołów.

#### Techniczne:
- Endpoint **POST /api/tasks**.

#### Endpointy:
- **POST /api/tasks** – Dodawanie nowego zadania.
- **GET /api/tasks** – Pobieranie wszystkich zadań.

---

## 4. Wyświetlanie rankingu zespołów

**Jako** gracz, **chcę** widzieć ranking zespołów, **aby** wiedzieć, ile punktów brakuje nam do wygranej.

#### Kryteria akceptacji:
- **Given** że użytkownik jest na stronie „Dashboard”,  
  **When** użytkownik przejdzie do sekcji „Leaderboard”,  
  **Then** wyświetli się lista zespołów z ich punktami i rankingiem.

#### Techniczne:
- Zapytanie **SQL** sumujące punkty zadań dla każdego zespołu.

#### Endpointy:
- **GET /api/leaderboard** – Pobieranie rankingu zespołów.

---

## 5. Powiadomienia o nowych zadaniach

**Jako** członek zespołu, **chcę** otrzymywać powiadomienia o nowych zadaniach, **aby** nie przegapić nowych wyzwań.

#### Kryteria akceptacji:
- **Given** że zadanie zostało przypisane,  
  **When** zadanie jest dodane do systemu,  
  **Then** członkowie zespołu otrzymują powiadomienie.

#### Endpointy:
- **POST /api/notifications** – Dodanie nowego powiadomienia.
- **GET /api/notifications** – Pobieranie powiadomień użytkownika.

---

## 6. System odznak za osiągnięcia

**Jako** gracz, **chcę** zdobywać odznaki za osiągnięcia, **aby** czuć się zmotywowany do lepszej pracy.

#### Kryteria akceptacji:
- **Given** że użytkownik osiągnął kamień milowy (np. wykonanie 10 zadań),  
  **When** użytkownik osiągnie ten cel,  
  **Then** otrzymuje odznakę.

#### Techniczne:
- System odznak oparty na punktach.

#### Endpointy:
- **GET /api/badges** – Pobieranie odznak użytkownika.
- **POST /api/badges** – Przypisanie odznaki.

---

## 7. Historia postępów i wykonanych zadań

**Jako** użytkownik, **chcę** widzieć historię wykonanych zadań, **aby** śledzić swoje postępy.

#### Kryteria akceptacji:
- **Given** że użytkownik jest na stronie „Dashboard”,  
  **When** użytkownik przejdzie do sekcji „Historia”,  
  **Then** wyświetli się lista wykonanych zadań.

#### Techniczne:
- Historia zadań powinna zawierać szczegóły, takie jak status, data zakończenia oraz punkty.

#### Endpointy:
- **GET /api/history** – Pobieranie historii wykonanych zadań.

---

## 8. Rejestrowanie postępu użytkownika

**Jako** lider zespołu, **chcę** mieć dostęp do raportów o postępie członków zespołu, **aby** móc monitorować ich efektywność.

#### Kryteria akceptacji:
- **Given** że lider jest zalogowany,  
  **When** lider przegląda raporty,  
  **Then** zobaczy postępy każdego członka zespołu.

#### Techniczne:
- Raporty powinny zawierać dane na temat liczby ukończonych zadań oraz przyznanych punktów.

#### Endpointy:
- **GET /api/progress-report** – Pobieranie raportu postępów członków zespołu.

## 9. Zarządzanie organizacją

**Jako** szef firmy, **chcę** założyć organizację, do której mogę dodać Team Liderów oraz "graczy" (pracowników, developerów), **aby** skutecznie zarządzać strukturą zespołów.

#### Kryteria akceptacji:
- **Given** że użytkownik jest szefem firmy,  
  **When** tworzy organizację i dodaje do niej Team Liderów oraz pracowników,  
  **Then** organizacja zostaje zapisana w systemie, a użytkownicy mają odpowiednie role.

## 10. Tworzenie projektów

**Jako** szef firmy, **chcę** móc założyć projekt w imieniu organizacji, **aby** strukturyzować zadania zespołów.

#### Kryteria akceptacji:
- **Given** że użytkownik jest szefem firmy,  
  **When** tworzy nowy projekt przypisany do organizacji,  
  **Then** projekt zostaje zapisany w systemie i dostępny dla Team Liderów i pracowników.

## 11. Tworzenie zadań

**Jako** Team Lider, **chcę** tworzyć zadania dla mojego zespołu, **aby** organizować pracę zespołu.

**Jako** developer, **chcę** móc tworzyć zadania, **aby** dodawać nowe prace do wykonania, jednak wymagające akceptacji lidera.

#### Kryteria akceptacji:
- **Given** że Team Lider tworzy zadanie,  
  **When** wpisuje tytuł, opis, deadline i punkty,  
  **Then** zadanie zostaje zapisane i przypisane do projektu.
- **Given** że developer tworzy zadanie,  
  **When** wpisuje tytuł, opis, deadline i punkty,  
  **Then** zadanie zostaje przesłane do Team Lidera do akceptacji.