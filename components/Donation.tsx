import React from "react";
import Heading from "./Heading";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const Donation = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <Heading
        title="COMO AJUDAR"
        subtitle="Doe qualquer valor e ajude nossa causa!"
      />

      <Card className="bg-slate-50 w-3/4 lg:w-2/4">
        <CardContent className="flex flex-col items-center justify-center gap-4">
          <span className=" uppercase text-xl font-bold">
            Apoie nossa causa
          </span>
          <p className="text-slate-700 text-center font-semibold">
            A AGL garante que sua doação será destinada somente para o apoio à
            nossa causa.
          </p>

          <Button variant={"btn_primary"} className="w-2/3 lg:w-1/3">
            DOAR
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Donation;
