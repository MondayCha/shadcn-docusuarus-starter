"use client"

import { ResponsiveContainer } from "recharts"

export type ChartConfig = {
    [key: string]: {
        label: string
        color: string
    }
}

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    config: ChartConfig
}

export function ChartContainer({
    config,
    children,
    className,
    ...props
}: ChartContainerProps) {
    return (
        <div
            style={
                {
                    ...Object.entries(config).reduce(
                        (acc, [key, value]) => ({
                            ...acc,
                            [`--color-${key}`]: value.color,
                        }),
                        {}
                    ),
                } as React.CSSProperties
            }
            className={className}
            {...props}
        >
            <ResponsiveContainer width="100%" height="100%">
                {children}
            </ResponsiveContainer>
        </div>
    )
} 