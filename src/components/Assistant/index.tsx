import React, { useEffect, useState } from 'react'

import Style from '../../styles/Assistant'

const Assistant: React.FC = () => {
    const [spy, setSpy] = useState('started')
    const [time, setTime] = useState(0)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const init = setTimeout(() => {
            setSpy('spy')
            setToggle(true)
        }, 1800)

        return () => clearTimeout(init)
    }, [])

    useEffect(() => {
        const count = setInterval(() => {
            setTime(prevState => prevState + 1)
        }, 1000)

        if (time === 20) {
            setSpy('calm')
        }
    
        if (time === 50) {
            setSpy('waiting')
        }

        if (time === 60) {
            setSpy('calm')
            setTime(0)
        }

        return () => clearInterval(count)
    }, [time])

    useEffect(() => {
        if (toggle === false) {
            const toSpy = setTimeout(() => {
                setSpy('spy')
                setToggle(true)
            }, 1800)

            return () => clearTimeout(toSpy)
        }
    }, [toggle])

    const change = () => {
        if (toggle === true) {
            setSpy('alert')
            setTime(0)
            setToggle(false)
        }
    }

    const toSpy = () => {
        if (toggle === true) {
            setSpy('spy')
            setTime(0)
        }
    }

    return (
        <Style variant={spy} onClick={change}></Style>
    )
}

export default Assistant