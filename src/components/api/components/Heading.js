import React from 'react'
import styled from 'styled-components'
import { isString } from 'lodash'
import Link from 'components/Link'
import slugify from 'utils/api/slugify'

const Id = styled.span`
  display: block;
  margin-top: -4rem;
  height: 4rem;
  visibility: hidden;
  position: absolute;
`

const Heading = ({ level = 3, id, className, children, ...props }) => {
  const Tag = `h${level}`

  const slug =
    id ||
    slugify.markdown({
      heading: stringifyChildren(children),
    })

  return (
    <Tag className={`${className} block`} {...props}>
      <Id id={slug} />
      <Link.Unstyled to={`#${slug}`}>{children}</Link.Unstyled>
    </Tag>
  )
}

function stringifyChildren(children) {
  return children
    .map(child => {
      return isString(child) ? child : stringifyChildren(child.props.children)
    })
    .join('')
}

export default styled(Heading)``