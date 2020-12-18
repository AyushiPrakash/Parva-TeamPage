import styled from "styled-components";
import Logo from "../assets/logo.jpg";

const HeaderContainer = styled.header`
  width: 100vw;
  position: fixed;
  background-color: white;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  z-index:1000;

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

    button {
      background-color: #ff304e;
      color: white;
      font-size: 10pt;
      border: none;
      border-radius: 1.5rem;
      outline: none;
      padding: 0.75rem 1.5rem 0.75rem 1.5rem;
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
          {/* <div className="title">Parva</div> */}
          <button>LogIn/SignUp</button>
        </div>
      </HeaderContainer>
      <Spacer></Spacer>
    </>
  );
};

export default Header;
