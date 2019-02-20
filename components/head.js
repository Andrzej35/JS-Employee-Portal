import NextHead from 'next/head'
import {string} from 'prop-types'

const defaultDescription = '';

const Head = props => (
	<NextHead>
		<meta charSet="UTF-8"/>
		<title>{props.title || 'test-developer-app'}</title>
		<meta
			name="description"
			content={props.description || defaultDescription}
		/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<link rel="icon" href="/static/favicon.ico"/>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
		<link rel="stylesheet" href="/static/styles.css" />
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous"/>
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
	</NextHead>
);

Head.propTypes = {
	title: string,
	description: string,
	url: string,
	ogImage: string
};

export default Head
