import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductScreen from './pages/ProductScreen';
import ProductAssess from './pages/ProductAssess';
import ProductTherapy from './pages/ProductTherapy';
import ProductCare from './pages/ProductCare';
import ForClinicians from './pages/ForClinicians';
import ForFamilies from './pages/ForFamilies';
import Evidence from './pages/Evidence';
import Resources from './pages/Resources';
import Company from './pages/Company';
import Trust from './pages/Trust';
import Contact from './pages/Contact';
import RequestDemo from './pages/RequestDemo';
import JoinNetwork from './pages/JoinNetwork';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/products/cohera-screen/" element={<ProductScreen />} />
          <Route path="/products/cohera-assess/" element={<ProductAssess />} />
          <Route path="/products/cohera-therapy/" element={<ProductTherapy />} />
          <Route path="/products/cohera-care/" element={<ProductCare />} />
          <Route path="/for-clinicians/" element={<ForClinicians />} />
          <Route path="/for-families/" element={<ForFamilies />} />
          <Route path="/evidence/" element={<Evidence />} />
          <Route path="/resources/" element={<Resources />} />
          <Route path="/company/" element={<Company />} />
          <Route path="/trust/" element={<Trust />} />
          <Route path="/trust" element={<Trust />} />
          <Route path="/privacy-policy/" element={<Trust />} />
          <Route path="/privacy-policy" element={<Trust />} />
          <Route path="/terms-of-use/" element={<Trust />} />
          <Route path="/terms-of-use" element={<Trust />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/request-demo/" element={<RequestDemo />} />
          <Route path="/join-network/" element={<JoinNetwork />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
