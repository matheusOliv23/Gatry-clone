import React from 'react'
import PromotionCard from '../Card/Card'
import './List.css'

const PromotionList = ({ loading, promotions }) => {
  if (loading) {
    return <div>Carregando...</div>
  }

  return (
    <div>
      {promotions.map(promotion => (
        <PromotionCard promotion={promotion} />
      ))}
    </div>
  )
}

export default PromotionList
