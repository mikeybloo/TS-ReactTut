import React from 'react'

type ButtonProps = { 
    style: React.CSSProperties;
};

export default function Button({ style }: ButtonProps) {
    return (
        <button style={style}>Click me</button>
    )
} 