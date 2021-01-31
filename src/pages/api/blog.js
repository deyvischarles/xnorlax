const blog = async (req, res) => {
    const posts = await fetch('https://xmachine.herokuapp.com/blog')

    console.log(posts)
    
    // res.statusCode = 200

    res.json({
        posts: posts
    })
}

export default blog