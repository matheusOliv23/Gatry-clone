import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PromotionCard from '../Card/Card'
import GlobalStyle from '../../../styles/global'
import { Container, Header, Input } from './style'

const PromotionSearch = () => {
  const [promotions, setPromotions] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:5000/promotions?_embed=comments')
      .then(response => {
        setPromotions(response.data)
      })
  }, [])

  return (
    <Container>
      <Header>
        <h1>Promoções</h1>
        <Link to="/create">Nova Promoção</Link>
      </Header>
      <Input>
        <input type="search" placeholder="Buscar produto" />
      </Input>
      {promotions.map(promotion => (
        <PromotionCard promotion={promotion} />
      ))}
      <GlobalStyle />
    </Container>
  )
}

export default PromotionSearch
