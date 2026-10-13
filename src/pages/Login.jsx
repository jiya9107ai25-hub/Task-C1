import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    collection,
    getDocs,
    query,
    where,
    limit
} from 'firebase/firestore'
import bcrypt from 'bcryptjs'
import { db } from '../firebase.js'

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const handleLogin = async (event) => {

        event.preventDefault()
        setMessage('')

        const cleanEmail = email.trim().toLowerCase()

        if (!cleanEmail || !password) {
            setMessage('Please enter your email and password.')
            return
        }

        try {

            setLoading(true)

            const usersReference = collection(db, 'users')

            const userQuery = query(
                usersReference,
                where('email', '==', cleanEmail),
                limit(1)
            )

            const result = await getDocs(userQuery)

            if (result.empty) {
                setMessage(
                    'Incorrect email or password. Please try again or sign up for a free account.'
                )
                return
            }

            const userDocument = result.docs[0]
            const userData = userDocument.data()

            const passwordIsCorrect = await bcrypt.compare(
                password,
                userData.password
            )

            if (!passwordIsCorrect) {
                setMessage(
                    'Incorrect email or password. Please try again or sign up for a free account.'
                )
                return
            }

            navigate('/')

        } catch (error) {

            console.error('Login error:', error)

            setMessage(
                'Unable to login at the moment. Please try again.'
            )

        } finally {

            setLoading(false)

        }
    }

    return (
        <main className="min-h-[80vh] flex items-center justify-center px-6">

            <div className="w-full max-w-md border border-blue-400 p-10">

                <div className="flex justify-end mb-6">

                    <Link
                        to="/signup"
                        className="border border-blue-400 px-4 py-2 text-blue-600 hover:bg-blue-50"
                    >
                        Sign up
                    </Link>

                </div>

                <form onSubmit={handleLogin}>

                    <div className="mb-6">

                        <label
                            htmlFor="email"
                            className="block font-medium mb-2"
                        >
                            Your email
                        </label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            required
                            className="w-full border border-gray-300 px-4 py-3"
                        />

                    </div>

                    <div className="mb-8">

                        <label
                            htmlFor="password"
                            className="block font-medium mb-2"
                        >
                            Your password
                        </label>

                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            required
                            className="w-full border border-gray-300 px-4 py-3"
                        />

                    </div>

                    {message && (
                        <p className="text-red-600 text-center mb-5">
                            {message}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white py-3"
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>

                </form>

                <div className="text-center mt-6">

                    <Link
                        to="/signup"
                        className="text-blue-600 hover:underline"
                    >
                        Don't have an account? Sign up
                    </Link>

                </div>

            </div>

        </main>
    )
}

export default Login