# Specyfikacja Aktorów

## 1. Użytkownik
- **Opis**: Użytkownik to osoba, która korzysta z systemu w celu zarządzania swoimi zadaniami oraz postępami w zespołach.
- **Role**:
  - Rejestracja konta
  - Logowanie do systemu
  - Przeglądanie zadań
  - Dodawanie zadań (po akceptacji lidera)
  - Odbieranie powiadomień o nowych zadaniach

### Interakcje:
- Użytkownik wchodzi w interakcję z systemem przez frontend, wysyłając zapytania HTTP (np. GET, POST).
  
## 2. Lider Zespołu
- **Opis**: Lider zespołu jest odpowiedzialny za zarządzanie zespołem, przypisywanie zadań i monitorowanie postępów członków.
- **Role**:
  - Tworzenie zespołu
  - Zapraszanie nowych członków do zespołu
  - Akceptowanie zadań dodanych przez członków zespołu
  - Tworzenie zadań dla zespołu
  - Monitorowanie postępów członków zespołu
  - Przeglądanie raportów postępów zespołu

### Interakcje:
- Lider może tworzyć zespoły i zadania, korzystając z formularzy w interfejsie aplikacji, a także zarządzać zadaniami oraz członkami zespołu.

## 3. Szef Firmy
- **Opis**: Szef firmy zarządza organizacją, tworzy projekty oraz przypisuje liderów zespołów do odpowiednich ról w organizacji.
- **Role**:
  - Tworzenie organizacji
  - Przypisywanie ról do użytkowników (liderzy, członkowie zespołów)
  - Tworzenie projektów dla organizacji
  - Zarządzanie strukturą organizacyjną

### Interakcje:
- Szef firmy wchodzi w interakcję z systemem, tworząc organizację i projekty, przypisując odpowiednie role użytkownikom w systemie.

## 4. System
- **Opis**: System automatycznie zarządza danymi, wysyła powiadomienia do użytkowników oraz przetwarza dane.
- **Rola**:
  - Przechowywanie danych użytkowników, zadań, zespołów i projektów w bazie danych.
  - Wysyłanie powiadomień o nowych zadaniach i zmianach w systemie.
  - Obsługa zapytań do API i zwracanie odpowiedzi na zapytania.

### Interakcje:
- System odbiera zapytania od użytkowników, przetwarza je i wysyła odpowiedzi na podstawie dostępnych danych w bazie.

## 5. Administrator
- **Opis**: Administrator systemu odpowiada za utrzymanie i zarządzanie infrastrukturą aplikacji, w tym za monitorowanie błędów i zarządzanie dostępem do systemu.
- **Role**:
  - Monitorowanie błędów w systemie
  - Zabezpieczanie dostępu do aplikacji
  - Konfiguracja i zarządzanie systemem
  - Zapewnienie dostępności aplikacji

### Interakcje:
- Administrator może monitorować logi systemowe, zarządzać użytkownikami oraz dbać o poprawność działania systemu.
