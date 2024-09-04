import React from 'react'

interface SkeletonProps {
  repeat?: number
}

export default function Skeleton({ repeat}: SkeletonProps) {
  return (
    <>
      {Array.from({ length: repeat ?? 1 }, (_, index) => index).map((value) => (
        <div className="shadow rounded-md p-4 max-w-sm w-full mx-auto h-full" key={value}>
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
