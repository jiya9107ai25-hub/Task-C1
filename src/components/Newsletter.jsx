import { useState } from 'react'

function Newsletter() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        setMessage('Frontend preview only — no email has been sent.')
        setEmail('')
    }

    return (
        <section id="subscribe" className="bg-gray-200 py-8 px-6">

            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col md:flex-row items-center justify-between gap-5">

                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                        SIGN UP FOR OUR DAILY INSIDER
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            aria-label="Email address"
                            required
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="bg-white border border-gray-300 rounded-lg px-4 py-3 w-full sm:w-72"
                        />

                        <button
                            type="submit"
                            className="bg-gray-800 text-white rounded-lg px-6 py-3 hover:bg-gray-700"
                        >
                            Subscribe
                        </button>
                    </form>

                </div>

                {message && (
                    <p className="text-sm text-gray-700 mt-3 text-right">
                        {message}
                    </p>
                )}

            </div>

        </section>
    )
}

export default Newsletter