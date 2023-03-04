import styled from 'styled-components'

export const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 34rem;
  position: relative;
  overflow: hidden;

  > img {
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    width: 100%;

    @media (min-width: 768px) {
      box-shadow: 0 0 16px 16px ${(props) => props.theme.background} inset;
    }
  }

  > div {
    width: 100%;
    max-width: 70rem;
    margin: 5.875rem auto;
    display: flex;

    gap: 3.5rem;

    > div {
      display: flex;
      gap: 4.125rem;
      flex-direction: column;
    }

    img {
      height: 22.5rem;
    }
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 4rem;
    font-size: 3rem;

    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const ICON_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  baseText: 'base-text',
  purple: 'purple',
} as const

interface ItemProps {
  itemColor: keyof typeof ICON_COLORS
}

export const Item = styled.div<ItemProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  > div {
    padding: 8px;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;

    background-color: ${(props) => props.theme[ICON_COLORS[props.itemColor]]};

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  &:nth-child(3),
  &:nth-child(4) {
    margin-top: 1.25rem;
  }
`
