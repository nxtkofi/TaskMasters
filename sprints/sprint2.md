# Sprint 2: Dokumentacja wymagań funkcjonalnych  
**Czas trwania**: do 28.03.2025 
**Cel**: Przygotowanie szczegółowej dokumentacji wymagań funkcjonalnych systemu TaskMasters.  

---

## 🎯 **Cele Sprintu**  
- [ ] #3 Zdefiniować **wymagania funkcjonalne** w formie user stories z kryteriami akceptacji.  
- [ ] #4 Stworzyć **diagram przypadków użycia** (Use Case Diagram).  
- [ ] #5 Opracować **projekt bazy danych** (schemat tabel + relacje).  
- [ ] #6 Udokumentować **endpointy API** (w formie np. OpenAPI/Swagger).  

---

## 📝 **Zadania & Przydziały**  
| Zadanie | Opis | Assignee | Status |  
|---------|------|----------|--------|  
| **1. Lista user stories** | Spisanie wszystkich wymagań w formie "Jako [rola], chcę [funkcjonalność], aby [cel]". | Nazar, Piotrek | TODO |  
| **2. Diagram przypadków użycia** | Wizualizacja w Figmie/Draw.io pokazująca aktorów i główne funkcje systemu. | Nazar | TODO |  
| **3. Schemat bazy danych** | Projekt tabel (np. `users`, `teams`, `tasks`) z relacjami. | Fabian, Michał | TODO |  
| **4. Dokumentacja API** | Opis endpointów (metody, request/response, status codes). | Fabian, Michał | TODO |  
| **5. Weryfikacja dokumentacji** | Przegląd i uzupełnienie brakujących wymagań. | Wszyscy | TODO |  

---

## 📅 **Harmonogram**  
### **Dzień 1-2**: User Stories & Diagramy  
- Spotkanie zespołu: burza mózgów nad wymaganiami.  
- @Nazar tworzy diagram przypadków użycia.  
- **Dostarczone**: Plik `user_stories.md` w repo.  

### **Dzień 3**: Baza Danych  
- Backendowcy projektują schemat bazy (np. za pomocą [dbdiagram.io](https://dbdiagram.io/), albo oracle/drawio).  
- **Dostarczone**: Obraz/schemat w `docs/database_schema.png`.  

### **Dzień 4**: Dokumentacja API  
- Opis endpointów w formie tabeli lub OpenAPI (np. w pliku `API_DOCS.md`).  
- Przykład:  
  ```markdown
  ## POST /api/tasks  
  **Request Body**:  
  ```json
  { "title": "Refactor auth", "points": 100, "team_id": 1 }
