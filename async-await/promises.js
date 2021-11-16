const Posts= [
    {name: 'Post One', title: 'This is Post One'},
    {name: 'Post Two', title: 'This is Post Two'},
    {name: 'Post Three', title: 'This is Post Three'},
    {name: 'Post Four', title: 'This is Post Four'},
]

function getPosts() {
    setTimeout(()=>{
        let output='';
        Posts.forEach((post)=> {
            output+=`<li>${post.name} </li>`
        })
        document.body.innerHTML=output;
    },1000)
}

// getPosts();

function createPosts(post) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            Posts.push(post)
            const err=true;
            if (!err) {
                resolve();
            } else {
                reject('Error: SomeThing Went Wrong');
            }
        },2000);
    })
}

createPosts({name: 'Post Five', title: 'This is Post five'})
            .then(getPosts)
            .catch((err)=> {
                console.log(err)
            });


// using fetch 
fetch(`https://jsonplaceholder.typicode.com/todos/1`)
            .then(res=> res.json())
            .then(json=> console.log(json))