import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>사업자정보</li>
        <li>개인정보처리방침</li>
        <li>이용약관</li>
      </ul>
      <p>© 2023 자연농원. All Rights Reserved.</p>
      <a href="#top" className="topBtn accent">
        <FontAwesomeIcon icon={faChevronUp} />
      </a>
    </footer>
  );
};

export default Footer;
