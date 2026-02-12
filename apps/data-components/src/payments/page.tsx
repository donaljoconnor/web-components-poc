import { columns } from "./columns";
import { payments } from "./data";
import { DataTable } from "./data-table";

export default function DemoPage() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={payments} />
    </div>
  );
}
