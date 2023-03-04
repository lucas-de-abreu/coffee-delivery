import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 70rem;
  margin: 2rem auto;

  img {
    height: 40px;
  }

  nav {
    display: flex;
    gap: 0.5rem;

    > div {
      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme.purple};

      border-radius: 8px;

      padding: 8px;
      display: flex;
      align-items: center;
      font-size: 14px;
      gap: 4px;
    }

    a {
      display: flex;
      padding: 8px;
      position: relative;
      border-radius: 8px;

      &:hover {
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
      }

      background: ${(props) => props.theme['yellow-light']};

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const Counter = styled.div`
  width: 1.25rem;
  height: 1.25rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  font-size: 0.75rem;
  line-height: 0.75rem;
  font-weight: bold;
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`
