import "./App.css";

import arrow from "src/assets/Arrow.svg";
import cloud from "src/assets/cloud.svg";
import image from "src/assets/image.png";
import logo from "src/assets/logo.svg";
import pin from "src/assets/pin.svg";
import styled from "styled-components";

const Bgd = styled.div`
  background-color: #f2f4f6;
`;

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

  @media (min-width: 400px) {
    width: 100%;
    padding: 10px;
    font-size: 1em;
  }
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
  font-size: 18px;
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
  height: 340px;
  position: relative;
`;

const Frame6 = styled.div`
  width: 360px;
  height: 300px;
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
  font-size: 20px;
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
  justify-content: flex-start;
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
  margin-left: 20px;
  margin-right: 10px;
`;

const Tofu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-right: 100px;
`;

const Frame11 = styled.div`
  color: gray;
  font-size: 13px;
`;

const Frame12 = styled.div`
  color: black;
  font-size: 20px;
  font-weight: 700;
`;

const Frame13 = styled.div`
  display: flex;
  float: right;
  color: #858585;
  font-size: 13px;
  background-color: #f2f4f6;
  padding: 8px 16px;
  border-radius: 5px;
`;

const Frame14 = styled.div`
  float: left;
  color: white;
  font-size: 20px;
  background-color: #2d65f3;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: 10px;
`;

const Frame15 = styled.div`
  display: flex;
  float: right;
  color: #858585;
  font-size: 13px;
  background-color: #f2f4f6;
  padding: 8px 16px;
  border-radius: 5px;
  margin-left: 58px;
`;

const Line = styled.div`
  width: 360px;
  height: 40px;
  align-items: center;
  display: flex;
  position: relative;
`;

const Frame16 = styled.div`
  width: 90%;
  height: 1px;
  background-color: #f2f4f6;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Frame17 = styled.div`
  width: 360px;
  height: 60px;
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;

const Frame18 = styled.div`
  float: left;
  color: white;
  font-size: 20px;
  font-weight: 700;
  background-color: #f8c440;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: 10px;
`;

const Frame19 = styled.div`
  width: 420px;
  height: 165px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Frame20 = styled.div`
  width: 135px;
  height: 150px;
  background-color: white;
  border-radius: 15px;
  margin-left: 20px;
  position: relative;
`;

const Frame21 = styled.div`
  margin: 20px;
`;

const Frame22 = styled.div`
  color: gray;
  font-weight: 500;
  font-size: 10px;
  margin-bottom: 2px;
`;

const Frame23 = styled.div`
  color: black;
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 2px;
`;

const Frame24 = styled.div`
  color: black;
  font-weight: 600;
  font-size: 17px;
`;

const Frame25 = styled.div`
  font-size: 45px;
  position: absolute;
  right: 10px;
  bottom: 3px;
`;

const App = () => {
  return (
    <Bgd>
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
              <Frame9>
                <Frame14>$</Frame14>
                <Tofu>
                  <Frame11>두부머니</Frame11>
                  <Frame12>800원</Frame12>
                </Tofu>
                <Frame15>송금</Frame15>
              </Frame9>
            </Money>
            <Line>
              <Frame16 />
            </Line>
            <Frame17>
              <Frame18>?</Frame18>
              <Tofu>
                <Frame11>공인중개사 합격은</Frame11>
                <Frame12>에듀윌</Frame12>
              </Tofu>
            </Frame17>
          </Frame6>
        </Section1>
        <Frame19>
          <Frame20>
            <Frame21>
              <Frame22>내 자산</Frame22>
              <Frame23>두부자산</Frame23>
              <Frame24>취합해 보기</Frame24>
            </Frame21>
            <Frame25>💰</Frame25>
          </Frame20>
          <Frame20>
            <Frame21>
              <Frame22>내 자산 아님</Frame22>
              <Frame23>두부자산</Frame23>
              <Frame24>취합해 보기</Frame24>
            </Frame21>
            <Frame25>💵</Frame25>
          </Frame20>
          <Frame20>
            <Frame21>
              <Frame22>사실 네 자산임</Frame22>
              <Frame23>두부자산</Frame23>
              <Frame24>취합해 보기</Frame24>
            </Frame21>
            <Frame25>💸</Frame25>
          </Frame20>
        </Frame19>
      </Display>
    </Bgd>
  );
};

export default App;
