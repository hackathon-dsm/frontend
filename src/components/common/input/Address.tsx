import { styled } from "styled-components";
import { Location } from "../../../assets/svg";
import { ChangeEvent } from "react";

interface PropsType
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  value: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  isLink?: string;
}

export const AddressInput = ({
  label,
  value,
  name,
  onChange,
  placeholder,
  isLink,
  ...arg
}: PropsType) => {
  return (
    <_Wrapper>
      <_IconButton>
        <Location />
      </_IconButton>
      <_Content>
        {!isLink && <_Label>{label}</_Label>}
        {isLink ? (
          <_LinkText>{isLink}</_LinkText>
        ) : (
          <_Input
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            {...arg}
          />
        )}
      </_Content>
    </_Wrapper>
  );
};

const _Wrapper = styled.div<{ isLink?: string }>`
  position: relative;
  padding: 8px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: rgba(245, 243, 238, 1);
  margin: ${({ isLink }) => isLink && 0};
`;

const _IconButton = styled.button`
  width: 84px;
  height: 84px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.white};
`;

const _Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const _Label = styled.label`
  font-size: 12px;
  font-weight: 300;
  color: rgba(107, 128, 155, 0.5);
`;

const _Input = styled.input`
  margin: 0;
  padding: 0;
  font-size: 20px;
  border: none;
  outline: none;
  background-color: transparent;
`;

const _LinkText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 300;
`;
