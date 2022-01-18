import React from "react";

const Modal = (props) => {
    const { open, close } = props;
    
    return (
        <div className={open ? 'openModal modal' : 'modal'}>
          {open ? (
            <section>
              <header>
                <button className="close" onClick={close}>
                  {' '}
                  &times;{' '}
                </button>
              </header>
              <main>{props.children}</main>
              <footer>
                <button className="close" onClick={close}>
                  {' '}
                  close{' '}
                </button>
              </footer>
            </section>
          ) : null}
        </div>
      );
};

export default Modal;