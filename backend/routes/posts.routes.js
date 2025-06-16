import { Router } from 'express'

import { createPost, getAllPosts, deletePost, likePost } from '../src/controllers/postsController.js'

const router = Router()

router.get('/posts', getAllPosts)
router.post('/post', createPost)
router.put('/posts/like/:id', likePost)
router.delete('/posts/:id', deletePost)


export default router
