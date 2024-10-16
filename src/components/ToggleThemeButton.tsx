"use client"
const ToggleThemeButton = ({ dark }: { dark: boolean }) => {
  return (
    <div className="flex items-center gap-x-2 border dark:bg-white rounded-lg border-black">
      {dark ? (
        <img src="/assets/moon.png" width={28} className="p-[4px]" />
      ) : (
        <img src="/assets/sunny.png" width={28} className="p-[4px]" />
      )}
    </div>
  )
}

export default ToggleThemeButton
