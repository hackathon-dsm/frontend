import { styled } from "styled-components";
import { CommunityCard, Layer, SubTitle } from "../../components/MyPage";

const list = [
  {
    title: "몇 백년을 기다린 당신에게 돈을 드립니다",
    content: "광고를 만번만 보신다면 당신은 10만원을 가져갈 수 있는 기회!",
  },
  { title: "돈줍니다", content: "돈주세요" },
];

export const Community = () => {
  return (
    <Layer title="커뮤니티">
      <_Content>
        {list.map(({ title, content }) => (
          <CommunityCard title={title} content={content} />
        ))}
      </_Content>
    </Layer>
  );
};
const _Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const _ContentTextWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const _Card = styled.div`
  padding: 30px 25px;
  border-radius: 20px;
  display: flex;
  height: 150px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  background-color: rgba(252, 251, 247, 1);
`;

const _ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
`;
const _Button = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 600;
  padding: 0 50px;
  border-radius: 20px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.main};
  cursor: pointer;
`;
