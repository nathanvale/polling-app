import { Link } from 'gatsby'
import styled from 'styled-components'
import React from 'react'

interface Props {
  background: string
  title: string
}
const HeaderContainer = styled.header<Props>`
  ${props => props.background};
  margin-bottom: 1.45rem;
`

const HeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Heading1 = styled.h1`
  margin: 0;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const BACKGROUND = 'background-color: #20232a'

const Header: React.SFC<Props> = ({ background, title }): JSX.Element => (
  <HeaderContainer background={background}>
    <HeaderWrapper>
      <Heading1>
        <StyledLink to="/">{title}</StyledLink>
      </Heading1>
    </HeaderWrapper>
  </HeaderContainer>
)

export default Header
