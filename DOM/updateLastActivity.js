const posts = [
    { title: 'Post One' },
    { title: 'Post Two' },
  ];
  
  const user = {
    name: 'Chaithanya',
    lastActivityTime: '14th of Jan',
  };
  
  function create3rdPost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push({ title: 'Post Three' });
        resolve();
      }, 3000);
    });
  }
  
  function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        user.lastActivityTime = new Date().getTime();
        resolve(user.lastActivityTime);
      }, 1000);
    });
  }
  
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
        updateLastUserActivityTime().then((lastActivityTime) => {
          resolve(lastActivityTime);
        });
      }, 3000);
    });
  }
  
  function deletePost(index) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.splice(index, 1);
        resolve();
      }, 1000);
    });
  }
  
  Promise.all([createPost({title: 'Post Three'}), updateLastUserActivityTime()]).then(([lastActivityTime]) => {
    console.log('Posts:', posts);
    console.log('Last activity time:', lastActivityTime);
  
    
    deletePost(posts.length - 1).then(() => {
    
      console.log('Remaining posts:', posts);
    });
  });
  