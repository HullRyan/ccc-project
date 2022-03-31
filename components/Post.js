import { Card, Text, Divider, Code, User } from "@geist-ui/core";

export default function Post(props) {
	return (
		<div>
			<Card width="100%" >
				<Card.Content>
					<div className="post-heading">
						<User src="https://unix.bio/assets/avatar.png" name="Witt">
							<User.Link href="https://twitter.com/echo_witt">
								@echo_witt
							</User.Link>
						</User>
						<div className="post-time">12hrs</div>
					</div>
					<Divider/>
					<Text h4>Post Title</Text>
					<Text>
						When called in a non-constructor context, Object behaves identically
						to.
					</Text>
				</Card.Content>
			</Card>
			<style jsx global>
				{`
					.post-heading {
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
					}
					.post-time {
						font-size: calc(0.75 * var(--user-font-size));
					}
				`}
			</style>
		</div>
	);
}
