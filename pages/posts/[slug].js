import BackButton from "../../components/BackButton";
import Post from "../../components/Post";
import { useRouter } from "next/router";

const PostPage = () => {
	const router = useRouter();
	const { slug } = router.query;

	return (
		<>
			<Post slug={slug} expanded={true}/>
            <BackButton />
		</>
	);
};

export default PostPage;
