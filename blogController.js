let blogs = []; // Geçici veri

// Tüm blogları getir
const getAllBlogs = (req, res) => {
  res.json(blogs);
};

// Yeni bir blog oluştur
const createBlog = (req, res) => {
  const { title, content } = req.body;
  const newBlog = { id: Date.now(), title, content };
  blogs.push(newBlog);
  res.status(201).json(newBlog);
};

// Blog güncelle
const updateBlog = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const blog = blogs.find(b => b.id == id);

  if (!blog) {
    return res.status(404).json({ message: 'Blog bulunamadı.' });
  }

  blog.title = title || blog.title;
  blog.content = content || blog.content;
  res.json(blog);
};

// Blog sil
const deleteBlog = (req, res) => {
  const { id } = req.params;
  const index = blogs.findIndex(b => b.id == id);

  if (index === -1) {
    return res.status(404).json({ message: 'Blog bulunamadı.' });
  }

  blogs.splice(index, 1);
  res.status(204).send();
};

module.exports = {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
};