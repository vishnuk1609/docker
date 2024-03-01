const Post = require('../models/postModel');

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find()
    return res.status(200).json({
      status: 'success',
      message: 'All posts get successfully',
      count: posts.length,
      data: {
        posts
      }
    })
  } catch (error) {
    console.error(error)
    res.status(400).json({
      status: 'error',
      message: error.message
    })
  }
}

exports.getOnePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)
    return res.status(200).json({
      status: 'success',
      message: 'Post get successfully',
      data: {
        post
      }
    })
  } catch (error) {
    console.error(error)
    res.status(400).json({
      status: 'error',
      message: error.message
    })
  }
}

exports.createPost = async  (req, res, next) => {
  try {
    const post = await Post.create(req.body)
    return res.status(200).json({
      status: 'success',
      message: 'Post create successfully',
      data: {
        post
      }
    })
  } catch (error) {
    console.error(error)
    res.status(400).json({
      status: 'error',
      message: error.message
    })
  }
}

exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.status(200).json({
      status: 'success',
      message: 'Post updated successfully',
      data: {
        post
      }
    })
  } catch (error) {
    console.error(error)
    res.status(400).json({
      status: 'error',
      message: error.message
    })
  }
}

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id)
    return res.status(200).json({
      status: 'success',
      message: 'Post updated successfully',
      data: {}
    })
  } catch (error) {
    console.error(error)
    res.status(400).json({
      status: 'error',
      message: error.message
    })
  }
}