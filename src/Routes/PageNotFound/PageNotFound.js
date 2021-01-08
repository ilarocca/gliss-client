import notFound from './404.jpg';
export default function PageNotFound() {
  return (
    <>
      <img src={notFound} alt="404 Page Not Found" />
    </>
  );
}
