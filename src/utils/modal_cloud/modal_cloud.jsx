import React from 'react'
import ReactDOM from 'react-dom'

let Props = {
    children: React.ReactChild,
    closeModal: () => {
    }
}

export const ModalCloud = React.memo(({children, closeModal} = Props) => {
    const domEl = document.getElementById("modal-cloud")

    if (!domEl) return null
    return ReactDOM.createPortal(
        <div>
            <button onClick={closeModal}>Close</button>
            {
                children
            }
        </div>,
        domEl
    )
})

export {ModalCloud as default} from "./modal_cloud.jsx"
