import { device } from "@/utils/responsiveBreakpoints";
import styled from "styled-components";

export const PageHeaderContainer = styled.div`
  grid-column: full-start / full-end;
  grid-template-columns: inherit;
  opacity: 0.9;
  position: relative;
  width: 100%;
`;

export const PageHeaderBackground = styled.div`
  z-index: 1;
  left: 0;
  top: 0;

  .rectangle {
    width: 100%;
    height: 16vh;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    width: 100%;
  }

  @media ${device.mobile} {
    .rectangle {
      width: 100%;
      height: 25vh;
      margin-bottom: 10rem ;
      background-color: ${({ theme }) => theme.colors.primary};
    }
    svg {
      display: none;
    }
  }
`;

export const PageHeaderContent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  padding: 4rem 5rem;

  h1 {
    color: white;
  }
`;

export const PageHeaderList = styled.div`
  display: flex;

  a:not(:last-child)::after {
    content: "/";
    margin: 0 1rem;
    font-weight: bold;
  }
`;

export const PageHeaderLink = styled.a`
  &,
  &:link,
  &:visited {
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-bottom: 2px solid transparent;

    @media ${device.tabletPort} {
      font-size: 1.6rem;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryDark};
    border-bottom-color: ${({ theme }) => theme.colors.secondaryDark};
  }
`;
