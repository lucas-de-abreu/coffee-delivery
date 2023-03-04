import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;

  > div {
    width: 100%;
    display: flex;
    gap: 1.25rem;

    > div.price {
      font-weight: bold;
      margin-left: auto;
    }

    img {
      width: 4rem;
      height: 4rem;
    }
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme['base-subtitle']}
  flex-direction: column;
  gap: 0.5rem;
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Counter = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme['base-button']};

  > div {
    display: flex;
    align-items: center;
    cursor: pointer;

    > svg {
      color: ${(props) => props.theme.purple};

      &:hover {
        color: ${(props) => props.theme['purple-dark']};
      }
    }
  }
`

export const ButtonSmall = styled.button`
  display: flex;
  border: none;
  border-radius: 0.375rem;
  color: ${(props) => props.theme.purple};
  background-color: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  > span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};
  }
`
