

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










// Seleziona l'elemento nel DOM dove verranno aggiunti i post
const addPost = document.querySelector("#post-added");

// Itera su ogni post nell'array dei post
posts.forEach(post => {
    // Crea un nuovo elemento div che rappresenterà un post
    const card = document.createElement("div");
    // Aggiunge le classi "post" e "my-3" al nuovo elemento div
    card.classList.add("post", "my-3");

    // Creazione dell'header della carta
    const headCard = document.createElement("div");
    headCard.classList.add("post__header");

    // Creazione del blocco dell'autore
    const author = document.createElement("div");
    author.classList.add("post-meta");

    // Creazione dell'icona dell'autore
    const postMetaIcon = document.createElement("div");
    postMetaIcon.classList.add("post-meta__icon");

    // Creazione dell'immagine dell'autore
    const authImage = document.createElement("img");
    authImage.src = post.author.image;
    authImage.classList.add("profile-pic");

    // Creazione dei metadati dell'autore
    const postMetaData = document.createElement("div");
    postMetaData.classList.add("post-meta__data");

    // Creazione del nome dell'autore
    const authorName = document.createElement("div");
    authorName.classList.add("post-meta__author");
    authorName.textContent = post.author.name;

    // Creazione del tempo del post
    const postTime = document.createElement("div");
    postTime.classList.add("post-meta__time");
    postTime.textContent = formatDate(post.created); // Formattazione della data (Milestone 3 - BONUS)

    // Aggiunta dell'immagine dell'autore all'icona dell'autore
    postMetaIcon.appendChild(authImage);

    // Aggiunta del nome dell'autore e del tempo del post ai metadati dell'autore
    postMetaData.appendChild(authorName);
    postMetaData.appendChild(postTime);

    // Aggiunta dell'icona dell'autore e dei metadati dell'autore al blocco dell'autore
    author.appendChild(postMetaIcon);
    author.appendChild(postMetaData);

    // Aggiunta del blocco dell'autore all'header della carta
    headCard.appendChild(author);

    // Aggiunta dell'header della carta alla carta
    card.appendChild(headCard);

    // Creazione del testo del post
    const text = document.createElement("div");
    text.classList.add("post__text");
    text.textContent = post.content;

    // Aggiunta del testo del post alla carta
    card.appendChild(text);

    // Creazione dell'immagine del post
    const postImage = document.createElement("div");
    postImage.classList.add("post__image");

    // Creazione dell'elemento img per l'immagine del post
    const image = document.createElement("img");
    image.src = post.media;
    postImage.appendChild(image);

    // Aggiunta dell'immagine del post alla carta
    card.appendChild(postImage);

    // Creazione del footer del post
    const footer = document.createElement("div");
    footer.classList.add("post__footer");

    // Creazione dei "Mi Piace" e del bottone "Mi Piace"
    const likes = document.createElement("div");
    likes.classList.add("likes", "js-likes");

    // Creazione dell'azione "Mi Piace"
    const likesAction = document.createElement("div");
    likesAction.classList.add("likes__cta");

    // Creazione del bottone "Mi Piace"
    const likeButton = document.createElement("a");
    likeButton.classList.add("like-button", "js-like-button");
    likeButton.href = "#";
    likeButton.dataset.postid = post.id;

    // Creazione dell'icona del bottone "Mi Piace"
    const likeButtonIcon = document.createElement("i");
    likeButtonIcon.classList.add("like-button__icon", "fas", "fa-thumbs-up");
    likeButtonIcon.setAttribute("aria-hidden", "true");

    // Creazione del testo del bottone "Mi Piace"
    const likeButtonLabel = document.createElement("span");
    likeButtonLabel.classList.add("like-button__label");
    likeButtonLabel.textContent = "Mi Piace";

    // Aggiunta dell'icona e del testo del bottone "Mi Piace" al bottone stesso
    likeButton.appendChild(likeButtonIcon);
    likeButton.appendChild(likeButtonLabel);

    // Aggiunta del bottone "Mi Piace" all'azione "Mi Piace"
    likesAction.appendChild(likeButton);

    // Creazione del contatore dei "Mi Piace"
    const likesCounter = document.createElement("div");
    likesCounter.classList.add("likes__counter");
    likesCounter.innerHTML = `Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone`;

    // Aggiunta dell'azione "Mi Piace" e del contatore dei "Mi Piace" ai "Mi Piace"
    likes.appendChild(likesAction);
    likes.appendChild(likesCounter);

    // Aggiunta dei "Mi Piace" al footer del post
    footer.appendChild(likes);

    // Aggiunta del footer del post alla carta
    card.appendChild(footer);

    // Aggiunta della carta all'elemento con id "post-added" nel DOM
    addPost.appendChild(card);
});

// Funzione per formattare la data nel formato gg/mm/aaaa (Milestone 3 - BONUS)
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}











