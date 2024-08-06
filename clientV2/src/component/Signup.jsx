export default function Signup({ userinfo, handleInput, handleSubmit }) {
  return (
    <>
      <div className="container mt-3">
        <form
          method="POST"
          enctype="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="form-control mt-3"
            name="name"
            placeholder="Enter Your Name"
            onChange={handleInput}
            value={userinfo.name}
          ></input>
          <input
            type="number"
            className="form-control mt-3"
            name="mobile"
            placeholder="Enter Your mobile number"
            value={userinfo.mobile}
            onChange={handleInput}
          ></input>
          <input
            type="email"
            className="form-control mt-3"
            name="email"
            placeholder="Enter Your email-id"
            value={userinfo.email}
            onChange={handleInput}
          ></input>
          <input
            type="pasword"
            className="form-control mt-3"
            name="password"
            placeholder="Enter Your password"
            value={userinfo.password}
            onChange={handleInput}
          ></input>
          <input type="file" name="avatar" onChange={handleInput} />
          <button className="btn btn-outline-primary mt-3">SignIn</button>
        </form>
      </div>
    </>
  );
}
