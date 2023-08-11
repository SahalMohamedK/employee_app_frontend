import { FC } from 'react';
import './Table.css';
import HeadersType from '../../types/HeadersType';

interface TableProps {
  headers: HeadersType[];
  dataset: object[];
  onClick: (data: any) => void;
}

const Table: FC<TableProps> = ({ headers, dataset, onClick }) => {
  const renderHeaders = () => {
    return headers.map((header) => <th key={'table-th-' + header.key}>{header.label}</th>);
  };

  const renderDatas = () => {
    return dataset.map((data, i) => (
      <tr className='table-row' key={'table-tr-' + i} onClick={() => onClick(data)}>
        {headers.map((column, j) => {
          let value = data[column.key];

          value = column.adapter ? column.adapter(value) : value;

          return (
            <td key={`table-td-${j}`}>
              <span>{value}</span>
            </td>
          );
        })}
      </tr>
    ));
  };

  return (
    <>
      <table className='table'>
        <thead>
          <tr className='table-head'>{renderHeaders()}</tr>
        </thead>
        <tbody>{renderDatas()}</tbody>
      </table>
    </>
  );
};

export default Table;
