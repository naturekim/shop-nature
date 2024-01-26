import "./css/App.css";
import "./css/Reset.css";
import React, { useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import data from "./db/data.js";
import Main from "./routes/Main.js";
import Detail from "./routes/Detail.js";
import Cart from "./routes/Cart.js";
import Mypage from "./routes/Mypage.js";
import Admin from "./routes/Admin.js";
import ManageItems from "./routes/ManageItems.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  const [items] = useState(data);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main items={items} />} />
          <Route path="/detail/:id" element={<Detail items={items} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<div>로그인페이지</div>} />
          <Route path="/mypage" element={<Mypage />}>
            <Route path="orderlist" element={<section>주문조회</section>} />
            <Route path="myinfo" element={<section>회원정보수정</section>} />
            <Route path="qnailist" element={<section>문의내역</section>} />
          </Route>
          <Route path="/admin" element={<Admin />}>
            <Route path="manageitems" element={<ManageItems />} />
          </Route>
          <Route path="*" element={<section>없는페이지입니다.</section>} />
        </Routes>
      </main>
      <Footer />
    </Suspense>
  );
}

export default App;
