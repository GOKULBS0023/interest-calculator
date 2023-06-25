import React, { useState } from "react";
import Header from "./Header/JS/Header"
import Form from "./Form/JS/Form";
import Result from "./Result/JS/Result";

const Investment = ()=>{
  const [yearlyReturn, setYearlyReturns] = useState([]);
const getYearlyReturn = (yearlyData)=>{
  setYearlyReturns(yearlyData);
}
    return (<div>
    <Header />
    <Form calculateReturn={getYearlyReturn}/>
    {yearlyReturn.length === 0 && <p style={{textAlign:"center"}}>No investments calculated yet.</p>}
    {yearlyReturn.length > 0 && <Result yearlyReturns={yearlyReturn}/>}
  </div>
);
}
export default Investment;