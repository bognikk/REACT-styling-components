import styled from "styled-components";

const Button = styled.button`
	display: inline-block;
	width: 100%;
	padding: 0.8rem 1rem;
	border: 2px solid #eaba6b;
	border-radius: 30px;
	color: #000;
	font: inherit;
	font-weight: 700;
	text-decoration: none;
	background-color: #eaba6b;
	cursor: pointer;

	@media (min-width: 768px) {
		width: auto;
	}

	&:hover,
	&:active,
	&:focus {
		color: #eaba6b;
		border-color: #eaba6b;
		background-color: #0075a2;
		outline-color: #eaba6b;
	}

	&:focus {
		outline: 2px solid webkit-focus-ring-color;
		outline-offset: -2px;
	}
`;

// const Button = (props) => {
// 	return (
// 		<button type={props.type} className="button" onClick={props.onClick}>
// 			{props.children}
// 		</button>
// 	);
// };

export default Button;
