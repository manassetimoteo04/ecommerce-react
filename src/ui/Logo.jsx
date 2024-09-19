import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <h1 className="h-7 w-7">
        <img src="images/logo.svg" alt="" className="size-7" />
      </h1>
    </Link>
  );
}

export default Logo;
