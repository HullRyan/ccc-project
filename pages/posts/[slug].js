import BackButton from "../../components/BackButton";
import { useRouter } from "next/router";

const Post = () => {
	const router = useRouter();
	const { slug } = router.query;

	return (
		<>
			<p>Post: {slug}</p>
            <BackButton />
		</>
	);
};

export default Post;
