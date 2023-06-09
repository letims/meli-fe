import { useRouteError } from "react-router-dom";
import { Oops, PageNotFound } from "../assets/literals";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>{Oops}</h1>
      <p>{PageNotFound}</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}