import styled from 'styled-components';
import { TableCell } from '@mui/material';
import { Paper as MuiPaper } from '@mui/material';

export const StyledHeaderCell = styled(TableCell)`
  font-weight: bold;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  min-height: 440px;
  gap: 8px;
  box-sizing: border-box;
`;

export const StyledTableCell = styled(TableCell)`
  &.MuiTableCell-root {
    border-bottom: 1px solid #cae0ed;
  }
`;

export const StyledPaper = styled(MuiPaper)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  min-width: 1200px;
`;
