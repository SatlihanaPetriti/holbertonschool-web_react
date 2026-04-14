//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//import App from './preserved/App';
import UseRef from "./useRef";
import Memo from './useMemo';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // <App />
  // </StrictMode>,

  //<App />

  // <UseRef />
  <Memo />
)
