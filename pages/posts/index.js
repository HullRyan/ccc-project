import Post from '../../components/Post';
import { Spacer } from '@geist-ui/core';
import posts from '../../data/posts.json';
import BackButton from '../../components/BackButton';

export default function Posts() {
  return (
    <div>
        {
            posts.map(post => (
                <div key={post.id}>
                    <Post slug={post.id} post={post} expanded={false}/>
                    <Spacer y={2}/>
                </div>
            )
        )}
        <BackButton />
            <style jsx>
                {`

                `}
            </style>
		</div>
  );
}
