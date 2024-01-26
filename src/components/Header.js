import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faTruckFast,
  faTree,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="top">
      <nav className="navbar">
        <div className="navbar__logo">
          <Link to="/">
            <h1>
              <FontAwesomeIcon icon={faTree} /> 자연농원
            </h1>
          </Link>
          {/* 토글버튼 */}
          <ul className="navbar__toggle">
            <li>
              <Link to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </li>
            <li>
              <Link to="/mypage">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
            <li>
              <a href="#!">
                <FontAwesomeIcon icon={faBars} />
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar__search">
          <input type="text" placeholder="상품검색"></input>
          {/* <button>
      <FontAwesomeIcon icon={faX} />
    </button> */}
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <ul className="navbar__menu">
          <li>
            <Link to="/admin">관리자</Link>
          </li>
          <li>
            <Link to="/cart">
              <>
                <FontAwesomeIcon icon={faCartShopping} />
                <span>장바구니</span>
              </>
            </Link>
          </li>
          <li>
            <Link to="/mypage/orderlist">
              <FontAwesomeIcon icon={faTruckFast} /> <span>주문조회</span>
            </Link>
          </li>
          <li>
            <Link to="/mypage">
              <>
                <FontAwesomeIcon icon={faUser} />
                <span>마이페이지</span>
              </>
            </Link>
          </li>
        </ul>
      </nav>
      <ul className="category">
        <li>봄 심기 구근</li>
        <li>여름 심기 구근</li>
        <li>가을 심기 구근</li>
        <li>숙근류 (뿌리)</li>
        <li>묘목 (나무)</li>
        <li>종자 (씨앗)</li>
        <li>포트상품</li>
        <li>자재</li>
      </ul>
    </header>
  );
};

export default Header;
