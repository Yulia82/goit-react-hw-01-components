import styled from "@emotion/styled";
// import { randomColor } from '../../utils/'

export const Statlist = styled.ul`
  display: flex;
  margin-left: -10px;
  margin-top: -10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
`;

export const ItemStat = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
  margin-top: 10px;
  flex-basis: calc(100% / 4 - 10px);

  background-color: ${props => props.colorLi};
`;

export const Statistic = styled.section`
  background-color: rgb(248, 248, 248);

  width: 370px;
  margin-top: 40px;
  margin-right: auto;
  margin-left: auto;

  border-radius: 5%;
  box-shadow: 4px 4px 2px 1px rgba(0, 0, 255, 0.2);
`;

export const Percentage = styled.span`
  font-weight: bold;
  padding-bottom: 15px;
`;

export const Label = styled.span`
  color: #000000;
  margin-bottom: 8px;
  padding-top: 8px;
`;
