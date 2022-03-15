import React from 'react';

import { MdNightlightRound, MdLightMode } from 'react-icons/md';
import { useTheme } from 'styled-components';

import * as S from './styles';

interface ISwitchThemeButtonProps {
  toggleTheme: () => void;
}

const ICON_BUTTON_SIZE = 25;

export function SwitchThemeButton({ toggleTheme }: ISwitchThemeButtonProps) {
  const theme = useTheme();
  return (
    <S.Button onClick={toggleTheme}>
      {theme.title === 'light' ? (
        <MdNightlightRound
          size={ICON_BUTTON_SIZE}
          color={theme.colors.primary400}
        />
      ) : (
        <MdLightMode size={ICON_BUTTON_SIZE} color={theme.colors.primary300} />
      )}
    </S.Button>
  );
}
