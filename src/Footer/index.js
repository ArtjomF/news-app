import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

function PaginationComponent() {

  const [page, setPage] = useState(1);

  return (
    <Pagination className="mt-4  justify-content-end">
      <Pagination.Prev disabled={page <= 1} onClick={() => setPage(page - 1)}/>
     <Pagination.Item disabled>{page} / 14</Pagination.Item>
     <Pagination.Next disabled={page >= 14} onClick={() => setPage(page + 1)}/>
     </Pagination>
  );
}

export default PaginationComponent;