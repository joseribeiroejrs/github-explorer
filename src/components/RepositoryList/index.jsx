import { RepositoryItem } from "../RepositoryItem"

const repository = {
	name: "Let me ask",
	description: "Aplicação feita com base no NLW 6 da RocketSeat, na trilha de ReactJS",
	link: "https://github.com/joseribeiroejrs/letmeask"
}

export const RepositoryList = () => {
	return (
		<section className="repository-list">
			<h1>Lista de Repositórios</h1>
			<ul>
				<RepositoryItem repository={repository} />
				<RepositoryItem repository={repository} />
				<RepositoryItem repository={repository} />
				<RepositoryItem repository={repository} />
			</ul>
		</section>
	)
}