import React, { useEffect, useState } from 'react'
import useApi from '../../utils/useApi'
import { Link } from 'react-router-dom'
import PromotionList from '../List/List'
import GlobalStyle from '../../../styles/global'
import { Container, Header, Input } from './style'

const PromotionSearch = () => {
  const [search, setSearch] = useState('')
  const [load, loadInfo] = useApi({
    url: '/promotions',
    method: 'get',
    params: {
      _embed: 'comments',
      _order: 'desc',
      _sort: 'id',
      title_like: search || undefined
    }
  })

  useEffect(() => {
    load()
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

      <PromotionList
        promotions={loadInfo.data}
        loading={loadInfo.loading}
        error={loadInfo.error}
      />
      <GlobalStyle />
    </Container>
  )
}

export default PromotionSearch
