import Profile from '../../components/Profile';
import { Spacer } from '@geist-ui/core';
import users from '../../data/users.json';
import BackButton from '../../components/BackButton';

export default function ProfileIndex() {

   const user = users.find(user => user.id === 'ninernorm'); 
  return (
    <div>
        <Profile user={user}/>
        <BackButton />
         <style jsx>
                {`

                `}
            </style>
		</div>
  );
}
