import { Outlet } from "react-router-dom";

function Mypage() {
  return (
    <main>
      <h4 className="section__title">마이페이지</h4>
      <section>
        <nav className="tab">
          <button className="on">주문조회</button>
          <button>문의내역</button>
          <button>회원정보수정</button>
        </nav>
        <div className="tab-content">
          <Outlet />
        </div>
      </section>
    </main>
  );
}

export default Mypage;
