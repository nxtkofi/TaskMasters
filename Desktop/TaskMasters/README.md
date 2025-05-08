### **TaskMasters: Multiplayer Task Management**  
#### **Proof of Concept (Agile Style)**  

---

### **Cel projektu**:  
Stworzyć **task managera w wersji gamified**, gdzie zespoły rywalizują w wykonywaniu zadań programistycznych (np. pisanie testów, refaktor kodu).  
**Kluczowa wartość**: Połączenie produktywności z zabawą, motywowanie przez rywalizację.  

---

### **User Stories na PoC**:  
1. **Jako użytkownik, chcę się zarejestrować i zalogować, aby dołączyć do zespołu**.  
   - *Akceptacja*: Formularz rejestracji/login z email i hasłem.  
   - *Technicznie*: Prosta autentykacja (JWT + localStorage).  

2. **Jako lider zespołu, chcę stworzyć zespół i zaprosić członków, aby razem wykonywać zadania**.  
   - *Akceptacja*: Formularz "Stwórz zespół" + generowanie linku zaproszenia.  
   - *Technicznie*: Tabela `teams` i `users_teams` w bazie danych.  

3. **Jako członek zespołu, chcę dodać zadanie z terminem i punktami, aby zdobywać punkty dla drużyny**.  
   - *Akceptacja*: Formularz dodawania zadania (tytuł, opis, deadline, punkty).  
   - *Technicznie*: Endpoint POST `/api/tasks`.  

4. **Jako programista, chcę powiązać zadanie z Pull Request w GitHubie, aby automatycznie śledzić postęp**.  
   - *Akceptacja*: Pole "Link do PR" w formularzu zadania. Status zadania zmienia się na "Done", gdy PR zostanie zamknięty.  
   - *Technicznie*: Integracja z GitHub API (webhook do śledzenia PR).  

5. **Jako gracz, chcę widzieć ranking zespołów, aby wiedzieć, ile punktów brakuje nam do wygranej**.  
   - *Akceptacja*: Leaderboard na dashboardie z nazwami zespołów i sumą punktów.  
   - *Technicznie*: Zapytanie SQL sumujące punkty zadań dla każdego zespołu.  

---

### **Technologie (Minimalny Stack)**:  
- **Frontend**:  
  - Next.js (React + TypeScript) 
  - Tailwind CSS 
- **Backend**:  
  - Spring Boot (Java) – REST API + integracja z GitHubem.  
  - PostgreSQL/MongoDB – przechowywanie użytkowników, zespołów, zadań.  
  - WebSockets(?) (Socket.IO) – powiadomienia o nowych zadaniach i punktach. 
- **Integracje**:  
  - GitHub REST API – śledzenie statusu PR.  
  - OAuth2 – logowanie przez GitHub (opcjonalnie).  


