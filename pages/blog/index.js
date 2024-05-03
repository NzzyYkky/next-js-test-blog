import { getAllPosts } from 'lib/api';
import Meta from 'components/meta';
import Container from 'components/container';
import Hero from 'components/hero';

export default function Blog() {
	return (
		<Container>
			<Meta pageTitle="Blog" pageDesc="Blogページになります。" />
			<Hero title="Blog" subtitle="Recent Posts." />
		</Container>
	);
}

export async function getStaticProps() {

}