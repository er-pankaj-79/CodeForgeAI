import React from 'react'

const EmptyState = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16">
            <img src="/empty-state.jpg" alt="No Projects" className='w-48 h-48 mb-4' />
            <h1 className="text-2xl font-bold mb-4 text-gray-700">No Playgrounds Found</h1>
            <p className="text-gray-600">Create a new Project to get started.</p>
        </div>
    )
}

export default EmptyState