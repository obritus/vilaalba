import styled from 'styled-components'
import Link from 'next/link'
import '../public/styles/App.sass.min.css'

const Header = styled.header`
	background-color: #999;
`
const Section = styled.section`
	background-color: #666;
`
const Footer = styled.footer`
	background-color: #000;
`
const App = ({Component, pageProps}) => {
	return (
		<main>
			<Header>
				<div className="container">
				</div>
			</Header>
			<Section>
				<div className="container">
					<Component {...pageProps} />
				</div>
			</Section>
			<Footer />
		</main>
	)
}

export default App