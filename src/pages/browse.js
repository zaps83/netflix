import React from 'react'
import { BrowseContainer } from '../containers/browse'
import { useContent } from '../hooks'
import selectionFilter from '../utils/selection-filter'
import { Profiles } from '../components'

export default function Browse() {
    // we need the series and the films
    // we need slides
    // pass it to the browse container
    const { series } = useContent('series')
    const { films } = useContent('films')
    const slides = selectionFilter({ series, films})

    return (
        
    <BrowseContainer slides={slides} />
       
    )
}