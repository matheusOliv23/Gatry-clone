import React from 'react'

const PromotionCard = ({promotion}) => (
    <div>
        <img src={promotion.imageUrl} alt="imagem do computador" />
        <div>
            <h1>{promotion.title}</h1>
            <span>R$ {promotion.price}</span>
            <footer>
                {promotion.comments.length > 0 && (
                    <div>"{promotion.comments[0].comment}"</div>
                )}

                <div>{promotion.comments.length} Comentários</div>
                <a href={promotion.url} target="_blank" rel="noreferrer"> Ir para o site </a>
            </footer>
        </div>
    </div>)


export default PromotionCard