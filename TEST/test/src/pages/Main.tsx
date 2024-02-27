import React from 'react'
import { ScrollAnimationContainer } from '../components/ScrollAnimationContainer'
import { Container } from '../styles/animation'

type Props = {}

const Main = (props: Props) => {
  return (
    <div>

      <ScrollAnimationContainer>
        <h1>조수훈</h1>
      </ScrollAnimationContainer>

      <ScrollAnimationContainer>
        <h1>이승현</h1>
      </ScrollAnimationContainer>

      <ScrollAnimationContainer>
        <h1>훈수조</h1>
      </ScrollAnimationContainer>

      <ScrollAnimationContainer>
        <h1>현승이</h1>
      </ScrollAnimationContainer>

    </div>
  )
}

export default Main