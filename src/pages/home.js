import React from 'react'
import { HeaderContainer } from '../containers/header'
import { JumbotronContainer } from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer'
import { FaqsContainer } from '../containers/faqs'
import { OptForm } from '../components'
import { Feature } from '../components'

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV shows, and more.</Feature.Title>
                    <Feature.SubTitle>Watch Anywhere. Cancel at any time.  </Feature.SubTitle>
                    <OptForm>
                        <OptForm.Text>
                            Ready to watch? Enter your email to create or restart your membership.
                        </OptForm.Text>
                        <OptForm.Break />
                        <OptForm.Input placeholder='Email address' />
                        <OptForm.Button>Get Started</OptForm.Button>
                    </OptForm>
                </Feature>
            </HeaderContainer>
                <JumbotronContainer />
                <FaqsContainer />
                <FooterContainer />
            
        </>
    )
}


