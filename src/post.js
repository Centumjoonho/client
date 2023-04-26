export default function Post() {
    return (
        <div className="post">

            <div className="image">
                <img src="https://techcrunch.com/wp-content/uploads/2023/03/chatgpt-getty.jpg?w=1390&crop=1" alt="" />
            </div>

            <div className="texts">
                <h2>OpenAI previews business plan for ChatGPT, launches new privacy controls</h2>
                <p className="info">
                    <a className="author">Lee</a>
                    <time>2023-04-26 16:45</time>
                </p>
                <p className="summary">OpenAI says that it plans to introduce a new subscription tier for ChatGPT, its viral AI-powered chatbot, tailored to the needs of enterprise customers.

                    Called ChatGPT Business, OpenAI describes the forthcoming offering as “for professionals who need more control over their data as well as enterprises seeking to manage their end users.”

                    “ChatGPT Business will follow our API’s data usage policies, which means that end users’ data won’t be used to train our models by default,” OpenAI wrote in a blog post published today. “We plan to make ChatGPT Business available in the coming months.”</p>
            </div>

        </div>
    );

}