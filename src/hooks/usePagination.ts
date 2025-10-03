import { useState } from 'react';

interface UsePaginationProps {
  initialPage?: number;
  initialRowsPerPage?: number;
}

interface UsePaginationReturn {
  page: number;
  rowsPerPage: number;
  setPage: (page: number) => void;
  setRowsPerPage: (rowsPerPage: number) => void;
  handlePageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
  handleRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  resetPagination: () => void;
}

export const usePagination = ({
  initialPage = 0,
  initialRowsPerPage = 5,
}: UsePaginationProps = {}): UsePaginationReturn => {
  const [page, setPageState] = useState(initialPage);
  const [rowsPerPage, setRowsPerPageState] = useState(initialRowsPerPage);

  const setPage = (newPage: number) => {
    setPageState(Math.max(0, newPage));
  };

  const setRowsPerPage = (newRowsPerPage: number) => {
    setRowsPerPageState(Math.max(1, newRowsPerPage));
  };

  const handlePageChange = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };

  const resetPagination = () => {
    setPageState(initialPage);
    setRowsPerPageState(initialRowsPerPage);
  };

  return {
    page,
    rowsPerPage,
    setPage,
    setRowsPerPage,
    handlePageChange,
    handleRowsPerPageChange,
    resetPagination,
  };
};
