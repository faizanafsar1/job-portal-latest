export default function Modal({ isOpen, children }) {
  if (!isOpen) return null;
  return (
    <section className="bg-black/50 top-0 left-0 z-10 content-center fixed h-screen w-screen">
      <div className="max-w-xl mx-auto shadow-lg  rounded-2xl bg-white ">
        {children}
      </div>
    </section>
  );
}
