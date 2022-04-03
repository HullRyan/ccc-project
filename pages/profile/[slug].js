import BackButton from "../../components/BackButton";
import Profile from "../../components/Profile";
import { useRouter } from "next/router";
import users from '../../data/users.json';

const ProfilePage = () => {
	const router = useRouter();
	const { slug } = router.query;

    const user = users.find(user => user.id === slug);

	return (
		<>
			<Profile user={user}/>
            <BackButton />
		</>
	);
};

export default ProfilePage;
