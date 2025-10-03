import React from 'react';
import {
  Box,
  Checkbox,
  TableRow,
  TableBody,
  TableHead,
  Typography,
  TableContainer,
  TablePagination,
  Table as MuiTable,
} from '@mui/material';
import { red } from '@mui/material/colors';
import { formatDate } from '@/utils/date.ts';
import { OperatorAvatar } from '@/Components/Common/Avatar.tsx';
import { StyledHeaderCell, StyledContainer, StyledTableCell } from './styles';
import type { OperatorsTableProps } from './types';

export const OperatorsTable: React.FC<OperatorsTableProps> = ({
  data,
  loading = false,
  totalCount,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}) => {
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" minHeight="430px" p={4}>
        <Typography>loading...</Typography>
      </Box>
    );
  }

  return (
    <StyledContainer>
      <TableContainer>
        <MuiTable>
          <TableHead>
            <TableRow>
              <StyledHeaderCell>#</StyledHeaderCell>
              <StyledHeaderCell>Користувач</StyledHeaderCell>
              <StyledHeaderCell>Працює</StyledHeaderCell>
              <StyledHeaderCell>Дата / Час створення</StyledHeaderCell>
              <StyledHeaderCell>Текст</StyledHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((operator, index) => (
              <TableRow
                sx={{
                  borderBottomColor: '#CAE0ED',
                }}
                key={operator.id}
                hover
              >
                <StyledTableCell>
                  {page * rowsPerPage + index + 1}
                </StyledTableCell>
                <StyledTableCell>
                  <Box display="flex" alignItems="center" gap={1}>
                    <OperatorAvatar src={operator.avatar} alt={operator.name} />
                    <Typography variant="body2">{operator.name}</Typography>
                  </Box>
                </StyledTableCell>
                <StyledTableCell>
                  <Checkbox
                    checked={operator.isWorking}
                    disabled
                    sx={{
                      color: operator.isWorking ? red[500] : 'default',
                      '&.Mui-checked': {
                        color: red[500],
                      },
                    }}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <Typography variant="body2">
                    {formatDate(operator.createdAt)}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography variant="body2" color="text.secondary">
                    {operator.text}
                  </Typography>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={totalCount || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        labelRowsPerPage="Rows per page:"
        sx={{
          '& .MuiTablePagination-selectLabel': {
            color: '#668099',
          },
        }}
      />
    </StyledContainer>
  );
};
