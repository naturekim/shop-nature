import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <main>
      <h4 className="section__title">관리자페이지</h4>
      <section>
        <nav className="tab">
          <button className="on">주문관리</button>
          <button>상품관리</button>
          <button>회원관리</button>
        </nav>
        <div className="tab-content">
          <Outlet />
        </div>
      </section>
    </main>
  );
}

export default Admin;
