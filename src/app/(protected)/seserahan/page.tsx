import { DatePicker } from "@/components/elements/DatePicker";
import InputSection from "@/components/elements/InputSection";
import ReactTable from "@/components/elements/ReactTable";
import TextInput from "@/components/elements/TextInput";
import { Button } from "@/components/ui/button";
import { createClient } from "@supabase/supabase-js";
import { ColumnDef } from "@tanstack/react-table";

export default async function SeserahanPage() {
  const columns: ColumnDef<unknown>[] = [
    {
      accessorKey: "no",
      header: "No",
    },
    {
      accessorKey: "ket",
      header: "Keterangan",
    },
    {
      accessorKey: "tanggal",
      header: "tanggal",
    },
    {
      accessorKey: "jumlah",
      header: "Jumlah",
    },
  ];
  const supabaseUrl = "https://heodtfaiifipiwrqnrim.supabase.co";
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;;
  const supabase = createClient(supabaseUrl, supabaseKey as string);
  const { data } = await supabase.from("transaksi_seserahan").select();
  console.log("data", data);

  return (
    <div>
      <InputSection title="Tambah" total={0} description="">
        <TextInput label="Keterangan" />
        <TextInput type="number" label="Jumlah" />
        <DatePicker />
        <Button className="mt-2">Tambah</Button>
      </InputSection>
      <div>
        <ReactTable columns={columns} data={[]} />
      </div>
    </div>
  );
}
