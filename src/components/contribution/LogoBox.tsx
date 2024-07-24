const LogoBox = ({ path, alt }: { path: string; alt: string }) => {
  return (
    <span className="shadow-md rounded-md overflow-hidden">
      <img src={path} alt={alt} />
    </span>
  )
}
export default LogoBox
