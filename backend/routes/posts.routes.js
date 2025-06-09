import { Router } from 'express'

import { createPost, getAllPosts } from '../src/controllers/postsController.js'

const router = Router()

router.get('/posts', getAllPosts)
router.post('/post', createPost)

export default router
