import styled from "@emotion/styled";

export const TransactionHist = styled.table`
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;

  width: 1000px;
  border: solid rgba(0, 0, 255, 0.2);
`;

export const TheadStyle = styled.thead`
  background-color: rgba(0, 0, 255, 0.2);
  height: 60px;
`;

export const TrStyle = styled.tr`
  text-align: center;
  height: 50px;
  &:nth-child(even) {
    background-color: rgba(0, 0, 255, 0.12);
  }
`;

export const TrStyleEven = styled.tr`
  text-align: center;
  height: 50px;
  background-color: rgba(0, 0, 255, 0.25);
`;
