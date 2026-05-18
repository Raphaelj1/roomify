import type { Route } from './+types/home';
import Navbar from '../../components/Navbar';

export function meta({}: Route.MetaArgs) {
	return [{ title: 'Roomify' }, { name: 'description', content: '' }];
}

export default function Home() {
	return (
		<div className="home">
			<Navbar />
		</div>
	);
}
