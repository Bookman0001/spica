import React from 'react'
import { GlobalStyle } from 'common_style'

export default function BasicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}
