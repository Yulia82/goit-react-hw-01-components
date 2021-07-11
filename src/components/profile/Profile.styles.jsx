import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: rgb(248, 248, 248);

  width: 370px;
  margin-top: 40px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 20px;

  border-radius: 5%;
  box-shadow: 4px 4px 2px 1px rgba(0, 0, 255, 0.2);
`;

export const Avatar = styled.img`
  // display: block;
  width: 210px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const Name = styled.p`
  margin-bottom: 8px;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;

export const Datauser = styled.p`
  text-align: center;
  margin-bottom: 8px;
  color: rgb(80, 79, 79);
`;

export const Stats = styled.ul`
  display: flex;
  margin-left: -10px;
  margin-top: -10px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
  margin-top: 10px;
  flex-basis: calc(100% / 3 - 10px);

  &:not(:last-child) {
    border-right: solid rgba(0, 0, 255, 0.2);
  }
`;

export const Description = styled.div`
  border-bottom: solid rgba(0, 0, 255, 0.2);
`;

export const Quantity = styled.span`
  font-weight: bold;
  padding-bottom: 15px;
`;

export const Label = styled.span`
  color: rgb(80, 79, 79);
  margin-bottom: 8px;
  padding-top: 8px;
`;
