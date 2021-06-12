import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import members from "../lib/team";
// import { IoMdMail } from "react-icons/io";
// import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import Flip from "react-reveal/Flip";
// import Slide from "react-reveal/Slide";

const Title = styled.section`
  color: #001255;
  font-size: 28pt;
  font-weight: 800;
  text-align: center;
  margin: 1rem 0 2rem 0;
`;

const GridContainer = styled.section`
  /* display: -webkit-flex; */
  display: flex;
  /* -webkit-flex-direction: row; */
  flex-direction: row;
  /* -webkit-flex-wrap: wrap; */
  flex-wrap: wrap;
  /* -webkit-justify-content: center; */
  justify-content: center;
  /* -webkit-align-items: flex-start; */
  align-items: flex-start;
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
  place-items: stretch center;
  grid-gap: 2rem;
  gap: 2rem;
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  width: 200px;
  border-radius: 0.25rem;
  padding: 0 0 2rem 0;
  height: 100%;

  @media screen and (max-width: 508px) {
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
  }

  .imageContainer {
    width: 10rem;
    height: 10rem;
    overflow: hidden;
    position: relative;
    border-radius: 1rem;

    &:hover {
      img {
        transform: scale3d(1.2, 1.2, 1.2);
        filter: grayscale(150%);
      }
    }
    img {
      width: 100%;
      object-fit: cover;
      transition: transform 500ms ease, filter 500ms ease;
      transform: translateZ(0);
      filter: none;
    }
  }

  .details {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 508px) {
      align-items: flex-start;
      margin-left: 0.75rem;

      .name,
      .details {
        text-align: left !important;
      }

      /* .socials {
        margin-left: -0.25rem;
      } */
    }

    .name {
      color: #001255;
      font-weight: 700;
      font-size: 18px;
      text-align: center;
      margin-top: 0.75rem;
    }

    .details {
      color: #001255;
      font-weight: 400;
      font-size: 10pt;
      text-align: center;
      margin-top: 0.25rem;
    }

    .spacer {
      flex: 1;
    }

    /* .socials {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 0.5rem;
      cursor: pointer;

      svg {
        color: #666;
        transition: color 250ms ease-out;
        cursor: pointer;
        margin: 0 0.25rem;
      }

      .linkedin:hover {
        color: #0072b1;
      }
      .twitter:hover {
        color: #1ca0f1;
      }
      .mail:hover {
        color: #f7c80f;
      }
    } */
  }
`;

const TeamScreen = () => {
  return (
    <>
      <Header />
      <main>
        {/* <Slide top> */}
        <Title>Our Team</Title>
        {/* </Slide> */}
        <GridContainer>
          {members.team.map((item) => {
            return (
              <Flip left>
                <Card>
                  <div className="imageContainer">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="details">
                    <div className="name">{item.name}</div>
                    <div className="details">{item.details}</div>
                    <div className="spacer"></div>
                    {/* <div className="socials">
                      <span>
                        <AiFillLinkedin className="linkedin" size={26} />
                      </span>
                      <span>
                        <AiOutlineTwitter className="twitter" size={26} />
                      </span>
                      <span>
                        <IoMdMail className="mail" size={26} />
                      </span>
                    </div> */}
                  </div>
                </Card>
              </Flip>
            );
          })}
        </GridContainer>
        {/* <Slide top> */}
        <Title>Our Advisors</Title>
        {/* </Slide> */}

        <GridContainer>
          {members.advisors.map((item) => {
            return (
              <Flip left>
                <Card>
                  <div className="imageContainer">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="details">
                    <div className="name">{item.name}</div>
                    <div className="details">{item.details}</div>
                    <div className="spacer"></div>
                    {/* <div className="socials">
                      <AiFillLinkedin className="linkedin" size={26} />

                      <AiOutlineTwitter className="twitter" size={26} />

                      <IoMdMail className="mail" size={26} />
                    </div> */}
                  </div>
                </Card>
              </Flip>
            );
          })}
        </GridContainer>
      </main>

      <Footer />
    </>
  );
};

export default TeamScreen;
