// app/layout.js

import './globals.css';
import BootstrapProvider from './components/BootstrapProvider';
import NavbarWrapper from './components/NavbarWrapper';


export const metadata = {
  title: 'Event Management',
  description: 'Your event partner',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BootstrapProvider />
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
