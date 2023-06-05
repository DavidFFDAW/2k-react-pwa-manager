import React from 'react'

export default function Dialog({ visible, toggleVisibility, children }) {
  return (
    <dialog open={visible} className='dialog-modal'>
      <header className='dialog-header'>
            <button className='dialog-close-button' type='button' onClick={toggleVisibility}>X</button>
      </header>
      <section className="dialog-content">{children}</section>
    </dialog>
  )
}
