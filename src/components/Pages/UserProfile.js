import React, { useState } from 'react'
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from '../../contexts/AuthContext'
import { history, Link, useHistory } from "react-router-dom"

export default function UserProfile() {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory() 

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
                <Button variant="link" onClick={Logout}>
                    Log Out
                </Button>
            </div>
        </>
    )
}
