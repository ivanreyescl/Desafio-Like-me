import { getPostsModel, createPostModel, deletePostModel, likePostModel } from '../models/postModel.js'

export const getAllPosts = async (req, res) => {
  try {
    const posts = await getPostsModel() 
    res.json({ posts })
  } catch (error) {
    res.json({ error: 'Error al procesar la solicitud' })
  }
}

export const createPost = async (req, res) => {
  try {
    const { titulo, img, descripcion } = req.body
    const newPost = await createPostModel(titulo, img, descripcion)// llamado al modelo
    res.json({ post: newPost })
  } catch (error) {
    res.json({ error: 'Error al procesar la solicitud' })
    console.error('Error =>', error)
  }
}

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await deletePostModel(id)
    if (deleted) {
      res.json({ message: 'Post eliminado correctamente' })
    } else {
      res.status(404).json({ error: 'Post no encontrado' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al procesar la solicitud' })
    console.error('Error =>', error)
  }
}

export const likePost = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await likePostModel(id)
    if (deleted) {
      res.json({ message: 'Post actualizado correctamente' })
    } else {
      res.status(404).json({ error: 'Post no encontrado' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al procesar la solicitud' })
    console.error('Error =>', error)
  }
}
