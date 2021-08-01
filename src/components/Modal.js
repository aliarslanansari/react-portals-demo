import ReactDOM from 'react-dom'

const modalStyle = {}

export default function Modal() {
  const portalDOM = document.getElementById('portal-root')

  return ReactDOM.createPortal(
    <div
      style={{
        position: 'absolute',
        top: 10,
        left: '50%',
        padding: 20,
        background: 'lightpink',
      }}>
      Modal Portal
    </div>,
    portalDOM
  )
}
