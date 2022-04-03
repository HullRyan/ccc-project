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
		{user ? (<>
			<Profile user={user}/>
            <BackButton />
			</>):(<div>User not found</div>)}
			
		</>
	);
};

export default ProfilePage;
