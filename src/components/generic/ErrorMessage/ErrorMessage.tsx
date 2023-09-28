import React from 'react'
interface ErrorProps{
    text: string;
}
function ErrorMessage(props: ErrorProps) {
  return (
    <p className="text-red-600 text-center">{props.text}</p>
  )
}

export default ErrorMessage;