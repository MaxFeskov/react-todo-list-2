import './style.scss';

type PropsType = {
  children: JSX.Element | Array<JSX.Element>;
}

function Layout({ children } : PropsType) {
  return (
    <div className="layout">
      <section className="layout__header">
        <h1 className="layout__title">Todo list</h1>
      </section>
      <section className="layout__content">
        {children}
      </section>
      <section className="layout__footer">
        <div className="layout__copyright">Todo list © 2021</div>
      </section>
    </div>
  )
}

export default Layout;
