import React from "react";
import { Card, CardContent, Input, Button } from "../../UI";
import {
  downloadIcon,
  search2Icon,
  sortIcon,
  arrowfill2Icon,
  exclaimationIcon,
} from "../../../assets/icon";
import { DataTable, Pagination } from "../../common";

const Transactions = () => {
  const DEFAULT_TRANSACTION = {
    id: 281209,
    orderDate:new Date(),
    orderAmount:1278.23,
    transactionFees: 22,
  };

  const transactions = Array(8).fill(DEFAULT_TRANSACTION);  
  const transactionColDef = [
    {
      accesorKey: "id",
      header: "Order Id",
      cell: (value) => (
        <p className="text-primary font-medium">#{value}</p>
      )
    },
    {
      accesorKey: "orderDate",
      header: (
        <div className="flex gap-[4px] items-center">
          <p>Order Date</p>
          <img src={arrowfill2Icon} alt="sort-icon" />
        </div>
      ),
      cell: (orderDate) =>
        orderDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
    },
    {
      accesorKey: "orderAmount",
      header: <p className="text-right">Order Amount</p>,
      cell: (value) => (
        <p className="text-right">
          {" "}
          {"₹" + new Intl.NumberFormat("en-IN").format(value)}{" "}
        </p>
      ),
    },
    {
      accesorKey: "transactionFees",
      header: (
        <div className="flex gap-[4px] items-center justify-end">
          <p>Transaction fees</p>
          <img src={exclaimationIcon} alt="sort-icon" />
        </div>
      ),
      cell: (value) => (
        <p className="text-right">
          {" "}
          {"₹" + new Intl.NumberFormat("en-IN").format(value)}{" "}
        </p>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-[20px] text-black-12 font-medium">
        Transactions | This Month
      </h1>
      <Card className="pt-3 px-3 pb-6 w-[90vw] sm:w-full sm:flex-1 overflow-x-auto">
        <CardContent className={'flex flex-col gap-6'}>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <Input
              leadingIcon={search2Icon}
              variant={"outlined"}
              inputSize={"sm"}
              className="w-[248px]"
              placeholder="Search by order ID..."
            />
            <div className="flex gap-3">
              <Button
                size={"sm"}
                className="w-[36px] h-[36px] sm:w-[79px] sm:h-[36px] p-2"
              >
                <div className="flex gap-[7px]">
                <img src={sortIcon} alt="sort-icon" />
                <p className="hidden sm:block">Sort</p>
                </div>
              </Button>
              <Button size={"sm"} className={"p-2 w-[36px] h-[36px]"}>
                <img src={downloadIcon} alt="sort-icon" />
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <DataTable columns={transactionColDef} data={transactions}/>
          </div>
          </div>
          <Pagination isActive={true}/>
        </CardContent>
      </Card>
    </div>
  );
};

export default Transactions;
