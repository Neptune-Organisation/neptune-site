const BlogPreview = (props) => {
    return(
        <div className="blog-preview">
            <a href="" className="blog-preview__anchor">
                <h3 className="blog-preview__title">{props.title}</h3>
                <p>{props.body.slice(1, 10)}</p>
                <p>{props.date}</p>
            </a>
        </div>
    )
}

export default BlogPreview