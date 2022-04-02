import { Card, Text, Divider, Code, User } from "@geist-ui/core";
import { MessageCircle, Heart, HeartFill, FullScreen } from "@geist-ui/icons";
import { useTheme } from "@geist-ui/core";
import Link from "next/link";
import { useState } from "react";

export default function Post(props) {
	//prop for "expanded" view to reuse component for both expanded and non-expanded view pages
	const { palette } = useTheme();
	const [liked, setLiked] = useState(true);

	function handleLike() {
		setLiked(!liked);
	}

	return (
		<div>
			{console.log(props)}
			<Card width="100%">
				<Card.Content>
					<div className="post-heading">
						<User src="https://unix.bio/assets/avatar.png" name="Witt">
							<User.Link href="https://twitter.com/echo_witt">
								@echo_witt
							</User.Link>
						</User>
						<div className="post-time">12hrs</div>
					</div>
					<Divider />
					<Text h4>Post Title</Text>
					<Text>
						When called in a non-constructor context, Object behaves identically
						to.
					</Text>
					<div className="post-buttons">
						<div className="post-footer-children">
							<div onClick={handleLike} className="post-button red">
								{liked ? <HeartFill color={palette.error} /> : <Heart />}
							</div>
							<div>{liked ? 133 : 132}</div>
						</div>
						<div>
							<div className="post-footer-children">
								<Link href="/posts/[slug]" as={`/posts/${props.slug}`}>
									<a className="post-button blue">
										<MessageCircle />
									</a>
								</Link>
								<div>2</div>
							</div>
						</div>
					</div>
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
					.post-footer-children {
						display: flex;
						gap: 0.3rem;
					}
					.post-buttons {
						display: flex;
						justify-content: space-between;
						padding: 0 0.5rem;
					}
					.post-button {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 1.5rem;
						height: 1.5rem;
						border-radius: 50%;
					}
					.post-button:hover {
						cursor: pointer;
					}
					.red-filled {
						color: ${palette.error};
					}
					.red:hover {
						color: ${palette.errorDark};
					}
					.blue:hover {
						color: ${palette.cyan};
					}
					.post-hearted {
						color: ${palette.error};
					}
				`}
			</style>
		</div>
	);
}
