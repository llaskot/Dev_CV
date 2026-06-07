// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import "./i18n";
//
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//     {/*  ReactDOM.createRoot(document.getElementById("root")).render(<App />);*/}
//   </StrictMode>,
// )


import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./i18n";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* Suspense покажет текст "Загрузка...", пока JSON-файл скачивается */}
        <Suspense fallback={<div>Loading...</div>}>
            <App />
        </Suspense>
    </StrictMode>,
)