"use client";
import React from "react";

import {
  PaginationState,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
export default function ReactTable({
  columns = [],
  data = [],
}: {
  columns: ColumnDef<unknown>[];
  data: unknown[];
}) {
  //   const rerender = React.useReducer(() => ({}), {})[1];

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });
  const currentPage = table.getState().pagination.pageIndex + 1;
  const getPageItemNumber = (
    index: number,
    currentPage: number,
    lastPage: number,
    range: number
  ) => {
    return index + 1 + range * (Math.ceil(currentPage / range) - 1);
  };
  const pageItemRange = table.getPageCount() < 5 ? table.getPageCount() : 5;

  return (
    <>
      <div className="p-2 block max-w-full overflow-y-hidden ">
        <Table className="w-full border rounded-lg">
          <TableHeader className="bg-primary ">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="text-white">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <div className="text-white">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </div>
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => {
              return (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Pagination className="mt-2">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                first
                href="#"
                onClick={() => table.firstPage()}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => table.previousPage()}
              />
            </PaginationItem>
            {[
              ...Array.from(
                { length: pageItemRange < 5 ? pageItemRange : 5 },
                (x, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      href="#"
                      onClick={() => {
                        table.setPageIndex(
                          getPageItemNumber(
                            i,
                            currentPage,
                            table.getPageCount(),
                            pageItemRange
                          ) - 1
                        );
                      }}
                      isActive={
                        currentPage ===
                        getPageItemNumber(
                          i,
                          currentPage,
                          table.getPageCount(),
                          pageItemRange
                        )
                      }
                    >
                      {getPageItemNumber(
                        i,
                        currentPage,
                        table.getPageCount(),
                        pageItemRange
                      )}
                    </PaginationLink>
                  </PaginationItem>
                )
              ),
            ]}
            <PaginationItem>
              <PaginationNext href="#" onClick={() => table.nextPage()} />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext last href="#" onClick={() => table.lastPage()} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        {/* <div className="flex items-center gap-2">
          <button
            className="border rounded p-1"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            | Go to page:
            <input
              type="number"
              min="1"
              max={table.getPageCount()}
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16"
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div>{table.getRowModel().rows.length} Rows</div> */}
      </div>

      {/* <hr />
      <div>
        <button onClick={() => rerender()}>Force Rerender</button>
      </div>
      <div>
        <button onClick={() => refreshData()}>Refresh Data</button>
      </div>
      <pre>{JSON.stringify(pagination, null, 2)}</pre> */}
    </>
  );
}
