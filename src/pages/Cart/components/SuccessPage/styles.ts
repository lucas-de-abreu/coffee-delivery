import styled from 'styled-components'

export const SuccessContainer = styled.div`
  diplay: flex;
  gap: 6.375rem;

  width: 100%;
  max-width: 70rem;
  margin: 2rem auto;

  > div.infoContainer {
    display: flex;
    gap: 6.375rem;
    margin-top: 2.5rem;
  }
`

export const TitleContainer = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const DeliveryInfo = styled.div`
  width: 32.875rem;
  height: fit-content;

  position: relative;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 0.375rem 2.25rem;
    padding: 0.125rem;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme['yellow-dark']},
      ${(props) => props.theme.purple}
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

export const Data = styled.div`
  display: flex;
  gap: 0.75rem;

  > div {
    > span {
      line-height: 1.25rem;
    }
  }
`

const ICON_BG_COLORS = {
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
  purple: 'purple',
} as const

interface IconContainerProps {
  iconBgColor: keyof typeof ICON_BG_COLORS
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  background-color: ${(props) =>
    props.theme[ICON_BG_COLORS[props.iconBgColor]]};

  svg {
    color: ${(props) => props.theme.white};
  }
`
