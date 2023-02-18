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

    const { email, password, group, graduationYear, firstName, lastName } =
      registerButton.closest('form');

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
      if (error.message.includes('isEmail'))
        message.innerHTML = 'Incorrect email address';
      if (error.message.includes('email must be unique'))
        message.innerHTML = 'Email address already in use';
    }
  }

  if (event.target.dataset.type === 'login-button') {
    const loginButton = event.target;
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
    const error = await response.text();
    const message = loginButton.nextElementSibling;
    message.innerHTML = error;
    if (error.includes('isEmail'))
      message.innerHTML = 'Incorrect email address';
    if (error.includes('email must be unique'))
      message.innerHTML = 'Email address already in use';
  }

  if (event.target.dataset.type === 'logout-link') {
    await fetch('/auth/logout');
    const response = await fetch('/');
    const html = await response.text();
    mainContainer.innerHTML = '';
    mainContainer.innerHTML = html;
    window.history.pushState(null, null, '/');
  }
});
