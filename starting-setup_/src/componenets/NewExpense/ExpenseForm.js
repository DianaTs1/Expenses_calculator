import React, { useState } from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import "./ExpenseForm.css";

const ExpnenseForm = () => {
	// Set Title
	const [enteredTitle, setEnteredTitle] = useState("");
	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

	// Set amount
	const [enteredAmount, setEnteredAmount] = useState("");
	const amountStateHandler = (event) => {
		setEnteredAmount(event.target.value);
	};

	// Set date
	const [enteredDate, setEnteredDate] = useState("");
	const dateStateHandler = (event) => {
		setEnteredDate(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		console.log(expenseData);
		setEnteredTitle("");
		setEnteredDate("");
		setEnteredAmount("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={
							titleChangeHandler
						}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={
							enteredAmount
						}
						onChange={
							amountStateHandler
						}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						step="22-12-31"
						value={enteredDate}
						onChange={
							dateStateHandler
						}
					/>
				</div>
				<div className="new-expense__actions">
					<button type="submit">
						Add Expense
					</button>
				</div>
			</div>
		</form>
	);
};

export default ExpnenseForm;
