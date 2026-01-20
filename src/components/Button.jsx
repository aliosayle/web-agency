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
  
  // Map React Router paths to HTML files
  const getHref = (path) => {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    
    // Handle hash links (e.g., /services#starter)
    const [basePath, hash] = path.split('#');
    
    if (basePath === '/' || basePath === '') {
      return hash ? `index.html#${hash}` : 'index.html';
    }
    
    if (basePath.startsWith('/')) {
      const htmlPath = basePath.slice(1) + '.html';
      return hash ? `${htmlPath}#${hash}` : htmlPath;
    }
    
    // If it already has .html, just return it with hash if present
    if (path.includes('.html')) return path;
    
    return hash ? `${path}.html#${hash}` : `${path}.html`;
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
