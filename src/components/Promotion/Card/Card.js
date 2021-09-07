import React from 'react'
import { 
    PromoCard, 
    PromoFooter, 
    PromoImg, 
    PromoTitle, 
    PromoPrice, 
    PromoComment,
    PromoCommentCount,
    PromoLink,
    PromoInfo
} from './style'


const PromotionCard = ({promotion}) => (
    <PromoCard>
        <PromoImg src={promotion.imageUrl} alt="imagem do computador"/>
        <PromoInfo>
            <PromoTitle >{promotion.title}</PromoTitle>
            <PromoPrice>R$ {promotion.price}</PromoPrice>
            <PromoFooter>
                {promotion.comments.length > 0 && (
                    <PromoComment>"{promotion.comments[0].comment}"</PromoComment>
                )}

                <PromoCommentCount>{promotion.comments.length} Comentário{promotion.comments.length > 1 ? 's' : ''}</PromoCommentCount>
                <PromoLink href={promotion.url} target="_blank" rel="noreferrer"> Ir para o site </PromoLink>
            </PromoFooter>
        </PromoInfo>
    </PromoCard>
    
    
    )
    


export default PromotionCard