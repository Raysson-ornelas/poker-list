import { ReactNode } from 'react'

interface Props {
    children: ReactNode,
}

function Container(props: Props) {
    const {children} = props

    return (
        <div className='mx-auto max-w-sm sm:max-w-2xl lg:max-w-6xl'>
            {children}
        </div>
    )
}

export default Container
