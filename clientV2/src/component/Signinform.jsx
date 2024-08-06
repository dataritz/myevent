export default function Signinform({ userinfo, handleInput, handleSubmit }) {
  return (
    <>
      <div className="container mt-3">
        <form method="POST" onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mt-3"
            name="email"
            placeholder="Enter Your email-id"
            value={userinfo.email}
            onChange={handleInput}
          ></input>
          <input
            type="password"
            className="form-control mt-3"
            name="password"
            placeholder="Enter Your password"
            value={userinfo.password}
            onChange={handleInput}
          ></input>
          <button className="btn btn-outline-primary mt-3">SignIn</button>
        </form>
      </div>
    </>
  );
}
