import styled from "styled-components";
export const LodingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Loding = styled.img`
  width: 100px;
`;

export const ViewBoardDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 10%;
  padding-top: 5%;
  gap: 20px;
  font-weight: bold;
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const TitleText = styled.div`
  font-size: 30px;
`;
export const DateIdTextDiv = styled.div`
  display: flex;
  gap: 10px;
`;
export const DateText = styled.div`
  font-size: 15px;
`;
export const IdText = styled.div`
  font-size: 14px;
`;
export const ExplainText = styled.div`
  line-height: 1.5;
  font-size: 18px;
  padding-bottom: 10px;
  border-bottom: 0.5px solid black;
`;
export const ImageDiv = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;
export const BeforeDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const TextBefore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
export const ImageBefore = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const AfterDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const TextAfter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
export const ImageAfter = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const ViewsText = styled.div`
  display: flex;
`;
export const LikesText = styled.div`
  display: flex;
  font-size: 20px;
`;
export const LikeButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
export const LikeImg = styled.img``;
export const LikeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #ffffff;
  border-radius: 100px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  transition: all ease 0.4s 0s;
  cursor: pointer;
  :hover {
    transition: all ease 0.4s 0s;
    box-shadow: 0px 0px 80px #fb7575;
  }
`;
