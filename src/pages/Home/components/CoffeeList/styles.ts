import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 2rem auto;

  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 2.625rem;
    font-size: 2rem;

    color: ${(props) => props.theme['base-subtitle']};
  }

  > div {
    margin-top: 3.375rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`
