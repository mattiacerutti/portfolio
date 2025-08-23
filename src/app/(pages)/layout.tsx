export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center w-full px-6 mt-30">
      <div className="w-4xl">{children}</div>
    </div>
  );
}
