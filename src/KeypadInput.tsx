import { FC, InputHTMLAttributes, memo, useCallback } from 'react';
import { Flex } from './Flex';
import KeypadInputButton from './KeypadInput.styled';
import { KEYPAD_ENUM } from './enums/Keypad.enum';

interface IKeypadInputProps extends InputHTMLAttributes<HTMLInputElement> { 
	handleButtonClick: Function
}
const firstButtonsRow: string[] = [KEYPAD_ENUM.SEVEN, KEYPAD_ENUM.EIGHT, KEYPAD_ENUM.NINE];
const secondButtonsRow: string[] = [KEYPAD_ENUM.FOUR, KEYPAD_ENUM.FIVE, KEYPAD_ENUM.SIX];
const thirdButtonsRow: string[] = [KEYPAD_ENUM.ONE, KEYPAD_ENUM.TWO, KEYPAD_ENUM.THREE];
const lastButtonsRow: string[] = [KEYPAD_ENUM.ZERO, KEYPAD_ENUM.DOUBLE_ZERO, KEYPAD_ENUM.CLEAR];

const buttonsGroup: { [key: string]: string[] }  = {
	firstRow: firstButtonsRow,
	secondRow: secondButtonsRow,
	thirdRow: thirdButtonsRow,
	lastRow: lastButtonsRow
}

const KeypadInput: FC<IKeypadInputProps> = ({
	handleButtonClick = (value: string) => value,
}) => {
	const handleButtonEvent = (value: string) => {
		handleButtonClick(value);
	};

	return (
		<Flex flexDirection="column" gap="4px" width="100%">
			{/* Container for the keypad, organized in a column with gaps */}
			{/* Each row of the keypad contains three buttons, each associated with a numeric value or the clear ('C') button */}
			{Object.keys(buttonsGroup).map(row => (
				<Flex gap="4px" width="100%" key={row}>
					{buttonsGroup[row].map(value => (
						<KeypadInputButton
							value={value} 
							onClick={() => handleButtonEvent(value)} 
							key={value}
						/>
					))}
				</Flex>
			))}
		</Flex>
	);
};

export default memo(KeypadInput);