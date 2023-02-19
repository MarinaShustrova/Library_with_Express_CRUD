mainContainer.addEventListener('click', async (event) => {
  event.preventDefault();

  if (event.target.dataset.type === 'main-link') {
    await myRedirect(event, '/');
  }

  if (event.target.dataset.type === 'register-link') {
    await myRedirect(event, '/auth/register');
  }

  if (event.target.dataset.type === 'login-link') {
    await myRedirect(event, '/auth/login');
  }

  if (event.target.dataset.type === 'register-button') {
    const registerButton = event.target;
    const message = registerButton.nextElementSibling;

    const {
      email, password, group, graduationYear, firstName, lastName,
    } = registerButton.closest('form');

    const year = Number(graduationYear.value);
    if (Number.isNaN(year)) {
      message.innerHTML = 'Год выпуска должен быть числом';
      return;
    }
    if (year < 2018 || year > 2077) {
      message.innerHTML = 'Год выпуска должен быть между 2018 и 2077 г.';
      return;
    }

    const response = await fetch('/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
        group: group.value,
        graduationYear: graduationYear.value,
        firstName: firstName.value,
        lastName: lastName.value,
      }),
    });

    if (response.ok) {
      const response2 = await fetch('/');
      const html = await response2.text();
      mainContainer.innerHTML = '';
      mainContainer.innerHTML = html;
      window.history.pushState(null, null, '/');
    } else {
      const error = await response.json();
      message.innerHTML = error.message;
      if (error.message.includes('isEmail')) { message.innerHTML = 'Incorrect email address'; }
      if (error.message.includes('email must be unique')) { message.innerHTML = 'Email address already in use'; }
    }
  }

  if (event.target.dataset.type === 'login-button') {
    const loginButton = event.target;
    const message = loginButton.nextElementSibling;
    const { email, password } = loginButton.closest('form');

    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    if (response.ok) {
      const response2 = await fetch('/');
      const html = await response2.text();
      mainContainer.innerHTML = '';
      mainContainer.innerHTML = html;
      window.history.pushState(null, null, '/');
    }
    const error = await response.json();
    message.innerHTML = error.message;
  }

  if (event.target.dataset.type === 'logout-link') {
    await fetch('/auth/logout');
    const response = await fetch('/');
    const html = await response.text();
    mainContainer.innerHTML = '';
    mainContainer.innerHTML = html;
    window.history.pushState(null, null, '/');
  }

  if (event.target.dataset.type === 'addbook-link') {
    await myRedirect(event, '/books/add');
  }

  if (event.target.dataset.type === 'addbook-button') {
    const addBookButton = event.target;
    const { title, description, cover } = addBookButton.closest('form');

    const response = await fetch('/books/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title.value,
        description: description.value,
        cover: cover.value,
      }),
    });

    if (response.ok) {
      const response2 = await fetch('/');
      const html = await response2.text();
      mainContainer.innerHTML = '';
      mainContainer.innerHTML = html;
      window.history.pushState(null, null, '/');
    }
    const error = await response.text();
    const message = addBookButton.nextElementSibling;
    message.innerHTML = error;
  }

  // todo 4 релиз лайки
  if (event.target.dataset.type === 'like-button') {
    const likeButton = event.target;
    const { bookid } = likeButton.dataset;

    const response = await fetch('/books/like', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bookId: bookid,
      }),
    });

    if (response.ok) {
      likeButton.previousSibling.innerText = Number(likeButton.previousSibling.innerText) + 1;
      likeButton.dataset.type = 'unlike-button';
    }
    likeButton.classList.remove('bi-heart');
    likeButton.classList.add('bi-heart-fill');
    return;
  }

  if (event.target.dataset.type === 'unlike-button') {
    const likeButton = event.target;
    const { bookid } = likeButton.dataset;

    const response = await fetch('/books/unlike', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bookId: bookid,
      }),
    });

    if (response.ok) {
      likeButton.previousSibling.innerText = Number(likeButton.previousSibling.innerText) - 1;
      likeButton.dataset.type = 'like-button';
    }
    likeButton.classList.remove('bi-heart-fill');
    likeButton.classList.add('bi-heart');
  }

  // todo 5 release
  if (event.target.dataset.type === 'mybooks-link') {
    await myRedirect(event, '/books/my');
  }
});
