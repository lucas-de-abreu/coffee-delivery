import styled from 'styled-components'

export const CartContainer = styled.form`
  display: flex;
  gap: 2rem;

  width: 100%;
  max-width: 70rem;
  margin: 2.5rem auto;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    height: fit-content;
  }
`

const ICON_COLORS = {
  yellowDark: 'yellow-dark',
  purple: 'purple',
} as const

interface DeliveryDataProps {
  iconColor: keyof typeof ICON_COLORS
}

export const DeliveryData = styled.div<DeliveryDataProps>`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem;

  > div.infoContainer {
    display: flex;
    gap: 0.5rem;
    color: ${(props) => props.theme[ICON_COLORS[props.iconColor]]};
  }
`

export const PaymentType = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 2rem;

  > button {
    display: flex;
    border: 1px solid transparent;
    border-radius: 0.375rem;
    color: ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme['base-button']};
    padding: 1rem;
    width: 100%;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['base-hover']};
    }

    &.active {
      border: 1px solid ${(props) => props.theme.purple};
      background-color: ${(props) => props.theme['purple-light']};
    }

    > span {
      font-size: 0.75rem;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const Info = styled.div`
  display: flex;
  gap: 0.25rem;
  flex-direction: column;

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span.title {
    font-size: 1rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const CartProducts = styled.div`
  padding: 2rem;
  max-width: 28rem;
  width: 100%;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem 2.75rem;

  div.emptyCart {
    text-align: center;
    font-weight: bold;
  }
`

export const Divider = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme['base-button']};
  margin: 1.5rem 0;
`

export const PricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    font-size: 0.75rem;
    justify-content: space-between;
  }

  > div.total {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Button = styled.button`
  display: flex;
  border: none;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  padding: 0.75rem;

  justify-content: center;
  align-items: center;
  cursor: pointer;

  font-weight: bold;
  font-size: 0.875rem;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
