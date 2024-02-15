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
    // Aggiunge le classi "card" e "my-3" al nuovo elemento div
    card.classList.add("card", "my-3");

    // Crea un nuovo elemento div per l'header della carta
    const headCard = document.createElement("div");
    // Aggiunge la classe "card-header" al nuovo elemento div
    headCard.classList.add("card-header");

    // Crea un nuovo elemento div per l'autore
    const author = document.createElement("div");
    // Aggiunge le classi "author", "d-flex" e "align-items-center" al nuovo elemento div
    author.classList.add("author", "d-flex", "align-items-center");

    // Crea un nuovo elemento img per l'immagine dell'autore
    const authImage = document.createElement("img");
    // Imposta l'attributo "src" dell'immagine dell'autore con l'URL dell'immagine specificata nel post corrente
    authImage.src = post.author.image;
    // Aggiunge le classi  all'elemento img
    authImage.classList.add("rounded-circle", "mini-img");

    // Crea un nuovo elemento span per il nome dell'autore
    const authorName = document.createElement("span");
    // Imposta il testo del nome dell'autore con il nome specificato nel post corrente
    authorName.textContent = post.author.name;

    // Aggiunge l'elemento span del nome dell'autore all'elemento div dell'autore
    author.appendChild(authorName);
    // Aggiunge l'elemento img dell'immagine dell'autore all'elemento div dell'autore
    author.appendChild(authImage);

    // Aggiunge l'elemento div dell'autore all'elemento div dell'header della carta
    headCard.appendChild(author);

    // Aggiunge l'elemento div dell'header della carta all'elemento della carta
    card.appendChild(headCard);

    // Crea un nuovo elemento div per il testo del post
    const text = document.createElement("div");
    // Aggiunge la classe "card-body" all'elemento div del testo del post
    text.classList.add("card-body");
    // Imposta il testo del contenuto del post con il contenuto specificato nel post corrente
    text.textContent = post.content;

    // Aggiunge l'elemento div del testo del post all'elemento della carta
    card.appendChild(text);

    // Crea un nuovo elemento div per l'immagine del post
    const postImage = document.createElement("div");
    // Aggiunge la classe "post-image" all'elemento div dell'immagine del post
    postImage.classList.add("post-image");
    // Crea un nuovo elemento img per l'immagine del post
    const image = document.createElement("img");
    // Imposta l'attributo "src" dell'immagine del post con l'URL specificato nel post corrente
    image.src = post.media;
    // Aggiunge l'elemento img dell'immagine del post all'elemento div dell'immagine del post
    postImage.appendChild(image);
    // Aggiunge l'elemento div dell'immagine del post all'elemento della carta
    card.appendChild(postImage);

    // Crea un nuovo elemento div per il footer del post
    const footer = document.createElement("div");
    // Aggiunge la classe "footer" all'elemento div del footer del post
    footer.classList.add("footer");

    // Crea un nuovo elemento div per i "Mi Piace" e il bottone "Mi Piace"
    const likes = document.createElement("div");
    // Aggiunge le classi "likes" e "js-likes" all'elemento div dei "Mi Piace"
    likes.classList.add("likes", "js-likes");

    const likesAction = document.createElement("div");
    // Aggiunge la classe "likes-action" all'elemento div dell'azione "Mi Piace"
    likesAction.classList.add("likes-action");

    const likeButton = document.createElement("a");
    // Aggiunge la classe "like-button" all'elemento a del bottone "Mi Piace"
    likeButton.classList.add("like-button");
    // Imposta l'attributo "data-postid" con l'id del post corrente per identificarlo
    likeButton.dataset.postid = post.id;

    const likeButtonIcon = document.createElement("i");
    // Aggiunge le classi "button-icon", "fas" e "fa-thumbs-up" all'elemento i dell'icona del bottone "Mi Piace"
    likeButtonIcon.classList.add("button-icon", "fas", "fa-thumbs-up");
    // Imposta l'attributo "aria-hidden" per indicare che l'icona non è significativa per la descrizione testuale
    likeButtonIcon.setAttribute("aria-hidden", "true");

    const likeButtonLabel = document.createElement("span");
    // Aggiunge la classe "button-label" all'elemento span del testo del bottone "Mi Piace"
    likeButtonLabel.classList.add("button-label");
    // Imposta il testo del bottone "Mi Piace"
    likeButtonLabel.textContent = "Mi Piace";

    // Aggiunge l'icona e il testo del bottone "Mi Piace" all'elemento a
    likeButton.appendChild(likeButtonIcon);
    likeButton.appendChild(likeButtonLabel);

    // Aggiunge l'elemento a del bottone "Mi Piace" all'elemento div dell'azione "Mi Piace"
    likesAction.appendChild(likeButton);

    const likesCounter = document.createElement("div");
    // Aggiunge la classe "likes-counter" all'elemento div del contatore dei "Mi Piace"
    likesCounter.classList.add("likes-counter");
    // Imposta il contenuto del contatore dei "Mi Piace" con il numero di "Mi Piace" del post corrente
    likesCounter.innerHTML = `Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone`;

    // Aggiunge l'azione "Mi Piace" e il contatore dei "Mi Piace" all'elemento dei "Mi Piace"
    likes.appendChild(likesAction);
    likes.appendChild(likesCounter);

    // Aggiunge l'elemento dei "Mi Piace" al footer del post
    footer.appendChild(likes);

    // Aggiunge il footer del post all'elemento della carta
    card.appendChild(footer);

    // Aggiunge la carta all'elemento con id "post-added" nel DOM
    addPost.appendChild(card);
});














