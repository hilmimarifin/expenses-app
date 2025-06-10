import ThemeContainer from '@/components/container/theme-container'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const ProtectedLayout = (props: Props) => {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <ThemeContainer>
        {props.children}
      </ThemeContainer>
    </main>
  )
}

export default ProtectedLayout