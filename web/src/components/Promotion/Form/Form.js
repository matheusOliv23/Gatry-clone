import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import UIContainer from '../../UI/Container/Container'
import axios from 'axios'
import './Form.css'

const initialValue = {
  title: '',
  url: '',
  imageUrl: '',
  price: 0
}

const PromotionForm = ({ id }) => {
  const [values, setValues] = useState(id ? null : initialValue)
  const history = useHistory()

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/promotions/${id}`).then(
        response => {
          setValues(response.data)
        },
        [id]
      )
    }
  })

  function onChange(event) {
    const { name, value } = event.target

    setValues({ ...values, [name]: value })
  }

  function onSubmit(event) {
    event.preventDefault()

    const method = id ? 'put' : 'post'
    const url = id
      ? `http://localhost:5000/promotions/${id}`
      : 'http://localhost:5000/promotions'

    axios[method](url, values).then(response => {
      history.push('/')
    })
  }

  if (!values) {
    return <div>Carregando...</div>
  }

  return (
    <UIContainer>
      <h1>Mostrar promoções</h1>
      <h2>Nova promoção</h2>

      <form onSubmit={onSubmit}>
        <div className="promotion-form__group">
          <label htmlFor="title">Título</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={onChange}
            value={values.title}
          />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="url">Link</label>
          <input
            id="url"
            name="url"
            type="url"
            onChange={onChange}
            value={values.url}
          />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="imageUrl">Imagem (URL)</label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="text"
            onChange={onChange}
            value={values.imageUrl}
          />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="price">Preço</label>
          <input
            id="price"
            name="price"
            type="number"
            onChange={onChange}
            value={values.price}
          />
        </div>
        <div>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </UIContainer>
  )
}

export default PromotionForm
