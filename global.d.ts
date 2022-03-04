import mongoose from 'mongoose'

export declare global {
    var mongo: { 
        conn: typeof mongoose | null, 
        promise: Promise<typeof mongoose> | null
    }
}