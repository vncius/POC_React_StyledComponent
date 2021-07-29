import styled from 'styled-components'

const Title1 = styled.h1`
      font-weight: 600;
      text-align: center;
      font-size: 1.25rem;
      line-height: 1.75rem;
`;


const Title2 = styled.h2`margin-bottom: 25px;`;

const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 640px;
    padding: 1rem;
`;

const Link = styled.a`
  color: blue;
  border: 1px solid;
  border-radius:5%;
  padding: 5px;
`;

export { Link, Container, Title1, Title2 };