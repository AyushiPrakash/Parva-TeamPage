import styled from "styled-components";
import Logo from "../assets/google-play-badge.png";

import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #000922;
  color: white;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  padding: 0.75rem 6rem;
  font-size: 10pt;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    padding: 1rem 0;

    .contacts-column {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      .title {
        text-align: center;
        font-weight: 900;
        font-size: 22pt;
        line-height: 2rem;
        margin-bottom: 2rem;
      }

      .contact-details {
        text-decoration: none;
        color: white;
        margin-bottom: 1rem;
      }
    }

    .socials-column {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;

      .playstore {
        width: 12rem;
        margin-bottom: 1rem;
      }

      .socialapps {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        a {
          color: white;
        }
      }
    }
  }

  hr {
    border-width: 0.25px;
  }

  .copyrights {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0 2rem 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <div className="contacts-column">
          <div className="title">Parva</div>
          <a className="contact-details" href="mailto:abhijeet@getparva.com">
            abhijeet@getparva.com
          </a>
          <a className="contact-details" href="tel:+91 8379931905">
            +91 8379931905
          </a>
        </div>

        <div className="socials-column">
          <a
            href="https://play.google.com/store/apps/details?id=com.getparva.android"
            target="_blank"
          >
            <img className="playstore" src={Logo} alt="Playstore" />
          </a>
          <div className="socialapps">
            <a href="https://www.facebook.com/getparva" target="_blank">
              <span>
                <AiFillFacebook size={30} />
              </span>
            </a>
            <a href="https://www.instagram.com/getparva/" target="_blank">
              <span>
                <AiOutlineInstagram size={30} />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/company/getparva/?originalSubdomain=in"
              target="_blank"
            >
              <span>
                <AiFillLinkedin size={30} />
              </span>
            </a>
            <a href="#" target="_blank">
              <span>
                <AiOutlineTwitter size={30} />
              </span>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyrights">
        <span>Copyright © Parva 2020</span>
        <span>Privacy policy</span>
      </div>
    </FooterContainer>
  );
};

export default Footer;
