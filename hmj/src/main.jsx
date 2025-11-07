import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// ✅ Import all CSS files globally
import './assets/css/animate.css';
import './assets/css/bootstrap.css';
// import './assets/css/bootstrap-select.min.css';
import './assets/css/color.css';
import './assets/css/color-2.css';
import './assets/css/color-3.css';
import './assets/css/color-4.css';
import './assets/css/color-5.css';
import './assets/css/custom-animate.css';
import './assets/css/flaticon.css';
import './assets/css/fontawesome-all.css';
import './assets/css/hover.css';
import './assets/css/jquery.fancybox.min.css';
import './assets/css/jquery.touchspin.css';
import './assets/css/jquery-ui.css';
import './assets/css/owl.css';
import './assets/css/responsive.css';
import './assets/css/rtl.css';
import './assets/css/scrollbar.css';
import './assets/css/shop.css';
import './assets/css/style.css';
import './assets/css/swiper.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
