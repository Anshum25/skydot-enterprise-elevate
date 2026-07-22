import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface TableColumn {
  header: string;
  accessor: string;
}

interface TableData {
  [key: string]: string | number;
}

interface DataTableProps {
  columns: TableColumn[];
  data: TableData[];
  className?: string;
}

export function DataTable({ columns, data, className }: DataTableProps) {
  return (
    <div className={cn("rounded-lg border bg-card shadow-card overflow-hidden", className)}>
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50 hover:bg-muted/50">
            {columns.map((column, index) => (
              <TableHead key={index} className="text-heading font-semibold">
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} className="hover:bg-accent/50 transition-colors">
              {columns.map((column, colIndex) => (
                <TableCell key={colIndex} className="text-paragraph">
                  {row[column.accessor]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
