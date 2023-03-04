import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 19.375rem;
  width: 16rem;
  padding: 20px 24px;

  border-radius: 6px 36px;
  background-color: ${(props) => props.theme['base-card']};

  > img {
    height: 7.5rem;
    width: 7.5rem;
    margin: -2.5rem auto 1rem;
  }

  > div.tags {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`

export const Tag = styled.div`
  font-size: 0.625rem;
  padding: 0.25rem 0.5rem;
  border-radius: 6.25rem;
  font-weight: bold;
  width: fit-content;
  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};
`

export const Title = styled.h3`
  margin-top: 1rem;
  font-family: 'Baloo 2';
  font-height: 1.625rem;
  font-size: 1.25rem;
  text-align: center;

  color: ${(props) => props.theme['base-subtitle']};
`

export const Subtitle = styled.div`
  margin-top: 0.5rem;
  font-height: 1.125rem;
  font-size: 0.875rem;
  text-align: center;

  color: ${(props) => props.theme['base-label']};
`

export const PriceContainer = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: space-between;

  div.price {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    font-size: 0.875rem;

    span {
      font-family: 'Baloo 2';
      font-size: 1.5rem;
      line-height: 1.5rem;
      font-weight: 800;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
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

export const CartButton = styled.div`
  padding: 0.5rem;
  cursor: pointer;

  border-radius: 0.5rem;

  height: 2.375rem;
  height: 2.375rem;

  background-color: ${(props) => props.theme['purple-dark']};

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }

  color: ${(props) => props.theme.white};
`
