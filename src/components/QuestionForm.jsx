import { useState } from 'react'

function QuestionForm() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [tags, setTags] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        setError('')

        const cleanTitle = title.trim()
        const cleanDescription = description.trim()

        const tagList = tags
            .split(',')
            .map((tag) => tag.trim())
            .filter((tag) => tag !== '')

        if (!cleanTitle || !cleanDescription || tagList.length === 0) {
            setError('Please complete all fields before posting.')
            return
        }

        if (cleanTitle.length < 10) {
            setError('Please enter a more descriptive question title.')
            return
        }

        if (cleanDescription.length < 20) {
            setError('Please provide more detail about your problem.')
            return
        }

        if (tagList.length > 3) {
            setError('Please enter a maximum of 3 tags.')
            return
        }

        alert('Your question has been sent successfully!')

        setTitle('')
        setDescription('')
        setTags('')
    }

    return (
        <form onSubmit={handleSubmit}>

            {/* Title */}
            <div className="mb-6">

                <div className="flex items-center gap-4">

                    <label
                        htmlFor="questionTitle"
                        className="font-medium w-24"
                    >
                        Title
                    </label>

                    <input
                        id="questionTitle"
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="Start your question with how, what, why, etc."
                        className="flex-1 border border-gray-400 px-4 py-3"
                    />

                </div>

            </div>

            {/* Problem Description */}
            <div className="mb-6">

                <label
                    htmlFor="questionDescription"
                    className="block font-medium mb-2"
                >
                    Describe your problem
                </label>

                <textarea
                    id="questionDescription"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    rows="12"
                    className="w-full border border-gray-400 px-4 py-3 resize-y"
                />

            </div>

            {/* Tags */}
            <div className="flex items-center gap-4 mb-6">

                <label
                    htmlFor="questionTags"
                    className="font-medium"
                >
                    Tags
                </label>

                <input
                    id="questionTags"
                    type="text"
                    value={tags}
                    onChange={(event) => setTags(event.target.value)}
                    placeholder="Please add up to 3 tags to describe what your question is about e.g., Java, React"
                    className="flex-1 border border-gray-400 px-4 py-3"
                />

            </div>

            {/* Error */}
            {error && (
                <p className="text-red-600 text-center mb-5">
                    {error}
                </p>
            )}

            {/* Post Button */}
            <div className="flex justify-end">

                <button
                    type="submit"
                    className="bg-gray-400 hover:bg-gray-500 text-black px-16 py-3 text-lg"
                >
                    Post
                </button>

            </div>

        </form>
    )
}

export default QuestionForm