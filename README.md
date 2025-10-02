 USIU First-Year Companion (unique v1)

A compact orientation microsite for new USIU students. This version adds a time-aware greeting and an optional weekly savings-goal check so the estimator feels a bit more personal.

 What it does
- Prompts for your name on load and displays a time-based greeting (morning/afternoon/evening).
- Run Estimator asks for days/week, transport cost per trip, snacks per day, snack price, and an optional savings goal; shows feasibility feedback and a 10% savings tip.
- Toggle Theme switches between a teal-accent day style and a navy/cream night style.
- Reset Summary clears the weekly summary panel.

 Project structure

usiu-first-year-companion-unique/
├─ design/
│  ├─ wireframe-home.png
│  ├─ wireframe-estimator.png
│  └─ notes.md
├─ public/
│  ├─ index.html
│  ├─ styles.css
│  └─ script.js
├─ Dockerfile
├─ .dockerignore
└─ README.md


 How to test locally (no Docker)
1. Extract the ZIP.
2. Open `public/index.html` in your browser (double-click or File → Open).
3. Allow popups/prompts. On load you will be prompted for your name.
4. Click **Run Estimator** to run the prompts and view the summary.
5. Click **Toggle Theme** to switch day/night. Click **Reset Summary** to clear results.

 Docker: build & run (recommended)
From the project root (where `Dockerfile` is):

bash
 Build (from the project root)
docker build -t usiu-first-year:v1 .

 Run (maps to localhost:8080)
docker run --rm -p 8080:80 usiu-first-year:v1


Open http://localhost:8080 to test.



 Design & Accessibility notes
- Palette: teal accent `#008080`, day bg `#f7ffff`, night bg `#06283D`.
- Type scale: base 16px, headings increased for hierarchy.
- Spacing: 0.5rem / 1rem / 1.5rem scale.
- Accessibility: buttons keep visible focus outlines; console logs included for traceability; minimal motion and reduced-motion respected.

## Testing checklist
- Page loads and prompts for name.
- Run Estimator asks 4 prompts and optional savings goal; shows correct math in summary.
- Theme toggles colors.
- Docker build and run serve site at http://localhost:8080.

