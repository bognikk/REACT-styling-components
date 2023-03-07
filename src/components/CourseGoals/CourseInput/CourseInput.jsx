import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.scss";

// const FormControl = styled.div`
// 	display: flex;
// 	flex-wrap: wrap;
// 	flex-direction: column;
// 	width: 100%;
// 	margin-bottom: 1rem;
// 	text-align: left;
// 	font-weight: 700;

// 	& label {
// 		display: block;
// 		margin-bottom: 0.5rem;
// 		font-weight: bold;
// 		display: block;
// 		margin-bottom: 0.5rem;
// 		font-weight: 700;
// 		color: ${(props) => (props.invalid ? "salmon" : "#000")};
// 	}

// 	& input {
// 		display: block;
// 		max-width: 100%;
// 		width: 100%;
// 		margin: 0.5rem 0;
// 		padding: 0.5rem;
// 		border-radius: 5px;
// 		border: 1px solid ${(props) => (props.invalid ? "salmon" : "#ccc")};
// 		background: ${(props) => (props.invalid ? "salmon" : "")};
// 		color: #000;
// 		font: inherit;

// 		&:focus {
// 			border-color: #eaba6b;
// 			background-color: #e6c99c;
// 			outline-color: #eaba6b;
// 		}

// 		&:focus-visible {
// 			outline-color: #eaba6b !important;
// 		}
// 	}
// `;

const CourseInput = (props) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isValid, setIsValid] = useState(true);

	const goalInputChangeHandler = (event) => {
		if (event.target.value.trim().length > 0) {
			setIsValid(true);
		}
		setEnteredValue(event.target.value);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (enteredValue.trim().length === 0) {
			setIsValid(false);
			return;
		}
		props.onAddGoal(enteredValue);
		setEnteredValue("");
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div
				className={`${styles["form-control"]}  ${!isValid && styles.invalid}`}
			>
				<label>Course Goal</label>
				<input
					type="text"
					onChange={goalInputChangeHandler}
					value={enteredValue}
				/>
			</div>
			<Button type="submit">Add Goal</Button>
		</form>
	);
};

export default CourseInput;
