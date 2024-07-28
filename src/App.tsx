import "./App.css";

import styled from "styled-components";

const Display = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Frame2 = styled.div`
  width: 100%;
  max-width: 390px;
  border: 16px solid #333;
  border-radius: 36px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (max-width: 400px) {
    width: 100%;
    border: none;
    border-radius: 0;
    box-shadow: none;
    padding: 10px;
  }
`;

const Frame1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Frame3 = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Banner = styled.div`
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 15px;
  font-size: 1.2em;
  margin: 20px 0;

  @media (max-width: 400px) {
    padding: 10px;
    font-size: 1em;
  }
`;

const Section1 = styled.div`
  background: #f5f5f5;
  padding: 20px;
  border-radius: 15px;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 400px) {
    padding: 10px;
  }
`;

const Frame5 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const Frame7 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Frame11 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Frame9 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Frame8 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Group50 = styled.div`
  font-size: 2em;
  margin-left: 10px;
`;

const Frame10 = styled.div`
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 5px;
  }
`;

const Frame12 = styled.div`
  margin: 20px 0;
  hr {
    border: 1px solid #ccc;
  }
`;

const Frame16 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const Frame14 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ddd;
  padding: 15px;
  border-radius: 10px;

  @media (max-width: 400px) {
    padding: 10px;
  }
