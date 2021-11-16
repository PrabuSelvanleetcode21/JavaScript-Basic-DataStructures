console.log('Understanding Callbacks')

// Array of objects
const posts= [
    {title: 'Post One', body: 'This is Post One'},
    {title: 'Post Two', body: 'This is Post Two'},
    {title: 'Post Three', body: 'This is Post Three'},
    {title: 'Post Four', body: 'This is Post Four'},
    {title: 'Post Five', body: 'This is Post Five'},
];

const person = {
    firstName: "Prabu",
    lastName: "Selvan",
    age: 33
    // hobbies: ['Walking','Jogging', 'Studying'],
    // greet () {
    //     console.log('First Name is ', this.firstName);
    // }
};

// array of objects are iterable

// object is not iterable

// posts.forEach(function (post){
//     console.log(post)
// })


function getPosts() {
    setTimeout(()=> {
        let output='';
        posts.forEach((post, index)=> {
            output+=`<li> ${post.title}</li>`
        })
        document.body.innerHTML=output;
    },1000)
}




function createPosts(post, callback) {
    setTimeout(()=> {
        posts.push(post);
        callback();
    },2000)
}

getPosts();

createPosts({title: 'Post Six', body: 'This is Post Six'}, getPosts)

