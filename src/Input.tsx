import { FC, InputHTMLAttributes, memo } from 'react';
import styled from "styled-components";

const Input = styled.input``;

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> { 
	readonly inputValue: string
}

const ResultInput: FC<IInputProps> = ({inputValue, ...props}) => {
  return <Input {...props} type="text" value={inputValue} readOnly />;
};

export default memo(ResultInput);
