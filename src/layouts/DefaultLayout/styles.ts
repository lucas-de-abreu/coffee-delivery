import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;
  max-width: 94rem;
  margin: 0 auto;

  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
`
