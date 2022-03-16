import React, { useEffect, useRef, InputHTMLAttributes } from 'react';

import { useField } from '@unform/core';

import * as S from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: any[];
}

const CheckboxInput: React.FC<Props> = ({ name, options, ...rest }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, registerField, defaultValue = [] } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) =>
        refs.filter((ref) => ref.checked).map((ref) => ref.value),
      clearValue: (refs: HTMLInputElement[]) => {
        refs.forEach((ref) => {
          ref.checked = false;
        });
      },
      setValue: (refs: HTMLInputElement[], values: string[]) => {
        refs.forEach((ref) => {
          if (values.includes(ref.id)) {
            ref.checked = true;
          }
        });
      },
    });
  }, [defaultValue, fieldName, registerField]);

  return (
    <S.CheckboxContainer>
      {options.map((option) => (
        <label htmlFor={option.value} key={option.value}>
          <input
            defaultChecked={defaultValue.includes(option.value)}
            ref={(ref) => {
              inputRefs.current.push(ref as HTMLInputElement);
            }}
            value={option.value}
            type="checkbox"
            id={option.value}
            {...rest}
          />
          {option.answerText}
        </label>
      ))}
    </S.CheckboxContainer>
  );
};

export default CheckboxInput;
