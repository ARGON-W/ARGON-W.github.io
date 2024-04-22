var posts=["2024/04/10/Hexo/hexo/","2024/04/23/HTML/Html学习笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };