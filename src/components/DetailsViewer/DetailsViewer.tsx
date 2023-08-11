import { FC } from 'react';
import HeadersType from '../../types/HeadersType';
import './DetailsViewer.css';

interface DetailsViewerProps {
  headers: HeadersType[];
  data: object;
}

const DetailsViewer: FC<DetailsViewerProps> = ({ headers, data }) => {
  const renderData = () => {
    return headers.map((column, j) => {
      let value = data[column.key];

      value = column.adapter ? column.adapter(value) : value;

      return (
        <div className='flex-column detail' key={`table-td-${j}`}>
          <div className='detail-label'>{column.label}</div>
          <div className='detail-value'>{value}</div>
        </div>
      );
    });
  };

  if (data) return <div className='card details-viewer'>{renderData()}</div>;
  else return <div className='card'>No data</div>;
};

export default DetailsViewer;
