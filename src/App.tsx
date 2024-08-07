import "./App.css";

import arrow from "src/assets/Arrow.svg";
import cloud from "src/assets/cloud.svg";
import image from "src/assets/image.png";
import logo from "src/assets/logo.svg";
import pin from "src/assets/pin.svg";
import styled from "styled-components";

const Display = styled.div`
  width: 400px;
  margin: auto;
  align-items: center;
  background-color: #f2f4f6;
`;

const Frame2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Frame1 = styled.div`
  float: left;
  margin: 20px;
  flex-direction: row;
`;

const Frame3 = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  height: 30px;
  float: right;
`;

const Frame4 = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  height: 30px;
  float: right;
`;

const Banner = styled.div`
  width: 400px;
  height: 150px;
  position: relative;
`;
const Back = styled.div`
  width: 360px;
  height: 150px;
  margin: auto;
  background-image: url(${image});
  background-size: 500px;
  background-position-x: -100px;
  background-position-y: -30px;
  border-radius: 15px;
`;

const Frame5 = styled.div`
  text-align: center;
  font-size: large;
  font-weight: 500;
  color: white;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Section1 = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
`;

const Frame6 = styled.div`
  width: 360px;
  height: 330px;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 15px;
  align-items: center;
`;

const Name = styled.div`
  width: 360px;
  height: 60px;
`;

const Frame7 = styled.div`
  float: left;
  margin: 20px;
  flex-direction: row;
  font-size: larger;
  font-weight: 600;
`;

const Frame8 = styled.div`
  object-fit: fill;
  float: right;
  margin: 20px;
`;

const Money = styled.div`
  width: 360px;
  height: 120px;
`;

const Frame9 = styled.div`
  width: 360px;
  height: 60px;
  align-items: center;
  display: flex;
`;

const Frame10 = styled.div`
  float: left;
  color: white;
  font-size: 20px;
  background-color: #ff6161;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tofu = styled.div`
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 15px;
`;

const Frame11 = styled.div`
  color: gray;
`;

const Frame12 = styled.div`
  color: black;
`;

const Frame13 = styled.div`
  float: right;
  background-color: gray;
  padding: 5px 10px;
  border-radius: 5px;
`;

const App = () => {
  return (
    <Display>
      <Frame2>
        <Frame1>
          <img src={logo} />
          <Frame3>
            <img src={pin} />
          </Frame3>
          <Frame4>
            <img src={cloud} />
          </Frame4>
        </Frame1>
      </Frame2>
      <Banner>
        <Back>
          <Frame5>새로운 두부를 만나 보세요.</Frame5>
        </Back>
      </Banner>
      <Section1>
        <Frame6>
          <Name>
            <Frame7>두부뱅크</Frame7>
            <Frame8>
              <img src={arrow} />
            </Frame8>
          </Name>
          <Money>
            <Frame9>
              <Frame10>₩</Frame10>
              <Tofu>
                <Frame11>두부머니</Frame11>
                <Frame12>2,000,000원</Frame12>
              </Tofu>
              <Frame13>송금</Frame13>
            </Frame9>
          </Money>
        </Frame6>
      </Section1>
    </Display>
  );
};

export default App;
