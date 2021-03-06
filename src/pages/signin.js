import React, { useState } from 'react'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'


export default function Signin() {

    const [emailAddress, setEmailAddress] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState('')

    // check form input elements are valid
    // email and password

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    <Form.Input/>
                    <Form.Input/>
                    <Form.Button></Form.Button>
                    <Form.Link></Form.Link>
                    <Form.Text></Form.Text>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}