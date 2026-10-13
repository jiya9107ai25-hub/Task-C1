import { useState } from 'react'
import QuestionForm from '../components/QuestionForm.jsx'
import ArticleForm from '../components/ArticleForm.jsx'

function Post() {

    const [postType, setPostType] = useState('question')

    return (
        <main className="min-h-screen bg-white py-10 px-6">

            <div className="max-w-5xl mx-auto">

                {/* New Post Heading */}
                <div className="bg-gray-200 px-4 py-3 mb-5">
                    <h1 className="text-2xl font-bold">
                        New Post
                    </h1>
                </div>

                {/* Post Type Selection */}
                <div className="flex items-center gap-8 mb-8">

                    <span className="font-medium">
                        Select Post Type:
                    </span>

                    <label className="flex items-center gap-2 cursor-pointer">

                        <input
                            type="radio"
                            name="postType"
                            value="question"
                            checked={postType === 'question'}
                            onChange={() => setPostType('question')}
                        />

                        Question

                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">

                        <input
                            type="radio"
                            name="postType"
                            value="article"
                            checked={postType === 'article'}
                            onChange={() => setPostType('article')}
                        />

                        Article

                    </label>

                </div>

                {/* Section Heading */}
                <div className="bg-gray-200 px-4 py-3 mb-5">

                    <h2 className="text-xl font-bold">
                        What do you want to ask or share
                    </h2>

                </div>

                {/* Conditional Information */}
                <p className="text-center text-gray-600 mb-8">

                    This section changes depending on the type of post selected.

                    <span className="text-red-500 ml-2">

                        {postType === 'question'
                            ? 'For a question, the question form is displayed.'
                            : 'For an article, the article form is displayed.'}

                    </span>

                </p>

                {/* CONDITIONAL RENDERING */}
                {postType === 'question'
                    ? <QuestionForm />
                    : <ArticleForm />
                }

            </div>

        </main>
    )
}

export default Post