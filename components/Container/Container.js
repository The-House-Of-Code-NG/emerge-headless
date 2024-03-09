
export default function Container({ children }) {
  return (
    <div className="w-full px-[1.25rem] lg:px-[8rem] overflow-hidden">
      {children}
    </div>
  );
}
