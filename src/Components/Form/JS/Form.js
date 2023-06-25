import React, { useState } from "react";
import styles from "../CSS/Form.module.css"
import Actions from "./Actions";
const Form = (props)=>{
  const [userInput, setUserInput]= useState({
    savings: 1000,
    contribution:0,
    return:7,
    duration:1
  });
  const handleChangeHandler = (event)=>{
    const {name, value}=event.target;
    setUserInput(prevState=>({
      ...prevState,
      [name] : value,
    }));
  }
  const formHandler = (event)=>{
    event.preventDefault();
    if(event.target.type==="reset"){
      setUserInput({
        savings: "",
        contribution:"",
        return:"",
        duration:""
      });
    }
    calculateHandler(userInput);
  }
  const calculateHandler = (userInput) => {
    const yearlyData = []; 

    let currentSavings = +userInput.savings; 
    const yearlyContribution = +userInput.contribution; 
    const expectedReturn = +userInput.return / 100;
    const duration = +userInput.duration;
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        id: Math.random()*3
      });
    }
    props.calculateReturn(yearlyData); 
  };
    return <form className={styles.form} onSubmit={formHandler}>
    <div className={styles["input-group"]}>
      <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input type="number" id="current-savings" name="savings"  onChange={handleChangeHandler} value={userInput.savings}/>
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input type="number" id="yearly-contribution"  name="contribution" onChange={handleChangeHandler} value={userInput.contribution}/>
      </p>
    </div>
    <div className={styles["input-group"]}>
      <p>
        <label htmlFor="expected-return">
          Expected Interest (%, per year)
        </label>
        <input type="number" id="expected-return" name="return" onChange={handleChangeHandler} value={userInput.return}/>
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input type="number" id="duration" name="duration" onChange={handleChangeHandler} value={userInput.duration}/>
      </p>
    </div>
    <Actions clickHandler={formHandler}/>
  </form>;
}
export default Form;