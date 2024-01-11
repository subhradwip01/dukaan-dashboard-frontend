import {
  Pagination as PagitnationRoot,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../UI";

const Pagination = ({ isActive }) => {
  return (
    <PagitnationRoot>
      <PaginationContent>
        <PaginationPrevious/>
        <PaginationItem>1</PaginationItem>
        <PaginationItem>2</PaginationItem>
        <PaginationItem isActive={true}>3</PaginationItem>
        <PaginationItem>4</PaginationItem>
          <PaginationEllipsis />
        <PaginationItem>11</PaginationItem>
          <PaginationNext/>
      </PaginationContent>
    </PagitnationRoot>
  );
};

export default Pagination;
