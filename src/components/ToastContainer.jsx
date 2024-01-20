
import { Toaster } from 'react-hot-toast'

function ToastContainer() {
  return ( <Toaster
    position="top-center"
    reverseOrder={false}
    gutter={8}
    containerClassName=""
    containerStyle={{}}
    toastOptions={{
      // Define default options
      className: '',
      duration: 2000,
      style: {
        background: '#111',
        color: '#fff',
        border:'1px solid '
      },
  
      // Default options for specific types
      success: {
        duration: 2700,
        theme: {
          primary: 'green',
          secondary: 'black',
        },
      },
    }}
  />
  )
}

export default ToastContainer