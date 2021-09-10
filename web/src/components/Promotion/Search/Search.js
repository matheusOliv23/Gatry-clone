import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PromotionList from '../List/List'
import GlobalStyle from '../../../styles/global'
import { Container, Header, Input } from './style'

const PromotionSearch = () => {
  const [promotions, setPromotions] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const params = {}
    if (search) {
      params.title_like = search
    }
    axios
      .get(
        'http://localhost:5000/promotions?_embed=comments&_order=desc&_sort=id',
        {
          params
        }
      )
      .then(response => {
        setPromotions(response.data)
      })
  }, [search])

  return (
    <Container>
      <Header>
        <h1>Promoções</h1>
        <Link to="/create">Nova Promoção</Link>
      </Header>
      <Input>
        <input
          type="search"
          placeholder="Buscar produto"
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
      </Input>

      <PromotionList promotions={promotions} loading={!promotions.length} />
      <GlobalStyle />
    </Container>
  )
}

export default PromotionSearch
