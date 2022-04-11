import BlogPreview from "../components/BlogPreview"

const Blog = () => {

    const blogData = [
        {
            title : "first title",
            body : "11111111111111111111111111111111111111",
            date : "01/04/2022"
        },
        {
            title : "second title",
            body : "22222222222222222222222222222222222222",
            date : "08/04/2022"
        },
        {
            title : "third title",
            body : "333333333333333333333333333333",
            date : "01/04/2022"
        }
    ]

    return(
        <div className="blog">
            {blogData && blogData.map((entry) => 
                <BlogPreview title = {entry.title} body = {entry.body} date = {entry.date}  />
    )}
        </div>
    )
}

export default Blog