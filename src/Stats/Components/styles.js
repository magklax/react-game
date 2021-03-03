import styled from 'styled-components';
import colors from '../../utils/colors';

const { torchred } = colors;

export const TD = styled.td`
  padding: 10px 20px;
`;

export const TR = styled.tr`
  &:nth-child(even) {
    background-color: rgba(0,0,0, 0.3);
  }
`;

export const TH = styled.th`
  padding: 10px 20px;
  color: ${torchred};
`;

export const Caption = styled.caption`
  padding: 10px 0;
  font-size: 20px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 25px;
  padding: 0 50px;
  font-size: 18px;
  background-color: white;
`;