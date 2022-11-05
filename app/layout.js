export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"/>
      </head>
      <body>{children}</body>
    </html>
  )
}
