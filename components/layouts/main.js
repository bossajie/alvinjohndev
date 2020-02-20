import Head from 'next/head'
const MainLayout = ({ children }) => (
  <div className="main-container">
    <Head>
		<meta 
			key="viewport"
			name="viewport" 
			content="width=device-width, initial-scale=1, shrink-to-fit=no"
		/>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
		<script src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon_io/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon_io/favicon-16x16.png" />
		<link rel="manifest" href="/static/images/favicon_io/site.webmanifest"></link>
		<title>Alvin John</title>
	</Head>
	{children}
  </div>
);

export default MainLayout;