import React from "react";
import { FooterStyle } from "./FooterStyle";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="wrapper">
        <div className="footer-link">
          <div>
            <b>Section 1</b>
            <ul>
              <li>
                <a href="#">Subsection</a>
              </li>
              <li>
                <a href="#">Subsection</a>
              </li>
              <li>
                <a href="#">Subsection</a>
              </li>
              <li>
                <a href="#">Subsection</a>
              </li>
            </ul>
          </div>
          <div>
            <b>Section 2</b>
            <ul>
              <li>
                <a href="#">Subsection</a>
              </li>
              <li>
                <a href="#">Subsection</a>
              </li>
              <li>
                <a href="#">Subsection</a>
              </li>
              <li>
                <a href="#">Subsection</a>
              </li>
            </ul>
          </div>
          <div>
            <b>Section 3</b>
            <ul>
              <li>
                <a href="#">Subsection</a>
              </li>
              <li>
                <a href="#">Subsection</a>
              </li>
              <li>
                <a href="#">Subsection</a>
              </li>
              <li>
                <a href="#">Subsection</a>
              </li>
            </ul>
          </div>
          <div>
            <b>Section 4</b>
            <ul>
              <li>
                <a href="#">Subsection</a>
              </li>
              <li>
                <a href="#">Subsection</a>
              </li>
              <li>
                <a href="#">Subsection</a>
              </li>
              <li>
                <a href="#">Subsection</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>
              This is the<b>Logo</b>
            </h2>
          </div>
        </div>
        <div className="footer-copyright">
          © 2022 Studio Graphene. <span>Social media links</span>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
