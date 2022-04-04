import { useState } from "react";
import { Modal } from "@geist-ui/core";
import survey from './../pages/survey';
import Link from "next/link";
export default function Survey() {
	const [counter, setCounter] = useState(0);
	const [visible, setVisible] = useState(false);
	const [visibleTwo, setVisibleTwo] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();
		console.log("Submitted");
		if (counter > 2) {
			setVisible(true);
		} else {
			setVisibleTwo(true);
		}
	}

	function handleChange(event) {
		if (event.target.checked === false) {
			setCounter(counter - 1);
		} else {
			setCounter(counter + 1);
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
		<div>
			<div className="survey-container">
				<div className="survey-header">
					<h2>Symptoms Survey</h2>
				</div>
				<form className="survey-body" onSubmit={handleSubmit}>
					<div className="survey-question">
						<input
							type="checkbox"
							id="survey-checkbox-1"
							onChange={handleChange}
							autoComplete="off"
						/>
                        <div>Chills or shaking</div>
					</div>
					<div className="survey-question">
						<input
							type="checkbox"
							id="survey-checkbox-2"
							onChange={handleChange}
							autoComplete="off"
						/>
						<div>Cough</div>
					</div>
					<div className="survey-question">
						<input
							type="checkbox"
							id="survey-checkbox-3"
							onChange={handleChange}
							autoComplete="off"
						/>
                        <div>Shortness of breath or difficulty breathing</div>
					</div>
					<div className="survey-question">
						<input
							type="checkbox"
							id="survey-checkbox-4"
							onChange={handleChange}
							autoComplete="off"
						/>
                        <div>Loss of taste or smell</div>
					</div>
					<div className="survey-question">
						<input
							type="checkbox"
							id="survey-checkbox-5"
							onChange={handleChange}
							autoComplete="off"
						/>
                        <div>Sore throat</div>
					</div>
					<div className="survey-question">
						<input
							type="checkbox"
							id="survey-checkbox-6"
							onChange={handleChange}
							autoComplete="off"
						/>
                        <div>Runny nose or sinus congestion</div>
					</div>
					<div className="survey-question">
						<input
							type="checkbox"
							id="survey-checkbox-7"
							onChange={handleChange}
							autoComplete="off"
						/>
                        <div>Diarrhea</div>
					</div>
					<div className="survey-question">
						<input
							type="checkbox"
							id="survey-checkbox-8"
							onChange={handleChange}
							autoComplete="off"
						/>
                        <div>Muscle pain or body aches</div>
					</div>
					<div className="survey-question">
						<input
							type="checkbox"
							id="survey-checkbox-9"
							onChange={handleChange}
							autoComplete="off"
						/>
                        <div>Headache</div>
					</div>
					<div className="survey-question">
						<input
							type="checkbox"
							id="survey-checkbox-10"
							onChange={handleChange}
							autoComplete="off"
						/>
                        <div>Unusual fatigue</div>
					</div>
					<div className="survey-question">
						<input
							type="checkbox"
							id="survey-checkbox-11"
							onChange={handleChange}
							autoComplete="off"
						/>
                        <div>Eye redness with or without discharge</div>
					</div>
					<div className="survey-question">
						<input
							type="checkbox"
							id="survey-checkbox-12"
							onChange={handleChange}
							autoComplete="off"
						/>
                        <div>Nausea or vomiting</div>
					</div>
					<div className="survey-question">
						<input
							type="checkbox"
							id="survey-checkbox-13"
							onChange={handleChange}
							autoComplete="off"
						/>
                        <div>Fever (greater than 100.4º F or 38º C)</div>
					</div>
                    <div className="survey-submit">
					    <input type={"submit"} value={"Submit"} />
                    </div>
				</form>
			</div>
			<Modal visible={visible} onClose={closeHandler}>
				<Modal.Title>Warning</Modal.Title>
				<Modal.Subtitle>You possibly have covid</Modal.Subtitle>
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
					Low amount of symptoms indicate low risk of covid infection
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
					.survey-container {
						display: flex;
						flex-direction: column;
						align-items: center;
                        height: 100%;
					}
					.survey-body {
                        width: 100%;
                        height: 100%;
                        max-height: 25rem;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						gap: .5rem;
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
