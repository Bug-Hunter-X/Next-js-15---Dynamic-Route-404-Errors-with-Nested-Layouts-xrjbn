```javascript
import Link from 'next/link';
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      {router.isFallback && <p>Loading...</p>}
      {!router.isFallback && (
          <>
            <h1>{router.query.name}</h1>
          </>
        )}
    </div>
  );
}

export default MyComponent; 
```