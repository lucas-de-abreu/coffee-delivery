import styled from 'styled-components'

export const DeliveryFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div:first-child {
    margin-top: 2rem;
    width: 12.5rem;
  }

  div:nth-child(3) {
    display: flex;
    gap: 0.75rem;

    input:first-child {
      width: 12.5rem;
    }
  }

  div:last-child {
    display: flex;
    gap: 0.75rem;

    input:first-child {
      width: 12.5rem;
    }

    input:last-child {
      width: 3.75rem;
    }
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.25rem;
  border: none;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-label']};
`
