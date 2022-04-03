import Post from '../../components/Post';
import { Spacer } from '@geist-ui/core';
import posts from '../../data/posts.json';

export default function Posts() {
  return (
    <div>
        {
            posts.map(post => (
                <div key={post.id}>
                    <Post slug={post.id} expanded={false}/>
                    <Spacer y={2}/>
                </div>
            )
        )}
            <style jsx>
                {`

                `}
            </style>
		</div>
  );
}
