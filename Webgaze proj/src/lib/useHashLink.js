import { useLocation, useNavigate } from 'react-router-dom'

/* Shared click handler for `#section` links.
   On the home page the browser's native anchor jump does the work;
   anywhere else we route home with the hash and let App scroll after render. */
export const useHashLink = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (event, href) => {
    if (!href || href === '#' || !href.startsWith('#')) return
    if (pathname === '/') return
    event.preventDefault()
    navigate({ pathname: '/', hash: href })
  }
}

export default useHashLink
