import styled from "styled-components";

export const Button = styled.button`
  border: ${ props=> props.theme === 'primary' ? 'none' : ' 1px solid #ff6378 '};
  background: ${ props=> props.theme === 'primary' ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' : 'transparent'};
  font-size: 16px;
  color: #fff;
  padding: 16px 32px;
  width: fit-content;
  cursor: pointer;
  border-radius: 20px;
  transition: 0.2s ease;

  &:hover {
    background: ${ props=> props.theme === 'primary' ? '' : 'background linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)'};
    transition: ${ props=> props.theme === 'primary' ? '' : '0.2s'};
  }

  &:active {
    opacity: 0.5;
  }
`;
