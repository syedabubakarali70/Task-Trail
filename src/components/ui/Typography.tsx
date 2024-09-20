type Typography = {
  children: string;
  className?: string;
};

export function P({ children, className }: Typography) {
  return <p className={`leading-7 ${className}`}>{children}</p>;
}

export function H1({ children, className }: Typography) {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: Typography) {
  return (
    <h2
      className={`scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className }: Typography) {
  return (
    <h3
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className }: Typography) {
  return (
    <h4
      className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}
    >
      {children}
    </h4>
  );
}

export function UL({ children }: { children: React.ReactNode }) {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
}
export function Small({ children, className }: Typography) {
  return (
    <small className={`text-sm font-normal block ${className}`}>
      {children}
    </small>
  );
}