`;

const Frame15 = styled(Frame14)``;

const Frame13 = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <Display>
      <Frame2>
        <Frame1>
          <svg
            width="86"
            height="54"
            viewBox="0 0 86 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 14.5L23.3253 20.75V33.25L12.5 39.5L1.67468 33.25V20.75L12.5 14.5Z"
              fill="#B1B8C0"
            />
            <path
              d="M40.5879 37H37.2041C37.1162 37 37.0723 36.9512 37.0723 36.8535V19.7441H33.1758C33.0781 19.7441 33.0293 19.6953 33.0293 19.5977L33.0586 16.2432C33.0586 16.165 33.0977 16.126 33.1758 16.126H44.5723C44.6797 16.126 44.7334 16.165 44.7334 16.2432V19.5977C44.7334 19.6953 44.6943 19.7441 44.6162 19.7441H40.6758L40.7051 36.8535C40.7051 36.9512 40.666 37 40.5879 37ZM51.75 37.293C50.6855 37.293 49.7041 37.0195 48.8057 36.4727C47.917 35.9258 47.1992 35.1982 46.6523 34.29C46.1152 33.3721 45.8467 32.3662 45.8467 31.2725L45.876 21.7656C45.876 20.6523 46.1445 19.6514 46.6816 18.7627C47.209 17.8643 47.9219 17.1465 48.8203 16.6094C49.7188 16.0625 50.6953 15.7891 51.75 15.7891C52.8438 15.7891 53.8252 16.0576 54.6943 16.5947C55.5732 17.1318 56.2764 17.8545 56.8037 18.7627C57.3408 19.6611 57.6094 20.6621 57.6094 21.7656L57.6387 31.2725C57.6387 32.3662 57.375 33.3672 56.8477 34.2754C56.3105 35.1934 55.5977 35.9258 54.709 36.4727C53.8203 37.0195 52.834 37.293 51.75 37.293ZM51.75 33.6748C52.3555 33.6748 52.8828 33.4307 53.332 32.9424C53.7812 32.4443 54.0059 31.8877 54.0059 31.2725L53.9766 21.7656C53.9766 21.1016 53.7666 20.54 53.3467 20.0811C52.9268 19.6221 52.3945 19.3926 51.75 19.3926C51.1348 19.3926 50.6074 19.6172 50.168 20.0664C49.7285 20.5156 49.5088 21.082 49.5088 21.7656V31.2725C49.5088 31.9268 49.7285 32.4932 50.168 32.9717C50.6074 33.4404 51.1348 33.6748 51.75 33.6748ZM63.4248 37H60.0557C59.958 37 59.9092 36.9512 59.9092 36.8535L59.9678 16.2432C59.9678 16.165 60.0068 16.126 60.085 16.126H69.6943C69.792 16.126 69.8408 16.165 69.8408 16.2432V19.627C69.8408 19.7051 69.8018 19.7441 69.7236 19.7441H63.5713V24.4023H69.7236C69.8018 24.4023 69.8408 24.4512 69.8408 24.5488L69.8701 27.9473C69.8701 28.0254 69.8213 28.0645 69.7236 28.0645H63.5713V36.8535C63.5713 36.9512 63.5225 37 63.4248 37ZM78.0586 37.293C77.0039 37.293 76.0273 37.0195 75.1289 36.4727C74.2305 35.9258 73.5127 35.1934 72.9756 34.2754C72.4482 33.3477 72.1846 32.3369 72.1846 31.2432L72.2432 16.2432C72.2432 16.165 72.2822 16.126 72.3604 16.126H75.7295C75.8076 16.126 75.8467 16.165 75.8467 16.2432V31.2432C75.8467 31.917 76.0615 32.4932 76.4912 32.9717C76.9209 33.4404 77.4434 33.6748 78.0586 33.6748C78.7031 33.6748 79.2402 33.4404 79.6699 32.9717C80.0996 32.4932 80.3145 31.917 80.3145 31.2432V16.2432C80.3145 16.165 80.3535 16.126 80.4316 16.126H83.8008C83.8789 16.126 83.918 16.165 83.918 16.2432L83.9766 31.2432C83.9766 32.3467 83.7129 33.3623 83.1855 34.29C82.6484 35.208 81.9355 35.9404 81.0469 36.4873C80.1582 37.0244 79.1621 37.293 78.0586 37.293Z"
              fill="#B1B8C0"
            />
          </svg>
          <Frame3>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.6336 7.33016C8.78673 5.40828 11.0217 4.0625 15 4.0625C18.9783 4.0625 21.2133 5.40828 22.3664 7.33016C23.2284 8.76685 23.3969 10.4031 23.4297 11.626C24.5114 11.7683 25.8118 12.1667 26.9542 12.9892C28.4977 14.1005 29.6875 15.9445 29.6875 18.75C29.6875 21.5555 28.4977 23.3995 26.9542 24.5108C25.4586 25.5877 23.6919 25.9375 22.5 25.9375H7.5C6.30812 25.9375 4.54144 25.5877 3.04579 24.5108C1.50234 23.3995 0.3125 21.5555 0.3125 18.75C0.3125 15.9445 1.50234 14.1005 3.04579 12.9892C4.18816 12.1667 5.48863 11.7683 6.57033 11.626C6.6031 10.4031 6.77159 8.76684 7.6336 7.33016Z"
                fill="#B1B8C0"
              />
            </svg>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_202_79)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.08709 26.9129C3.4532 27.279 4.0468 27.279 4.41291 26.9129L12.5379 18.7879C12.904 18.4218 12.904 17.8282 12.5379 17.4621C12.1718 17.096 11.5782 17.096 11.2121 17.4621L3.08709 25.5871C2.72097 25.9532 2.72097 26.5468 3.08709 26.9129Z"
                  fill="#B1B8C0"
                />
                <path
                  d="M6.25009 11.8566L17.7406 23.3471L19.8619 21.2257L19.3717 16.493L26.2581 10.6514L18.946 3.33926L13.1042 10.2254L8.37141 9.73528L6.25009 11.8566Z"
                  fill="#B1B8C0"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.9076 2.40255C19.1693 2.39183 19.4236 2.49111 19.6089 2.67635L26.921 9.98846C27.1062 10.1737 27.2055 10.428 27.1948 10.6898C27.1841 10.9515 27.0643 11.1968 26.8645 11.3663L20.3552 16.8881L20.7944 21.1292C20.8235 21.41 20.7244 21.689 20.5248 21.8886L18.4035 24.01C18.2277 24.1858 17.9892 24.2846 17.7406 24.2846C17.4919 24.2846 17.2535 24.1858 17.0777 24.01L5.58718 12.5195C5.22106 12.1534 5.22106 11.5598 5.58718 11.1937L7.7085 9.07237C7.90814 8.87272 8.18714 8.77368 8.46798 8.80277L12.7091 9.24199L18.231 2.73278C18.4005 2.53302 18.6458 2.41327 18.9076 2.40255ZM19.0026 4.72171L13.8191 10.8319C13.619 11.0678 13.3153 11.1898 13.0076 11.1579L8.71875 10.7138L7.57591 11.8566L17.7406 22.0213L18.8834 20.8784L18.4392 16.5895C18.4073 16.2818 18.5293 15.9782 18.7653 15.778L24.8756 10.5947L19.0026 4.72171Z"
                  fill="#B1B8C0"
                />
              </g>
              <defs>
                <clipPath id="clip0_202_79">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Frame3>
        </Frame1>
      </Frame2>
      <Banner>
        <Frame5>새로운 두부를 만나보세요.</Frame5>
      </Banner>
      <Section1>
        <Frame5>
          <Frame7>
            <h2>두부뱅크</h2>
            <svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.5L6 6.5L1 11.5"
                stroke="#B1B8C0"
                strokeWidth="1.5"
              />
            </svg>
          </Frame7>
          <Frame11>
            <Frame9>
              <Frame8>
                <span>두부머니</span>
                <span>2,000,000원</span>
              </Frame8>
              <Group50>₩</Group50>
              <Frame10>
                <button>송금</button>
              </Frame10>
            </Frame9>
            <Frame9>
              <Frame8>
                <span>두부머니</span>
                <span>800원</span>
              </Frame8>
              <Group50>$</Group50>
              <Frame10>
                <button>송금</button>
              </Frame10>
            </Frame9>
          </Frame11>
          <Frame12>
            <hr />
          </Frame12>
          <Frame10>
            <Group50>?</Group50>
            <Frame8>
              <span>공인중개사 합격은</span>
              <span>에듀윌</span>
            </Frame8>
          </Frame10>
        </Frame5>
      </Section1>
      <Frame16>
        <Frame14>
          <Frame13>
            <span>내 자산</span>
            <span>두부자산 취합해 보기</span>
          </Frame13>
          💰
        </Frame14>
        <Frame15>
          <Frame13>
            <span>내 자산 아님</span>
            <span>두부자산 취합해 보기</span>
          </Frame13>
          💵
        </Frame15>
        <Frame14>
          <Frame13>
            <span>사실 네 자산임</span>
            <span>두부자산 취합해 보기</span>
          </Frame13>
          💸
        </Frame14>
      </Frame16>
    </Display>
  );
};

export default App;
