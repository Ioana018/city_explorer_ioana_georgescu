# Jurnal de Utilizare a Asistentului AI (AI Log)

- **Disciplina:** Tehnologii Web
- **Lucrarea de laborator:** Nr. 2 – Vite și JavaScript modern
- **Proiect:** City Explorer
- **Data:** 19 Octombrie 2026

---

## 1. Context și Obiective

Laboratorul a vizat inițializarea unui proiect cu Vite și React, organizarea modulară a codului JavaScript (ES Modules), aplicarea metodelor imutabile de prelucrare a listelor (`map`, `filter`, `reduce`, sortare pe copie, destructuring, spread operator) și efectuarea cererilor asincrone către un API REST public folosind `fetch` și `async/await`.

---

## 2. Istoricul Prompt-urilor și Asistența Oferită

### Prompt 1: Inițializarea și rezolvarea laboratorului
- **User:** *„ajuta ma si pe mine sa rezolv acest laborator”* (atașat documentul PDF `Laborator2_Vite_JavaScript_modern.docx.pdf`)
- **Răspuns AI:** 
  - A extras cerințele din PDF și a sintetizat pașii: configurarea proiectului cu `npm create vite@latest`, structurarea fișierelor în `src/data`, `src/utils`, `src/api` și popularea `src/main.jsx`.
  - A furnizat codul complet pentru fișierele:
    - `src/data/destinatii.js` (lista inițială de destinații)
    - `src/utils/destinatii.js` (metodele: `getOrase`, `getNevizitate`, `totalZile`, `formatDestinatie`, `numarPeTara`, `sortDupaZile`, `marcheazaVizitat`, `adaugaDestinatie`, `stergeDestinatie`)
    - `src/api/orase.js` (`fetchUsers`, `fetchUserById` cu verificarea `response.ok`)
    - `src/main.jsx` (apelurile de testare cu prefixul `L2`)

### Prompt 2 & 3: Navigare și configurare în terminal
- **User:** Întrebări legate de selectarea numelui proiectului, alegerea linter-ului (`Oxlint` vs `ESLint`) și ce se întâmplă în caz de denumire greșită a folderului.
- **Răspuns AI:** A ghidat utilizatorul prin setările CLI, recomandând alegerea `Oxlint` conform cerinței din laborator și adaptarea comenzilor de navigare (`cd app`).

### Prompt 4: Identificarea structurii în VS Code
- **User:** Screenshot din VS Code întrebând unde se află fișierele și unde trebuie executate comenzile.
- **Răspuns AI:** A indicat folderul `app` din arborele Explorer, pașii de curățenie (ștergerea `icons.svg`, golirea fișierelor CSS, setarea titlului în `App.jsx`) și ordinea creării modulelor.

### Prompt 5: Depanare eroare CLI
- **Eroare întâmpinată:** `'vite' is not recognized as an internal or external command, operable program or batch file.`
- **Cauză identificată:** Omiterea comenzii `npm install` înainte de `npm run dev` (deoarece la configurarea Vite s-a optat pentru `No` la instalarea automată).
- **Rezolvare AI:** Ghidarea executării comenzii `npm install` în folderul `app`, urmată de reluarea comenzii `npm run dev`.

### Prompt 6: Verificarea execuției
- **User:** Confirmarea afișării interfeței `City Explorer` și a log-urilor în consolă (`F12` → `Console`).
- **Răspuns AI:** Validarea conformității rezultatelor cu cele cerute de baremul laboratorului (Prefixe `L2 Ex. 1`, `L2 Ex. 2`, `L2 Ex. 3`).

---

## 3. Rezumatul Codului Implementat

1. **`src/data/destinatii.js`**
   - Exportă array-ul fix de obiecte: id, oras, tara, zile, vizitat.

2. **`src/utils/destinatii.js`**
   - Implementare pur funcțională și imutabilă fără a altera datele primite ca parametru.
   - S-au folosit `Array.prototype.map`, `filter`, `reduce` (cu acumulator numeric și obiect cu chei calculate `[tara]: (acc[tara] ?? 0) + 1`), spread operator (`[...list]`, `{ ...d }`).

3. **`src/api/orase.js`**
   - Funcții asincrone cu `fetch`, extragere JSON și generare explicită de erori (`throw new Error(...)`) pentru coduri HTTP diferite de 2xx.

4. **`src/main.jsx`**
   - Punctul de intrare care integrează toate modulele și afișează în consolă rezultatele așteptate conform specificațiilor.

---

## 4. Evaluare Critică și Învățăminte

- **Importanța Imutabilității:** În ecosistemul React/JavaScript modern, funcțiile utilitare nu trebuie să muteze starea direct (ex: evitarea `push`, `splice` sau modificarea directă a proprietăților obiectelor), ci să returneze referințe noi prin shallow copy / spread.
- **Fluxul Vite:** Înțelegerea diferenței dintre directorul părinte de lucru și subdirectorul proiectului Vite generat (`cd app`), precum și rolul comenzii `npm install` în generarea folderului `node_modules`.
- **Eficiența AI:** Utilizarea asistentului a permis identificarea rapidă a erorii de lipsă a pachetelor dependente și structurarea corectă a modulelor ES6.