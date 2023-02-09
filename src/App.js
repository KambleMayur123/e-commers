import Header from './Components/index';
import Layout from './pages/Layout';
import Buynowpage from './pages/buynow';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Header />} />
            <Route path="/Buynowpage" element={<Buynowpage />} />

            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
