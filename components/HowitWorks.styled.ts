import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HowSection = styled.section`
  background-color: #f9f8f6;
  box-sizing: border-box;
  padding: 3rem 0;

  @media only screen and (min-width: 48rem) and (max-width: 60rem) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 48rem) {
    padding: 6rem 0;
  }
`;

export const HowDiv = styled.div`
  max-width: 66rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 48rem) {
    max-width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 60rem) {
    max-width: calc(60rem + 2 * 3rem);
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  line-height: 1.313;
  color: #2c2c2c;

  @media (min-width: 48rem) {
    font-size: 2rem;
  }
`;

export const HowOl = styled.ol`
  display: flex;
  gap: 1.5rem;
  justify-content: space-around;
  flex-direction: column;
  margin-top: 3rem;

  p {
    margin-left: 2.1rem;
  }

  @media (min-width: 48rem) {
    flex-direction: row;
  }
`;

export const HowLi = styled.li`
  width: 100%;
  list-style: none;

  @media (min-width: 48rem) {
    width: 33.33%;
  }
`;

export const CountDiv = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const NumIcon = styled(FontAwesomeIcon)`
  color: #e5cb4e;
  font-size: 1.5rem;
`;

export const LiTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  margin-left: 1.25rem;
  color: #2c2c2c;

  @media (min-width: 60rem) {
    font-size: 1.5rem;
  }
`;

export const LiP = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: #2c2c2c;
  font-size: 1rem;

  @media (min-width: 48rem) {
    margin-left: 2.3rem;
    margin-top: 1rem;
  }
`;
