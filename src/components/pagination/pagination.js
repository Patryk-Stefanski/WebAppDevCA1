import React from 'react';
import { Pagination } from 'react-bootstrap';
  
export default function pagination() {
  return (
    <div style={{ display: 'block', padding: 30 }}>
      <Pagination count={10} />
    </div>
  );
}