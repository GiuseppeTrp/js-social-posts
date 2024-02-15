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





// Seleziono l'elemento con id "post-added" nel DOM
const addPost = document.querySelector("#post-added");

// Itero su ogni post nell'array
posts.forEach(post => {
    // Creo un elemento div per ogni post
    const card = document.createElement("div");
    // Aggiungo le classi  all'elemento appena creato
    card.classList.add("card", "my-3");

    // Creo un elemento div per l'header della carta
    const headCard = document.createElement("div");
    headCard.classList.add("card-header");

    // Creo un elemento div per l'autore
    const author = document.createElement("div");
    author.classList.add("author", "d-flex", "align-items-center");

    // Creo un elemento img per l'immagine dell'autore
    const authImage = document.createElement("img");
    // Imposto l'attributo "src" dell'immagine con l'URL dell'immagine dell'autore
    authImage.src = post.author.image;
    // Aggiungo la classe "rounded-circle" all'immagine
    authImage.classList.add("rounded-circle");

    // Creo un elemento span per il nome dell'autore
    const authorName = document.createElement('span');
    // Imposto il testo del nome dell'autore con il nome presente nel post corrente
    authorName.textContent = post.author.name;

    // Aggiungo l'elemento span del nome dell'autore all'elemento div dell'autore
    author.appendChild(authorName);
    // Aggiungo l'elemento img dell'immagine dell'autore all'elemento div dell'autore
    author.appendChild(authImage);

    // Aggiungo l'elemento div dell'autore all'elemento div dell'header della carta
    headCard.appendChild(author);

    // Aggiungo l'elemento div dell'header della carta all'elemento della carta
    card.appendChild(headCard);

    // Aggiungo la carta all'elemento con id "post-added" nel DOM
    addPost.appendChild(card);
});














