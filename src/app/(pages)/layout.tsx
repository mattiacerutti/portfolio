export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full max-w-4xl px-6 mt-30">
      {children}
    </div>
  );
}
