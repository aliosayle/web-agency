import { Link } from 'react-router-dom';
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
  
  if (to) {
    return (
      <Link to={to} className={className} {...props}>
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={className} {...props}>
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
