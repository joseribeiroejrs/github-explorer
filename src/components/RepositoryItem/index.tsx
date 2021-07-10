import { Repository } from "../../shared/models/Repository"

export interface RepositoryItemProps {
	repository: Repository;
}

export const RepositoryItem = (props: RepositoryItemProps) => {
	const { repository } = props
	return (
		<li>
			<strong>{repository.name}</strong>
			<p>{repository.description}</p>

			<a href={repository.html_url} target="_blank">
				Acessar repositório
			</a>
		</li>
	)
}