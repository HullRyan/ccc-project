import { useState } from "react";
import { Modal, Input, Divider } from "@geist-ui/core";
import survey from "../pages/survey";
import Link from "next/link";
export default function NewSurvey() {
	const [counter, setCounter] = useState(0);
	const [visible, setVisible] = useState(false);
	const [visibleTwo, setVisibleTwo] = useState(false);
	const [val, setVal] = useState("");
	const [symptomArray, setSymptomArray] = useState([]);

	const handleKeyDown = (event) => {
		if (event.key === "Enter" && event.target.value.trim().length !== 0) {
			setSymptomArray(symptomArray.concat(event.target.value));
			setVal("");
		}
	};

	const handleChange = (event) => {
		setVal(event.target.value);
	};

	const deleteSymptom = (index) => {
		setSymptomArray(symptomArray.filter((_, i) => i !== index));
	};

	function handleSubmit(event) {
		event.preventDefault();
		console.log("Submitted");
		if (counter > 2) {
			setVisible(true);
		} else {
			setVisibleTwo(true);
		}
	}

	const closeHandler = (event) => {
		setVisible(false);
		console.log("closed");
	};
	const closeHandlerTwo = (event) => {
		setVisibleTwo(false);
		console.log("closed");
	};

	return (
		<div className="survey-page-container">
			<div className="survey-container">
				<div className="survey-header">
					<h2>Symptoms Survey</h2>
				</div>
				<Input
					value={val}
					clearable
					placeholder="Type symptoms here"
					onKeyDown={handleKeyDown}
					onChange={handleChange}
				/>
				<div className="symptoms">
					{symptomArray.map((symptom, index) => (
						<div className="symptom" key={index}>
							<div>{symptom}</div>
							<button onClick={() => deleteSymptom(index)}>X</button>
						</div>
					))}
				</div>
			</div>
			<div className="results-container">
				<div className="results-header">
					<h2>Results</h2>
				</div>
				<div className="results-body">
					<div className="results-body-container">
						{symptomArray.length > 2 ? (
							<>
								<h3>Warning</h3>
								<div>You possibly have covid</div>
								<p>
									You should call your primary health care provider and ask for
									help regarding your symptoms and input
								</p>
								<Link href="/map">
									<a>See nearby pharmacies</a>
								</Link>
							</>
						) : symptomArray.length > 0 ? (
							<>
								<h3>Risk Low</h3>
								<div>Low amount of symptoms indicate low risk of covid infection</div>
								<p>
								Should symptoms worsen or pain increase, do not hesitate to contact
								your primary health care provider for more information and help.
								</p>
								
							</>
						) : (
							<div>No symptoms listed.</div>
						)}
					</div>
				</div>
			</div>
			<Modal visible={visible} onClose={closeHandler}>
				<Modal.Title>Warning</Modal.Title>
				<Modal.Subtitle>You possibly have Covid</Modal.Subtitle>
				<Modal.Content>
					<p>
						You should call your primary health care provider and ask for help
						regarding your symptoms and input
					</p>
				</Modal.Content>
				<Modal.Action passive onClick={() => setVisible(false)}>
					Okay
				</Modal.Action>
				<Modal.Action>
					<Link href="/map">
						<a>See nearby pharmacies</a>
					</Link>
				</Modal.Action>
			</Modal>
			<Modal visible={visibleTwo} onClose={closeHandlerTwo}>
				<Modal.Title>Risk Low</Modal.Title>
				<Modal.Subtitle>
					Low amount of symptoms indicate low risk of Covid infection
				</Modal.Subtitle>
				<Modal.Content>
					<p>
						Should symptoms worsen or pain increase, do not hesitate to contact
						your primary health care provider for more information and help.
					</p>
				</Modal.Content>
				<Modal.Action passive onClick={() => setVisibleTwo(false)}>
					Okay
				</Modal.Action>
			</Modal>
			<style jsx>
				{`
					.results-container {
						display: flex;
						flex-direction: column;
						align-items: center;
						flex-grow: 1;
						padding-top: 1rem;
					}
					.results-body-container {
						display: flex;
						flex-direction: column;
						align-items: center;
						flex-grow: 1;
						padding: 1rem;
						border-radius: 0.5rem;
						border: 1px solid #eaeaea;
					}
					.results-body-container div {
						align-text: center;
					}
					.symptoms {
						display: flex;
						flex-direction: column;
						width: 100%;
						border-top: 1px solid #e6e6e6;
						padding-top: 10px;
						margin-top: 10px;
						gap: 0.3rem;
						overflow: auto;
					}
					.symptom {
						display: flex;
						justify-content: space-between;
						padding-left: 2rem;
						padding-right: 2rem;
					}
					.survey-page-container {
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
					}
					.survey-container {
						display: flex;
						flex-direction: column;
						align-items: center;
						height: 100%;
						width: 100%;
						border-radius: 0.5rem;
						border: 1px solid #eaeaea;
						height: 19rem;
					}
					.survey-body {
						width: 100%;
						height: 100%;
						max-height: 25rem;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						gap: 0.5rem;
					}
					.survey-question {
						width: 100%;
						display: flex;
						gap: 1rem;
					}
					.survey-question > div {
						font-size: 1.1rem;
					}
					.survey-submit {
						padding-top: 1rem;
						width: 100%;
						display: flex;
						justify-content: center;
					}
					input[type="checkbox"] {
						width: 1rem;
					}
					input[type="submit"] {
						width: 6rem;
					}
				`}
			</style>
		</div>
	);
}
