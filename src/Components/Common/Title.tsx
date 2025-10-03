import React from 'react';
import type { TitleProps } from './Title/types';
import { StyledTitle } from './Title/styles';

export const Title: React.FC<TitleProps> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};
