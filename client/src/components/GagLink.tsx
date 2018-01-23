import * as React from 'react'
import { Image } from 'semantic-ui-react'
const gagImage = require('../media/9gag.png')

interface Props {
  gagId: string
}

const GagLink = ({ gagId }: Props) => {
  return (
    <a target='_blank' href={`https://9gag.com/gag/${gagId}`}>
      <Image size={'mini'} src={gagImage}/>
    </a>
  )
}

export default GagLink
