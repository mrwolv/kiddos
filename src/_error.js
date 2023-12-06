/* eslint-disable react/prop-types */


import ErrorPage from './components/ErrorPage'

const CustomErrorPage = ({ statusCode }) => {
    return <ErrorPage statusCode={statusCode} />
}

CustomErrorPage.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default CustomErrorPage

