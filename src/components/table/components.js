import React from 'react';
import Types from './types';

const Cell = ({ className, cellData, column }) => {
  const { dataKey } = column;
  switch(dataKey){
    case 'type':
        return <Types types={cellData} />
    default:
      return <div className={className}>{cellData}</div>;
  }
}

export default {
  TableCell: Cell,
}