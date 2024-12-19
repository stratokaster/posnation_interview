import { FC, InputHTMLAttributes, memo } from 'react';
import styled from 'styled-components';

const KeypadInputElement = styled.input`
  width: 33%;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  line-height: 32px;
  color: white;
  background-color: #1e50a0;
  border: 2px solid #1e50a0;
  border-style: outset;

  &:active {
    border-style: inset;
    background-color: #3653bc;
  }
  &:hover {
    background-color: #3653bc;
  }
`;

interface IKeypadInputButtonProps extends InputHTMLAttributes<HTMLInputElement> {
}

const KeypadInputButton: FC<IKeypadInputButtonProps> = (props) => {
  return <KeypadInputElement {...props} type="button" />;
};

export default memo(KeypadInputButton);
