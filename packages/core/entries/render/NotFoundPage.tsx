import type { RouteMap } from '../types';

interface NotFoundPageProps {
  attemptedPath: string;
  routeMap: RouteMap;
}

export const NotFoundPage = ({
  attemptedPath,
  routeMap,
}: NotFoundPageProps) => (
  <div>
    <style
      dangerouslySetInnerHTML={{
        __html: `
          th, td {
            padding: 5px
          }`,
      }}
    />
    <p>Unable to locate configuration for {attemptedPath}.</p>
    <p>
      The available routes in your application are:
      <table>
        <tr style={{ textAlign: 'left' }}>
          <th>Route</th>
          <th>Defined in</th>
        </tr>
        {Object.entries(routeMap)
          .sort((a, b) => (a[0] > b[0] ? 1 : -1))
          .map(([route, pageData]) => (
            <tr key={route}>
              <td>
                <a href={route}>{route}</a>
              </td>
              <td>{pageData.pageName}</td>
            </tr>
          ))}
      </table>
    </p>
    <p>
      If you did mean to access {attemptedPath}, you may need to add it to a{' '}
      <a href="https://crackle.docs/pagefiles">page file</a>.
    </p>
    <p style={{ fontSize: '0.8rem' }}>
      This page won’t appear in production builds.
    </p>
  </div>
);
