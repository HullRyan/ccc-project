import { Card, Text, Divider, Spacer, User, Textarea } from "@geist-ui/core";
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
import Comment from "../components/Comment";
import posts from "../data/posts.json";
import users from "../data/users.json";

export default function Post(props) {
	//prop for "expanded" view to reuse component for both expanded and non-expanded view pages
	const { palette } = useTheme();

	function handleLike() {
		setLiked(!liked);
	}

	const expanded = props.expanded;
	const post_index = props.slug;
	const post = posts.find((post) => post.id === post_index);
	const user = users.find((user) => user.id === post.user);

	const [liked, setLiked] = useState(post.liked);

	function getUser(comment_user_id) {
		return users.find((user) => user.id === comment_user_id);
	}

	return (
		<div>
			{!expanded ? (
				<Card width="100%">
					<Card.Content>
						<div className="post-heading">
							<User src={user.photo} name={user.name}>
								<Link href="/profile/[slug]" as={`/profile/${user.id}`}>
									<a>@{user.id}</a>
								</Link>
							</User>
							<div className="post-time">{post.time}</div>
						</div>
						<Divider />
						<Text h4>{post.title}</Text>
						<Text>{post.body}</Text>
						<div className="post-buttons">
							<div className="post-footer-children">
								<div onClick={handleLike} className="post-button red">
									{liked ? <HeartFill color={palette.error} /> : <Heart />}
								</div>
								<div>{liked ? parseInt(post.likes) + 1 : post.likes}</div>
							</div>
							<div>
								<div className="post-footer-children">
									<Link href="/posts/[slug]" as={`/posts/${post.id}`}>
										<a className="post-button blue">
											<MessageCircle />
										</a>
									</Link>
									<div>{post.comments.length}</div>
								</div>
							</div>
						</div>
					</Card.Content>
				</Card>
			) : (
				<div>
					<Card width="100%">
						<Card.Content>
							<div className="post-heading">
								<User src={user.photo} name={user.name}>
									<Link href="/profile/[slug]" as={`/profile/${user.id}`}>
										<a>@{user.id}</a>
									</Link>
								</User>
								<div className="post-time">{post.time}</div>
							</div>
							<Divider />
							<Text h4>{post.title}</Text>
							<Text>{post.body}</Text>
							<div className="post-buttons">
								<div className="post-footer-children">
									<div onClick={handleLike} className="post-button red">
										{liked ? <HeartFill color={palette.error} /> : <Heart />}
									</div>
									<div>{liked ? parseInt(post.likes) + 1 : post.likes}</div>
								</div>
							</div>
						</Card.Content>
					</Card>
					<div className="post-comments">
						{post.comments.map((comment) => (
							<div key={comment.id}>
								<Spacer />
								<Comment comment={comment} user={getUser(comment.user)} />
							</div>
						))}
					</div>
					<Divider />
					<div className="post-comment-input">
						<Textarea placeholder="Reply" width="100%"/>
					</div>
				</div>
			)}
			<style jsx global>
				{`
					.post-comment-input {
						height: 100%;
						width: 100%;
						background-color: #fff;
						border-radius: 6px;
					}
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
