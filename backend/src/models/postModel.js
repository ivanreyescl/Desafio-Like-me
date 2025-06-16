import pool from '../../db/config.js'

export const getPostsModel = async () => {
  const sqlQuery = 'SELECT * FROM POSTS'
  const response = await pool.query(sqlQuery)
  console.log(response.rows)
  return response.rows
}

export const createPostModel = async (titulo, img, descripcion) => {
  const sqlQuery = {
    text: 'INSERT INTO POSTS (titulo, img, descripcion) values ($1,$2,$3) RETURNING *',
    values: [titulo, img, descripcion]
  }
  const result = await pool.query(sqlQuery)
  console.log('Post agregado', result)
  return result.rows
}

export const deletePostModel = async (id) => {
  const sqlQuery = {
    text: 'DELETE FROM POSTS WHERE id = $1 RETURNING *',
    values: [id]
  }
  const result = await pool.query(sqlQuery)
  console.log('Post eliminado', result)
  return result.rows
}

export const likePostModel = async (id) => {
  const sqlQuery = {
    text: 'UPDATE posts SET likes = COALESCE(likes, 0) + 1 WHERE id = $1 RETURNING *',
    values: [id]
  }
  const result = await pool.query(sqlQuery)
  console.log('Post eliminado', result)
  return result.rows
}