const deleteBlog = (id, callback) => {
    fetch('http://localhost:8000/posts/' + id, {
        method: 'DELETE'
    }).then(() => {
        console.log('deleted - ' + id);

        if(typeof callback === 'function') callback();
    });
};

export default deleteBlog;