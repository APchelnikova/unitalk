import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useOperators } from '@/hooks/useOperators.ts';
import { usePagination } from '@/hooks/usePagination';
import { Search } from '@/Components/Search/Search.tsx';
import { OperatorsTable } from '@/Components/Table/Table.tsx';
import { StyledPaper } from '@/Components/Operators/styles.ts';
import { Title } from '@/Components/Common/Title.tsx';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';

export const Operators = () => {
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue] = useDebounce(searchValue, 500);
  const { page, rowsPerPage, handlePageChange, handleRowsPerPageChange } =
    usePagination();

  const { operators, isLoading, isError, refetch, totalCount } = useOperators({
    search: debouncedSearchValue,
    page: page + 1,
    pageSize: rowsPerPage,
  });

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  useEffect(() => {
    refetch();
    console.log(rowsPerPage, rowsPerPage);
  }, [page, rowsPerPage, refetch]);

  if (isError)
    return (
      <Box minHeight="440px" p={4}>
        <Typography mb={2}>
          Вибачте, щось пішло не так. Спробуйте ще раз пізніше
        </Typography>
        <Button variant="contained" onClick={() => refetch()}>
          Retry
        </Button>
      </Box>
    );

  return (
    <>
      <Title>Оператори</Title>
      <StyledPaper>
        <Search onSearch={handleSearch} />

        {isLoading || operators?.length > 0 ? (
          <OperatorsTable
            data={operators}
            loading={isLoading}
            totalCount={totalCount}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
          />
        ) : (
          <Box display="flex" justifyContent="center" minHeight="440px" p={4}>
            <Typography>
              За запитом {debouncedSearchValue} нічого не знайдено
            </Typography>
          </Box>
        )}
      </StyledPaper>
    </>
  );
};
