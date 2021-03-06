import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import EventsTable from './EventsTable'

function MessageEvents({ id, title, sample }) {
  return (
    <StaticQuery
      query={graphql`
        query MessageEventsQuery {
          allMessageEvent {
            edges {
              node {
                name
                description
                attributes
                sample
              }
            }
          }
        }
      `}
      render={data => {
        const events = data.allMessageEvent.edges
          .map(({ node }) => node)
          .filter(({ name }) => !name.includes('sms'))

        return <EventsTable events={events} />
      }}
    />
  )
}

export default MessageEvents
