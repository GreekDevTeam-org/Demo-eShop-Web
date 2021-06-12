import React, { useState, useRef } from 'react'
import { Card, Button, Alert, Form } from "react-bootstrap"
import { useAuth } from '../../contexts/AuthContext'
import { history, useHistory } from "react-router-dom"

export default function UserProfile() {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory() 
    const nameRef = useRef()
    const snameRef = useRef()
    const adressRef = useRef()
    const emailRef = useRef()
    const countryRef = useRef()
    const cityRef = useRef()
    const regeonRef = useRef()
    const phoneRef = useRef()
    
    async function Logout() {
        setError('')

        try{
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email:</strong>{currentUser?.email}
                </Card.Body>    
            </Card>    
            <div>
               
            <Form >   
                <Form.Group id="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" ref={nameRef} required></Form.Control>
                </Form.Group>
                <Form.Group id="Second Name">
                    <Form.Label>Second Name</Form.Label> 
                    <Form.Control type="second name" ref={snameRef} required></Form.Control>            
                </Form.Group>
                <Form.Group id="Adress">
                    <Form.Label>Adress</Form.Label>
                    <Form.Control type="adress" ref={adressRef} required></Form.Control>             
                </Form.Group>
                <Form.Group id="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required></Form.Control>             
                </Form.Group>
                <Form.Group id="Country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="country" ref={countryRef} required></Form.Control>             
                </Form.Group>
                <Form.Group id="City">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="city" ref={cityRef} required></Form.Control>             
                </Form.Group>
                <Form.Group id="Regeon/State">
                    <Form.Label>Regeon/State</Form.Label>
                    <Form.Control type="regeon" ref={regeonRef} required></Form.Control>             
                </Form.Group>
                <Form.Group id="Telephone">
                    <Form.Label>Telephone</Form.Label>
                    <Form.Control type="phone" ref={phoneRef} required></Form.Control>             
                </Form.Group>
            </Form>
            <Button  onClick={Logout}>
                    Log Out
            </Button>  
               
            </div>
        </>
    )
}
