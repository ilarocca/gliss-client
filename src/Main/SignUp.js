function SignUp() {
  return (
    <div>
      <header role="banner">
        <h3>Let's get cooking.</h3>
      </header>

      <form>
        <div>
          <label for="username">Username</label>
          <input
            placeholder="username"
            type="text"
            name="first-name"
            id="first-name"
          />
        </div>

        <div>
          <label for="username">Email</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
