"use server";

import { createClient } from "@/lib/supabase/server";

export const getSeserahan = async () => {
  const supabase = createClient()
  const { data, error } = await supabase
    .from("transaksi_seserahan")
    .select();
  return data;
};

export const addSeserahan = async () => {
  const supabase = createClient()
  const { data, error } = await supabase
    .from("transaksi_seserahan")
    .insert([{ some_column: "someValue", other_column: "otherValue" }])
    .select();
  return data;
};
  const { data, error } = await supabase
    .from("transaksi_seserahan")
    .insert([{ some_column: "someValue", other_column: "otherValue" }])
    .select();
  return data;
};

export const updateSeserahan = async () => {
  return [];
};

export const deleteSeserahan = async () => {
  return [];
};
