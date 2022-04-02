import { Card, Text, Divider, Code, User } from "@geist-ui/core";
import {
	MessageCircle,
	Heart,
	HeartFill,
	FullScreen,
	Share2,
} from "@geist-ui/icons";
import { useTheme } from "@geist-ui/core";
import Link from "next/link";
import { useState } from "react";

export default function Comment(props) {
	//prop for "expanded" view to reuse component for both expanded and non-expanded view pages
	const { palette } = useTheme();

	function handleLike() {
		setLiked(!liked);
	}

	const comment = props.comment;
    const user = props.user;

	const [liked, setLiked] = useState(comment.liked);

	return (
		<div>
			<Card width="100%">
				<Card.Content>
					<div className="post-heading">
						<User src={user.photo} name={user.name}>
                            <Link href="/profile/[slug]" as={`/profile/${user.id}`}>
                                <a>@{user.id}</a>
                            </Link>
						</User>
						<div className="post-time">{comment.time}</div>
					</div>
					<Divider />
					<div>{comment.body}</div>
					<div className="post-buttons">
						<div className="post-footer-children">
							<div onClick={handleLike} className="post-button red">
								{liked ? <HeartFill color={palette.error} /> : <Heart />}
							</div>
							<div>{liked ? parseInt(comment.likes) + 1 : comment.likes}</div>
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
