import './Button.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  to,
  onClick,
  type = 'button',
  fullWidth = false,
  ...props 
}) {
  const className = `btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''}`;
  
  // Convert 'to' prop to 'href' for internal navigation
  const linkHref = to || href;
  
  // Clean URLs (no .html) — Vercel cleanUrls serves the right page
  const getHref = (path) => {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    const [basePath, hash] = path.split('#');
    const clean = basePath === '/' || basePath === '' ? '/' : basePath.startsWith('/') ? basePath : `/${basePath}`;
    return hash ? `${clean}#${hash}` : clean;
  };
  
  if (linkHref) {
    const finalHref = getHref(linkHref);
    return (
      <a href={finalHref} className={className} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button type={type} className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
