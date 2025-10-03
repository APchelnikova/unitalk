import React, { useState } from 'react';
import { TextField } from '@mui/material';
import type { SearchProps } from '@/Components/Search/types.ts';

export const Search: React.FC<SearchProps> = ({
  label = 'Пошук',
  placeholder = 'Імʼя користувача...',
  onSearch,
}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch?.(value);
  };

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      value={searchValue}
      onChange={handleChange}
      sx={{ m: 2, width: '100%', maxWidth: 300 }}
    />
  );
};
