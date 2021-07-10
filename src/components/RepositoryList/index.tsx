import { useEffect, useState } from "react"
import { RepositoryItem } from "../RepositoryItem"
import "../../styles/repositories.scss"
import { Repository } from "../../shared/models/Repository"

const URL = "https://api.github.com/users/joseribeiroejrs/repos"


export const RepositoryList = () => {
	const [repositories, setRepositories] = useState<Repository[]>([]);

	useEffect(() => {
		fetch(URL)
			.then(response => response.json())
			.then(data => setRepositories(data))
	}, [])

	const renderRepositoryList = () => {
		return repositories.map((repository) => (
			<RepositoryItem repository={repository} key={repository.node_id} />
		))
	}

	return (
		<section className="repository-list">
			<h1>Lista de Repositórios</h1>
			<ul>
				{renderRepositoryList()}
			</ul>
		</section>
	)
}