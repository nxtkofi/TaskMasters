### **Podział ról w projekcie TaskMasters**  

#### Scrum Master
- **Odpowiedzialny**: **Piotrek**  

#### **1. UI/UX Design (Figma)**:  
- **Odpowiedzialny**: **Nazar, Piotrek**  
  - **Zadania**:  
    - Projektowanie interfejsu w Figmie (strony: logowanie, dashboard zespołu, formularz zadań, leaderboard).  
    - Tworzenie prototypów interaktywnych (np. jak wygląda przejście od formularza zadania do powiadomienia o zdobytych punktach).  

---

#### **2. Frontend (Next.js/React)**:  
- **Główni deweloperzy**: **Nazar**, **Piotrek**, **Michał(?)**
---

#### **3. Backend (Spring Boot/.NET Core + PostgreSQL)**:  
- **Główni deweloperzy**: **Michał**, **Fabian**  
  - **Zadania**:  
      - Implementacja REST API (endpointy: użytkownicy, zespoły, zadania).  
      - Logika grywalizacji (obliczanie punktów, aktualizacja leaderboardu).  
      - Integracja z autentykacją (JWT).  
      - Integracja z GitHub API (śledzenie statusu PR, webhooki).  
      - Konfiguracja WebSocket (Socket.IO) do powiadomień(?).  
      - Zarządzanie bazą danych (migracje, optymalizacja zapytań).  

---

#### **4. Koordynacja i testowanie**:  
- **Wszyscy członkowie zespołu**:  
  - **Testowanie cross-functional**:  
    - Frontend + backend: sprawdzanie, czy formularz zadania poprawnie wysyła dane do API.  
    - Testowanie integracji z GitHubem (czy zamknięcie PR zmienia status zadania).  

---
