const Layout = ({ children }) => {
  return (
    <div className="app">
      <div className="header">
        <h1 className="text-xl font-bold -ml-12">Expense Tracker</h1>
      </div>

      <div className="main">
        <div className="container">{children}</div>
      </div>

      <div className="footer">&copy;2024 Md. Shamim Islam</div>
    </div>
  );
};

export default Layout;
