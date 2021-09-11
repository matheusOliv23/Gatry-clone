import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import UIContainer from '../../UI/Container/Container'
import './Form.css'
import useApi from '../../utils/useApi'

const initialValue = {
  title: '',
  url: '',
  imageUrl: '',
  price: 0
}

const PromotionForm = ({ id }) => {
  const [values, setValues] = useState(id ? null : initialValue)
  const history = useHistory()
  const [load] = useApi({
    url: `/promotions/${id}`,
    method: 'get',
    onCompleted: response => {
      setValues(response.data)
    }
  })

  const [save, saveInfo] = useApi({
    url: id ? `/promotions/${id}` : '/promotions',
    method: id ? 'put' : 'post',
    onCompleted: response => {
      if (!response.error) {
        history.push('/')
      }
    }
  })

  useEffect(() => {
    if (id) {
      load()
    }
  }, [id])

  function onChange(event) {
    const { name, value } = event.target

    setValues({ ...values, [name]: value })
  }

  function onSubmit(event) {
    event.preventDefault()
    save({
      data: values
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
        {saveInfo.loading && <span>Salvando dados</span>}
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
