import { useState } from 'react'

function ArticleForm() {
    const [title, setTitle] = useState('')
    const [abstract, setAbstract] = useState('')
    const [articleText, setArticleText] = useState('')
    const [tags, setTags] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        setError('')

        const cleanTitle = title.trim()
        const cleanAbstract = abstract.trim()
        const cleanArticleText = articleText.trim()

        const tagList = tags
            .split(',')
            .map((tag) => tag.trim())
            .filter((tag) => tag !== '')

        if (
            !cleanTitle ||
            !cleanAbstract ||
            !cleanArticleText ||
            tagList.length === 0
        ) {
            setError('Please complete all fields before posting.')
            return
        }

        if (cleanTitle.length < 10) {
            setError('Please enter a more descriptive article title.')
            return
        }

        if (cleanAbstract.length < 20) {
            setError('Please provide a more detailed abstract.')
            return
        }

        if (cleanArticleText.length < 30) {
            setError('Please provide more content for your article.')
            return
        }

        if (tagList.length > 3) {
            setError('Please enter a maximum of 3 tags.')
            return
        }

        alert('Your article has been sent successfully!')

        setTitle('')
        setAbstract('')
        setArticleText('')
        setTags('')
    }

    return (
        <form onSubmit={handleSubmit}>

            {/* Title */}
            <div className="flex items-center gap-4 mb-6">

                <label
                    htmlFor="articleTitle"
                    className="font-medium w-24"
                >
                    Title
                </label>

                <input
                    id="articleTitle"
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Enter a descriptive title"
                    className="flex-1 border border-gray-400 px-4 py-3"
                />

            </div>

            {/* Abstract */}
            <div className="mb-6">

                <label
                    htmlFor="articleAbstract"
                    className="block font-medium mb-2"
                >
                    Abstract
                </label>

                <textarea
                    id="articleAbstract"
                    value={abstract}
                    onChange={(event) => setAbstract(event.target.value)}
                    placeholder="Enter a 1-paragraph abstract"
                    rows="4"
                    className="w-full border border-gray-400 px-4 py-3 resize-y"
                />

            </div>

            {/* Article Text */}
            <div className="mb-6">

                <label
                    htmlFor="articleText"
                    className="block font-medium mb-2"
                >
                    Article Text
                </label>

                <textarea
                    id="articleText"
                    value={articleText}
                    onChange={(event) => setArticleText(event.target.value)}
                    placeholder="Enter your article text"
                    rows="12"
                    className="w-full border border-gray-400 px-4 py-3 resize-y"
                />

            </div>

            {/* Tags */}
            <div className="flex items-center gap-4 mb-6">

                <label
                    htmlFor="articleTags"
                    className="font-medium"
                >
                    Tags
                </label>

                <input
                    id="articleTags"
                    type="text"
                    value={tags}
                    onChange={(event) => setTags(event.target.value)}
                    placeholder="Please add up to 3 tags to describe what your article is about e.g., Java, React"
                    className="flex-1 border border-gray-400 px-4 py-3"
                />

            </div>

            {/* Error Message */}
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

export default ArticleForm