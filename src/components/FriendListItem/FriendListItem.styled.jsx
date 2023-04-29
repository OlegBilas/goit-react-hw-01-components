import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 10px;
  padding: 20px;
  background-color: #ffffff;
`;

const getBackgroundColor = ({ isOnline }) => {
  return isOnline ? 'green' : 'red';
};

export const Status = styled.span`
  width: 12px;
  height: 12px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${getBackgroundColor};
`;

export const Avatar = styled.img`
  border-radius: 5px;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
