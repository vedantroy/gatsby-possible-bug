/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import { Location } from '@reach/router'
import { navigate } from 'gatsby'
import React from 'react'

const App = ({element}) => {
    console.log('rendering....')
    navigate('/')
    return <div>Hello World!</div>
}

const wrapRootElement = ({element}) => (
    <Location>
        {location => <App {...element} />}
    </Location>
)

export { wrapRootElement }