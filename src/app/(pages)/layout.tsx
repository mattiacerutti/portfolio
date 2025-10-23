export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mt-30 flex w-full justify-center px-6">
      <div className="w-4xl">{children}</div>
    </div>
  );
}
