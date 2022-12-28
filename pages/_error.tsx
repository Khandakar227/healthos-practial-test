import {NextPageContext, NextPage} from 'next'

interface Props {
  statusCode?: number
}

const Error:NextPage<Props> =({ statusCode }) => {
  return (
    <div className="w-full h-full grid place-items-center py-4">
        <div>
            <h1 className="text-3xl text-center font-bold py-4"> {statusCode} </h1>
            <p className="text-xl text-center py-4"> Oops! Something went wrong </p>
        </div>        
    </div>
  )
}

Error.getInitialProps = ({ res, err }:NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error