const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// Milestone 1 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 2 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

const container = document.querySelector("#container");
const postLiked = [];

for (let i = 0; i < posts.length; i++) {
    const post = document.querySelector("#post").content.cloneNode(true);

    post.querySelector(".post-meta__time").innerHTML = new Date(posts[i].created).toLocaleDateString();

    post.querySelector(".post__text").innerHTML = posts[i].content;
    post.querySelector(".post-meta__icon img").src = posts[i].author.image;
    post.querySelector(".post-meta__icon img").alt = posts[i].author.name;
    post.querySelector(".post-meta__author").innerHTML = posts[i].author.name;
    post.querySelector(".post__image img").src = posts[i].media;
    post.querySelector(".js-likes-counter").innerHTML = posts[i].likes;
    post.querySelector(".js-like-button").setAttribute("data-postid", posts[i].id);


    container.append(post);


}

let footer = document.querySelectorAll(".post__footer");
for (let i = 0; i < footer.length; i++) {

    const likeBtn = footer[i].querySelector(".js-like-button");
    let likesCount = footer[i].querySelector(".js-likes-counter");

    likeBtn.addEventListener("click", function () {
        likeBtn.classList.toggle("like-button--liked");

        if (likeBtn.classList.contains("like-button--liked")) {
            //likeBtn.classList.add("like-button--liked");
            postLiked.push(likeBtn.getAttribute("data-postid"));
            //  let likesCount = Number(footer[i].querySelector(".js-likes-counter").innerHTML);
            likesCount.innerHTML = Number(likesCount.innerHTML) + 1;
            console.log(postLiked);
        } else {
            postLiked.splice(postLiked.indexOf(likeBtn.getAttribute("data-postid")), 1);
            // let likesCount = Number(footer[i].querySelector(".js-likes-counter").innerHTML);
            likesCount.innerHTML = Number(likesCount.innerHTML) - 1;
            console.log(postLiked);

        }



    });

}


