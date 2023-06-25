import React from "react";
import styles from "../CSS/Result.module.css";
const Result = (props)=>{
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
    let totalInvested = 0;
    let totalInterest =0;
    let returnContent = props.yearlyReturns.map(yearlyReturn=>{
      totalInterest +=yearlyReturn.yearlyInterest;
      totalInvested = +(yearlyReturn.savingsEndOfYear - totalInterest);  
      return(<tr key={yearlyReturn.id} id={yearlyReturn.id}>
        <td>{yearlyReturn.year}</td>
        <td>{formatter.format(yearlyReturn.savingsEndOfYear)}</td>
        <td>{formatter.format(yearlyReturn.yearlyInterest)}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(totalInvested)}</td>
      </tr>)
    });
      return <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
      {returnContent}
      </tbody>
    </table>
}
export default Result;