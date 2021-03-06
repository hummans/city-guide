import React from 'react'
import {InfoConsumer} from './context'
import ReviewCard from './ReviewCard'

class Reviews extends React.Component{
    render() {
        return (
            <InfoConsumer>
                {data => {
                    return data.reviews.map(person => {
                        return <ReviewCard key={person.id}
                        person={person}></ReviewCard>
                    })
                }}
            </InfoConsumer>
        )
    }
}

export default Reviews