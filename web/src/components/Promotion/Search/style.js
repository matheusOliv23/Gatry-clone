import styled from 'styled-components'

export const Container = styled.div``

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    text-transform: uppercase;
    color: #888;
  }
`

export const Input = styled.section`
  display: flex;
  height: 3rem;

  margin-bottom: 2rem;

  input {
    width: 100%;
    padding: 0 0.5rem;
    font-size: 1rem;
    border: 1px solid blue;
    border-radius: 0.5rem;
    outline: none;
  }
`
