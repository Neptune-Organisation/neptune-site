import { PageTitle } from "neptunes-components"
export const BlogEntry = (props) => {
    return (
        <div className="blog-entry">
            <PageTitle pageTitle = "Blog Title" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quasi. Ea ab dolorum nemo distinctio omnis nulla ad, excepturi, alias corporis unde reprehenderit optio consequuntur magnam adipisci quos nostrum eaque sit cumque neque animi inventore nisi praesentium? Commodi asperiores, molestiae placeat, ab sequi consequuntur odio officiis nesciunt magnam consequatur dolor.</p>
            <p>04/04/2022</p>
            {/* <h1>{props.title}</h1>
            <p>{props.body}</p>
            <p>{props.date}</p> */}
        </div>
    )
}
