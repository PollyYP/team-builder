import React, { useState } from "react";
import Forms from "./Forms";
import FormCards from "./Form-cards";
import { dummyData } from "../dummyData";

export default function App() {
  const [forms, setForms] = useState(dummyData);
  return (
    <div>
      <Forms forms={forms} setForms={setForms} />
      <FormCards forms={forms} />
    </div>
  );
}
