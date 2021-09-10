import React from 'react'
import UIContainer from '../../UI/Container/Container'
import './Form.css'

const PromotionForm = () => {
  return (
    <UIContainer>
      <h1>Mostrar promoções</h1>
      <h2>Nova promoção</h2>

      <form>
        <div className="promotion-form__group">
          <label htmlFor="title">Título</label>
          <input id="title" name="title" type="text" />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="url">Link</label>
          <input id="url" name="title" type="url" />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="imageUrl">Imagem (URL)</label>
          <input id="imageUrl" name="imageUrl" type="text" />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="price">Preço</label>
          <input id="price" name="price" type="number" />
        </div>
        <div>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </UIContainer>
  )
}

export default PromotionForm
