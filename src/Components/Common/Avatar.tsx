import React from 'react';
import { Avatar as MuiAvatar } from '@mui/material';
import type { AvatarProps } from './Avatar/types';
import { getAvatarStyles } from './Avatar/styles';

export const OperatorAvatar: React.FC<AvatarProps> = ({ src, alt, children }) => {
  const avatarSrc = src?.includes('github') ? '' : src;

  return (
    <MuiAvatar
      src={avatarSrc}
      alt={alt}
      sx={{
        ...getAvatarStyles(),
        border: avatarSrc ? '1px solid #668099' : 'none',
      }}
    >
      {children}
    </MuiAvatar>
  );
};
