import styled from "styled-components";
import Logo from "../assets/logo.jpg";

const HeaderContainer = styled.header`
  width: 100vw;
  position: fixed;
  background-color: white;
  box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  .container {
    max-width: 1024px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;

    img {
      height: 75px;
      animation: zoomIn 400ms linear;
    }
    .wrapper {
      position:relative;

      button {
        line-height: 36px;
        font-size: 10pt;
        text-decoration: none;
        color: black;
        letter-spacing: 1px;
        text-align: center;
        padding: 0 1rem 0 1rem;
        border: solid 2px #ff304e;
        background-color:white;
        outline: none;
        transition: all 0.35s;
      }

      button span {
        position: relative;
        z-index: 2;
      }

      button:after {
        position: absolute;
        z-index: 0;
        content: "";
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: #ff304e;
        transition: all 0.35s;
      }

      button:hover {
        color: #fff;
      }

      button:hover:after {
        width: 100%;
      }
    }

    .title {
      text-align: center;
      font-weight: 900;
      font-size: 2.5rem;
    }
  }
`;

const Spacer = styled.div`
  height: calc(75px + 2rem);
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <div className="container">
          <img src={Logo} alt="Logo" />
          <div className="buttonContainer">
            <div className="wrapper">
              <button>
                <span>LogIn/SignUp</span>
              </button>
            </div>
          </div>
        </div>
      </HeaderContainer>
      <Spacer></Spacer>
    </>
  );
};

export default Header;
