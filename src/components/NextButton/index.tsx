import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

interface INextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function NextButton({ title, disabled, ...rest }: INextButtonProps) {
  return (
    <S.Button disabled={disabled} {...rest}>
      {title}
    </S.Button>
  );
}
