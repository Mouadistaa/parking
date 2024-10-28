// ./src/views/shared/Layout.tsx

import { html } from "hono/html"; // Assurez-vous que vous avez installé Hono

type Props = {
  children: React.ReactNode; // Contenu enfant (typage avec React.ReactNode)
  pageTitle: string; // Titre de la page
};

export const Layout = ({ children, pageTitle }: Props) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${pageTitle}</title> <!-- Utilisation de pageTitle pour le titre de la page -->
    </head>
    <body>
      ${children} <!-- Contenu des enfants inséré ici -->
    </body>
  </html>
`;
