import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

interface CardComponentProps {
  total: string | number;
  title: string;
  description?: string;
}
const CardComponent = ({ total, title, description }: CardComponentProps) => {
  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {total}
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        <div className="text-muted-foreground">{description}</div>
      </CardFooter>
    </Card>
  );
};
const dashboardPage = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4">
        <CardComponent
          total={1250}
          title="Total Budget"
          description="Visitors for the last 6 months"
        />
        <CardComponent
          total={1250}
          title="Total Seserahan"
          description="Visitors for the last 6 months"
        />
        <CardComponent
          total={1250}
          title="Total Emas"
          description="Visitors for the last 6 months"
        />
        <CardComponent
          total={1250}
          title="Total Pengeluaran"
          description="Visitors for the last 6 months"
        />
      </div>
    </div>
  );
};
export default dashboardPage;
