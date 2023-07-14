import React from 'react'

export default function RootNavigator() {
  return (
    <div className="flex gap-2 group transition-colors">
        <button className="w-3 h-3 rounded-full bg-red-500 group-hover:bg-red-800" />
        <button className="w-3 h-3 rounded-full bg-yellow-500 group-hover:bg-yellow-800" />
        <button className="w-3 h-3 rounded-full bg-green-500 group-hover:bg-green-800" />
    </div>
  )
}
