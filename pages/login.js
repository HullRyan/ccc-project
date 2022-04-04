import { Text, Card, Link, Spacer, Button, Input } from "@geist-ui/core";

export default function login() {
	return (
		<div className="center">
			<Card width="330px" shadow>
				<Text h4 >
					Login to Covid Community Care
				</Text>
                <Text>To use our app, please sign in or make an account.</Text>
				<div className="card-inputs">
					<Input clearable width="100%" placeholder="Username" />
					<Spacer h={0.5} />
					<Input.Password clearable width="100%" placeholder="Password" />
				</div>
				<Card.Footer>
					<div className="card-buttons">
						<Button width="40%" type="secondary">
							Sign Up
						</Button>
						<Button width="40%" type="success">
							Login
						</Button>
					</div>
				</Card.Footer>
			</Card>
            <Spacer h={9} />
			<style jsx>
				{`
					.center {
						height: 100%;
						display: flex;
                        flex-direction: column;
						justify-content: center;
						align-items: center;
					}
					.card-inputs {
                        margin: auto;
						width: 80%;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
					}
					.card-buttons {
						width: 100%;
						display: flex;
						justify-content: space-between;
					}
				`}
			</style>
		</div>
	);
}
