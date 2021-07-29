import { Link, Container, Title1, Title2 } from './Components/WebSite'

export default function App() {
  return (
    <div>
      <header>
        <div className="bg-gray-100 mx-auto p-4">
          <Title1>
            StyledComponent with template literals
          </Title1>
        </div>
      </header>

      <main>
        <Container>
          <Title2>
            Criado por <strong>Vinícius Vieira Abreu.</strong>
            Neste exemplo simples eu demonstro o funcionamento da
            biblioteca StyledComponent que permite criar componentes com
            CSS puro através de template literals
          </Title2>
          <Link href="https://styled-components.com/" target="_blank">
            Documentação da biblioteca
          </Link>
        </Container>

      </main>
    </div>
  );
}
