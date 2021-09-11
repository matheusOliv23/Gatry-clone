import React from 'react'
import PromotionCard from '../Card/Card'
import UIModal from '../../UI/Modal/Modal'
import './List.css'

const PromotionList = ({ loading, promotions, error }) => {
  if (error) {
    return <div>Algo deu errado!</div>
  }

  if (loading || promotions === null) {
    return <div>Carregando...</div>
  }

  if (promotions.length === 0) {
    return <div>Nenhum resultado encontrado</div>
  }

  return (
    <div className="promotion-list">
      {promotions.map(promotion => (
        <PromotionCard promotion={promotion} />
      ))}
      <UIModal isOpen>
        <h1>Comentários</h1>
      </UIModal>
    </div>
  )
}

export default PromotionList
