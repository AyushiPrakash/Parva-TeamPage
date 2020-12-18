import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import members from "../lib/team";
import { IoMdMail } from "react-icons/io";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

const Title = styled.section`
  color: #001255;
  font-size: 28pt;
  font-weight: 800;
  text-align: center;
  margin: 2rem 0;
`;

const GridContainer = styled.section`
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem 0 0 1rem;
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
  /* box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.2),
    0px 1px 3px 0px rgba(0, 0, 0, 0.14), 0px 1px 9px 0px rgba(0, 0, 0, 0.12); */

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

  .name {
    color: #001255;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    margin-top: 0.75rem;
  }

  .info {
    color: #001255;
    font-weight: 400;
    font-size: 10pt;
    text-align: center;
    margin-top: 0.25rem;
  }

  .spacer {
    flex: 1;
  }

  .socials {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* padding: 0 1rem; */
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
  }
`;

const TeamScreen = () => {
  return (
    <>
      <Header />

      <main>
        <Title>Our Team</Title>
        <GridContainer>
          {members.team.map((item) => {
            return (
              <Card>
                <div class="imageContainer">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="name">{item.name}</div>
                <div className="info">{item.info}</div>
                <div className="spacer"></div>
                <div className="socials">
                  <span>
                    <AiFillLinkedin className="linkedin" size={28} />
                  </span>
                  <span>
                    <AiOutlineTwitter className="twitter" size={28} />
                  </span>
                  <span>
                    <IoMdMail className="mail" size={28} />
                  </span>
                </div>
              </Card>
            );
          })}
        </GridContainer>

        <Title>Our Advisors</Title>
        <GridContainer>
          {members.advisors.map((item) => {
            return (
              <Card>
                <div class="imageContainer">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="name">{item.name}</div>
                <div className="info">{item.info}</div>
                <div className="spacer"></div>
                <div className="socials">
                  <AiFillLinkedin className="linkedin" size={28} />

                  <AiOutlineTwitter className="twitter" size={28} />

                  <IoMdMail className="mail" size={28} />
                </div>
              </Card>
            );
          })}
        </GridContainer>
      </main>

      <Footer />
    </>
  );
};

export default TeamScreen;
