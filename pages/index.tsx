import Meta from 'components/Meta';
import Container from 'components/Container';
import Hero from 'components/Hero';
import { getAllPosts } from 'lib/api';
import { eyecatchLocal } from 'lib/constant';
import { getPlaiceholder } from 'plaiceholder';
import Posts from 'components/posts';
import Pagination from 'components/Pagination';

export default function Home({ posts }) {
	return (
		<Container>
			<Meta />
			<Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
			<Posts posts={posts} />
			<Pagination nextUrl="/blog" nextText="More Posts" />
		</Container>
	);
}

export async function getStaticProps() {
	const posts = await getAllPosts(4);

	for (const post of posts) {
		if (!post.hasOwnProperty('eyecatch')) {
			post.eyecatch = eyecatchLocal;
		}
		const { base64 } = await getPlaiceholder(post.eyecatch.url);
		post.eyecatch.blurDataURL = base64;
	}

	return {
		props: {
			posts,
		},
	};
}
