export const metadata = {
  title: "DesignForge Studio",
  description: "AI-powered creator platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}