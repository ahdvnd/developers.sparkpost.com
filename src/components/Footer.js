import React from 'react'
import styled from 'styled-components'
import { color, grayscale } from '../utils/colors'
import { uppercase, weight } from '../utils/fonts'
import { Container, Row, Column } from './Grid'
import Link from './Link'
import Button from './Button'

const Footer = styled.footer`
  background: ${grayscale('dark')};
  color: ${grayscale('white')};
  padding: 38px 0 62px;
`

const CopyRight = styled.div`
  background: ${grayscale('medium')};
  color: ${grayscale(8)};
  text-align: center;
  font-size: .777777778rem;
  padding: .5rem;
`

const ColumnHeader = styled.h5`
  ${props => (props.uppercase ? uppercase : '')}
  font-weight: 600;
  margin-top: 24px;
  font-size: .777777778rem;
`

const ColumnList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const MenuItem = styled((props) => (
  <li>
    <Link {...props}></Link>
  </li>
))`
  line-height: 1.5;
  font-size: 14px;
  color: inherit;
  font-weight: ${weight('normal')};
`

const SubscribeForm = styled.form`
  display: flex;
  width: 100%;
`

const EmailInput = styled.input`
  width: 100%;
  padding: 0 .5rem;
  font-size: .833333333rem;
  line-height: 1rem;
  border: none;
`

const SocialIcons = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.25rem 0 0 0;
`

const SocialIcon = styled(({ to, icon, ...props }) => (
  <li {...props}>
    <Link.Unstyled to={to} target="_blank">
      <i className={`fa fa-${icon}`}></i>
    </Link.Unstyled>
  </li>
))`
  display: inline-block;
  font-size: 1.166666667rem;
  margin-right: 1.25rem;
  color: ${grayscale(5)};

  &:hover {
    color: ${grayscale('white')};
  }
`

export default () => (
  <React.Fragment>
    <Footer>
      <Container>
        <Row>
          <Column md="2">
            <ColumnHeader uppercase>About</ColumnHeader>
            <ColumnList>
              <MenuItem to="https://www.sparkpost.com/about-us/">About Us</MenuItem>
              <MenuItem to="https://www.sparkpost.com/careers/">Careers</MenuItem>
              <MenuItem to="https://www.sparkpost.com/partners/">Partners</MenuItem>
              <MenuItem to="https://www.sparkpost.com/blog/">Blog</MenuItem>
              <MenuItem to="https://www.sparkpost.com/policies/tou/">Policies</MenuItem>
              <MenuItem to="https://www.sparkpost.com/press-releases/">Press</MenuItem>
            </ColumnList>
          </Column>
          <Column md="2">
            <ColumnHeader uppercase>Support</ColumnHeader>
            <ColumnList>
              <MenuItem to="https://www.sparkpost.com/docs/">Help &amp; Docs</MenuItem>
              <MenuItem to="https://www.sparkpost.com/report-abuse/">Report Abuse</MenuItem>
            </ColumnList>
          </Column>
          <Column md="2">
            <ColumnHeader uppercase>Solutions</ColumnHeader>
            <ColumnList>
              <MenuItem to="https://www.sparkpost.com/enterprise-email/">Enterprise</MenuItem>
              <MenuItem to="https://www.sparkpost.com/e-commerce/">E-Commerce</MenuItem>
              <MenuItem to="https://www.sparkpost.com/service-providers/">Service Providers</MenuItem>
              <MenuItem to="https://www.sparkpost.com/digital-publishing/">Digital Publishing</MenuItem>
            </ColumnList>
          </Column>
          <Column md="5" mdOffset="1">
            <ColumnHeader>Subscribe to our newsletter</ColumnHeader>
            <div>
              <SubscribeForm>
                <EmailInput type="text" placeholder="Subscribe" />
                <Button primary>Submit</Button>
              </SubscribeForm>
            </div>
            <SocialIcons>
              <SocialIcon to="https://www.facebook.com/sparkpost/" icon="facebook-square" />
              <SocialIcon to="https://twitter.com/SparkPost" icon="twitter" />
              <SocialIcon to="https://www.linkedin.com/company/sparkpost" icon="linkedin-square" />
              <SocialIcon to="https://www.youtube.com/channel/UC5vz6wEfpJjGipY_alrYuhQ" icon="youtube" />
              <SocialIcon to="http://www.slideshare.net/SparkPost" icon="slideshare" />
              <SocialIcon to="http://slack.sparkpost.com/" icon="slack" />
              <SocialIcon to="https://github.com/SparkPost" icon="github" />
            </SocialIcons>
          </Column>
        </Row>
      </Container>
    </Footer>
    <CopyRight>SparkPost © {new Date().getFullYear()} All Rights Reserved</CopyRight>
  </React.Fragment>
)
